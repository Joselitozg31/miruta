'use client';

import { useEffect, useState, useRef } from 'react';
import Layout from '../../../components/Layout';

// Helper para interpolar entre dos puntos
function interpolateCoords(start, end, t) {
  return [
    start[0] + (end[0] - start[0]) * t,
    start[1] + (end[1] - start[1]) * t,
  ];
}

// Helper para obtener ruta realista usando OSRM (Open Source Routing Machine)
async function getRouteCoords(start, end) {
  // start y end: [lat, lng]
  // Añade 'steps=true' para que OSRM respete el sentido de circulación y evite contramano
  const url = `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson&steps=true`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (
      data &&
      data.routes &&
      data.routes[0] &&
      data.routes[0].geometry &&
      data.routes[0].geometry.coordinates
    ) {
      // OSRM da [lng, lat], lo convertimos a [lat, lng]
      return data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
    }
  } catch (e) {
    // Si falla, fallback a interpolación recta
  }
  return [start, end];
}

export default function Ubicacion() {
  const [rutas, setRutas] = useState([]);
  const [paradas, setParadas] = useState([]);
  const [rutaSeleccionada, setRutaSeleccionada] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [paradaActual, setParadaActual] = useState(0);
  const [interpolando, setInterpolando] = useState(false);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const trailMarkersRef = useRef([]); // <--- Añadido para el rastro

  // Cargar rutas y paradas
  useEffect(() => {
    fetch('/api/dashboard/rutas')
      .then(res => res.json())
      .then(data => setRutas(data));

    fetch('/api/dashboard/paradas')
      .then(res => res.json())
      .then(data => setParadas(data));

    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          if (user.tipo === 'admin') setIsAdmin(true);
        } catch {}
      }
    }
  }, []);

  // Paradas de la ruta seleccionada, ordenadas
  const paradasRuta = rutaSeleccionada
    ? paradas
        .filter(p => p.rutaId == rutaSeleccionada)
        .sort((a, b) => a.orden - b.orden)
    : [];

  // Limpia el rastro de líneas del mapa
  function clearTrailMarkers() {
    if (trailMarkersRef.current && Array.isArray(trailMarkersRef.current)) {
      trailMarkersRef.current.forEach(layer => {
        try {
          if (layer && mapRef.current && mapRef.current.hasLayer(layer)) {
            mapRef.current.removeLayer(layer);
          }
        } catch {}
      });
      trailMarkersRef.current = [];
    }
  }

  // Inicializa el mapa y marcador en la parada actual
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!rutaSeleccionada || paradasRuta.length === 0) return;

    // Limpia mapa anterior si existe
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
      markerRef.current = null;
    }
    clearTrailMarkers();

    const parada = paradasRuta[0];
    const center = [parseFloat(parada.latitud), parseFloat(parada.longitud)];

    // Carga Leaflet solo si no está cargado
    if (!window.L) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
      script.onload = () => initMap(center);
      document.body.appendChild(script);
    } else {
      initMap(center);
    }

    function initMap(center) {
      // Zoom a 17
      mapRef.current = window.L.map('mapa-ubicacion').setView(center, 17);
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapRef.current);
      markerRef.current = window.L.marker(center).addTo(mapRef.current);
    }

    setParadaActual(0);
    setInterpolando(false);
    // eslint-disable-next-line
  }, [rutaSeleccionada]);

  // Simulación automática de movimiento suave entre paradas (en bucle, por carretera si es posible)
  useEffect(() => {
    if (!rutaSeleccionada || paradasRuta.length === 0) return;

    let running = true;
    let animationFrame = null;
    let pauseTimeout = null;

    async function animateToNextParada(fromIdx, toIdx) {
      if (!mapRef.current || !markerRef.current) return;

      let start, end;
      start = [
        parseFloat(paradasRuta[fromIdx].latitud),
        parseFloat(paradasRuta[fromIdx].longitud),
      ];
      end = [
        parseFloat(paradasRuta[toIdx].latitud),
        parseFloat(paradasRuta[toIdx].longitud),
      ];

      const routeCoords = await getRouteCoords(start, end);

      // Dibuja la línea roja para este tramo
      if (window.L && mapRef.current && routeCoords.length > 1) {
        const polyline = window.L.polyline(routeCoords, {
          color: '#ff0000',
          weight: 4,
          opacity: 0.9
        }).addTo(mapRef.current);
        trailMarkersRef.current.push(polyline);
      }

      let step = 0;
      const totalSteps = routeCoords.length - 1;
      setInterpolando(true);

      function moveMarker() {
        if (!running) return;
        if (step < totalSteps) {
          const pos = routeCoords[step];
          markerRef.current.setLatLng(pos);
          mapRef.current.setView(pos, 17);
          step++;
          animationFrame = setTimeout(moveMarker, 350);
        } else {
          setInterpolando(false);
          // Si termina la ruta, limpia las líneas justo antes de empezar el siguiente ciclo
          if (toIdx === 0) {
            clearTrailMarkers();
          }
          // Espera 5 segundos en la parada antes de continuar
          pauseTimeout = setTimeout(() => {
            if (running) setParadaActual(toIdx);
          }, 5000);
        }
      }
      moveMarker();
    }

    // Lanzar animación cada vez que cambia paradaActual
    if (paradasRuta.length > 1) {
      if (paradaActual < paradasRuta.length - 1) {
        animateToNextParada(paradaActual, paradaActual + 1);
      } else if (paradaActual === paradasRuta.length - 1) {
        animateToNextParada(paradaActual, 0);
      }
    }

    return () => {
      running = false;
      if (animationFrame) clearTimeout(animationFrame);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
    // eslint-disable-next-line
  }, [rutaSeleccionada, paradaActual, paradasRuta.length]);

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="blue-box flex flex-col items-center justify-center w-full box-main">
          <h2 className="section-title">Ubicación</h2>
          <p className="text-lg mb-2">Selecciona una ruta para ver su ubicacion en tiempo real.</p>
          <div className="mb-4 w-full flex flex-col gap-2">
            {rutas.map(ruta => (
              <div key={ruta.idrutas} className="ubicacion-btn-row">
                <button
                  className={`ubicacion-route-btn${rutaSeleccionada === ruta.idrutas ? ' selected' : ''}`}
                  onClick={() => {
                    if (rutaSeleccionada === ruta.idrutas) {
                      setRutaSeleccionada(null);
                      setParadaActual(0);
                      setInterpolando(false);
                      if (mapRef.current) {
                        mapRef.current.remove();
                        mapRef.current = null;
                        markerRef.current = null;
                      }
                      clearTrailMarkers();
                    } else {
                      setRutaSeleccionada(ruta.idrutas);
                      setParadaActual(0);
                    }
                  }}
                >
                  {ruta.nombre}
                </button>
              </div>
            ))}
          </div>
          {rutaSeleccionada && paradasRuta.length > 0 && (
            <div id="mapa-ubicacion" style={{ width: '100%', maxWidth: 600, height: 400, borderRadius: 12, marginBottom: 24 }}></div>
          )}
          {rutaSeleccionada && paradasRuta.length === 0 && (
            <div className="data-card mt-4">No hay paradas registradas para esta ruta.</div>
          )}
        </div>
      </div>
    </Layout>
  );
}
