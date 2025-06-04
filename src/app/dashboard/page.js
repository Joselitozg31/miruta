'use client';

import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import '../globals.css'; // Importa los estilos globales

export default function Dashboard() {
  const [favoriteRoutes, setFavoriteRoutes] = useState([]);
  const [allRutas, setAllRutas] = useState([]);
  const [selectedRuta, setSelectedRuta] = useState(null);
  const [paradas, setParadas] = useState([]);

  useEffect(() => {
    // Obtiene todas las rutas
    fetch('/api/dashboard/rutas')
      .then((res) => res.json())
      .then((data) => setAllRutas(data));

    // Obtiene las rutas favoritas del usuario
    fetch('/api/dashboard/favorite-routes')
      .then((res) => res.json())
      .then((data) => setFavoriteRoutes(data));

    // Obtiene todas las paradas
    fetch('/api/dashboard/paradas')
      .then((res) => res.json())
      .then((data) => setParadas(data));
  }, []);

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

  return (
    <Layout>
      <div className={`blue-box flex flex-col items-center justify-center${selectedRuta ? ' compact' : ''} box-main`}>
        <h2 className="section-title">Rutas Favoritas</h2>
        <ul className="list-main">
          {favoriteRoutes.map((route) => (
            <li
              key={route.usuarioId + '-' + route.rutaId}
              className="route-list-item"
            >
              <button
                className="dashboard-fav-route-btn"
                type="button"
                onClick={() => setSelectedRuta(selectedRuta === route.rutaId ? null : route.rutaId)}
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
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

