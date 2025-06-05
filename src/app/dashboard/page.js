'use client';

import { useEffect, useRef, useState } from 'react';
import Layout from '../../components/Layout';
import '../globals.css'; // Importa los estilos globales

// Helper para interpolar entre dos puntos
function interpolateCoords(start, end, t) {
  return [
    start[0] + (end[0] - start[0]) * t,
    start[1] + (end[1] - start[1]) * t,
  ];
}

// Helper para obtener ruta realista usando OSRM (Open Source Routing Machine)
async function getRouteCoords(start, end) {
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
  } catch (e) {}
  return [start, end];
}

export default function Dashboard() {
  const [favoriteRoutes, setFavoriteRoutes] = useState([]);
  const [allRutas, setAllRutas] = useState([]);
  const [selectedRuta, setSelectedRuta] = useState(null);
  const [paradas, setParadas] = useState([]);
  const [userId, setUserId] = useState(null);

  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const trailMarkersRef = useRef([]);
  const [paradaActual, setParadaActual] = useState(0);
  const [interpolando, setInterpolando] = useState(false);

  useEffect(() => {
    // Obtiene el userId del usuario autenticado
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          setUserId(user.idusuarios);
        } catch {}
      }
    }
  }, []);

  useEffect(() => {
    // Obtiene todas las rutas
    fetch('/api/dashboard/rutas')
      .then((res) => res.json())
      .then((data) => setAllRutas(data));

    // Obtiene todas las paradas
    fetch('/api/dashboard/paradas')
      .then((res) => res.json())
      .then((data) => setParadas(data));
  }, []);

  useEffect(() => {
    if (userId) {
      // Obtiene las rutas favoritas del usuario
      fetch(`/api/dashboard/favorite-routes?usuarioId=${userId}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setFavoriteRoutes(data);
          } else {
            setFavoriteRoutes([]);
          }
        })
        .catch(() => setFavoriteRoutes([]));
    }
  }, [userId]);

  // Mapea rutaId a nombre de ruta
  const rutaIdToNombre = allRutas.reduce((acc, ruta) => {
    acc[ruta.idrutas] = ruta.nombre;
    return acc;
  }, {});

  // Paradas asociadas a la ruta seleccionada, ordenadas
  const paradasRuta = selectedRuta
    ? paradas
        .filter((p) => p.rutaId == selectedRuta)
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
    if (!selectedRuta || paradasRuta.length === 0) return;

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
      mapRef.current = window.L.map('mapa-fav-ruta').setView(center, 15);
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapRef.current);
      markerRef.current = window.L.marker(center).addTo(mapRef.current);
    }

    setParadaActual(0);
    setInterpolando(false);

    // eslint-disable-next-line
  }, [selectedRuta, paradasRuta.length]);

  // Simulación automática de movimiento suave entre paradas (en bucle, por carretera si es posible)
  useEffect(() => {
    if (!selectedRuta || paradasRuta.length === 0) return;

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
          mapRef.current.setView(pos, 15);
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
  }, [selectedRuta, paradaActual, paradasRuta.length]);

  return (
    <Layout>
      <div className={`blue-box flex flex-col items-center justify-center${selectedRuta ? ' compact' : ''} box-main`}>
        <h2 className="section-title">Rutas Favoritas</h2>
        <ul className="list-main">
          {Array.isArray(favoriteRoutes) && favoriteRoutes.map((route) => (
            <li
              key={route.rutaId}
              className="route-list-item"
            >
              <button
                className="dashboard-fav-route-btn"
                type="button"
                onClick={() => {
                  if (selectedRuta === route.rutaId) {
                    setSelectedRuta(null);
                    setParadaActual(0);
                    setInterpolando(false);
                    if (mapRef.current) {
                      mapRef.current.remove();
                      mapRef.current = null;
                      markerRef.current = null;
                    }
                    clearTrailMarkers();
                  } else {
                    setSelectedRuta(route.rutaId);
                    setParadaActual(0);
                  }
                }}
              >
                <span className="dashboard-fav-route-btn-nombre">
                  {rutaIdToNombre[route.rutaId] || `Ruta ${route.rutaId}`}
                </span>
              </button>
              {selectedRuta === route.rutaId && (
                <div className="data-card mt-6 ruta-info-card">
                  <h3 className="text-2xl font-bold mb-2">
                    {rutaIdToNombre[selectedRuta] || `Ruta ${selectedRuta}`}
                  </h3>
                  {/* Mostrar nombres de las paradas */}
                  {paradasRuta.length > 0 ? (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {paradasRuta.map((parada) => (
                        <li key={parada.idparadas} style={{ marginBottom: 4 }}>
                          {parada.nombre}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No hay paradas registradas para esta ruta.</p>
                  )}
                  {/* Mapa interactivo de la ruta favorita con simulación */}
                  {paradasRuta.length > 0 && (
                    <div style={{ marginTop: 16 }}>
                      <h4 className="font-semibold mb-2">Mapa de la ruta (simulación):</h4>
                      <div style={{ width: '100%', maxWidth: 400, height: 250, margin: '0 auto', borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 8px #0002' }}>
                        <div id="mapa-fav-ruta" style={{ width: '100%', height: 250 }}></div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

