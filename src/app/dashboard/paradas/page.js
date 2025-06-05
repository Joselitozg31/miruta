'use client';

import { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import '../../globals.css';

export default function Paradas() {
  const [paradas, setParadas] = useState([]);
  const [rutas, setRutas] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    rutaNombre: '',
    nombre: '',
    latitud: '',
    longitud: '',
    orden: ''
  });
  const [message, setMessage] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [selected, setSelected] = useState(null);

  // Edición
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    rutaNombre: '',
    nombre: '',
    latitud: '',
    longitud: '',
    orden: ''
  });

  useEffect(() => {
    // Carga rutas y paradas en paralelo
    Promise.all([
      fetch('/api/dashboard/paradas').then(res => res.json()),
      fetch('/api/dashboard/rutas').then(res => res.json())
    ]).then(([paradasData, rutasData]) => {
      const sorted = [...paradasData].sort((a, b) => {
        if (a.rutaId !== b.rutaId) return a.rutaId - b.rutaId;
        return a.orden - b.orden;
      });
      setParadas(sorted);
      setRutas(rutasData);
    });

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

  const handleAddParada = () => {
    setShowForm(!showForm);
    setMessage('');
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    // Buscar el idrutas correspondiente al nombre seleccionado
    const ruta = rutas.find(r => r.nombre === form.rutaNombre);
    if (!ruta) {
      setMessage('Ruta no encontrada');
      return;
    }
    const sendForm = {
      rutaId: ruta.idrutas,
      nombre: form.nombre,
      latitud: form.latitud,
      longitud: form.longitud,
      orden: form.orden
    };
    const res = await fetch('/api/dashboard/paradas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sendForm)
    });
    const data = await res.json();
    setMessage(data.message);
    setForm({
      rutaNombre: '',
      nombre: '',
      latitud: '',
      longitud: '',
      orden: ''
    });
    setShowForm(false);
    // Refresca la lista de paradas y rutas
    fetch('/api/dashboard/paradas')
      .then(res => res.json())
      .then(data => {
        const sorted = [...data].sort((a, b) => {
          if (a.rutaId !== b.rutaId) return a.rutaId - b.rutaId;
          return a.orden - b.orden;
        });
        setParadas(sorted);
      });
    fetch('/api/dashboard/rutas')
      .then(res => res.json())
      .then(data => setRutas(data));
  };

  const handleSelect = (nombre, orden) => {
    setSelected(selected === nombre + orden ? null : nombre + orden);
  };

  // Edición
  const handleEditClick = (parada) => {
    // Busca el nombre de la ruta por el id
    const ruta = rutas.find(r => r.idrutas === parada.rutaId);
    setEditId(parada.idparadas);
    setEditForm({
      rutaNombre: ruta ? ruta.nombre : '',
      nombre: parada.nombre,
      latitud: parada.latitud,
      longitud: parada.longitud,
      orden: parada.orden
    });
  };

  const handleEditChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    // Buscar el idrutas correspondiente al nombre seleccionado
    const ruta = rutas.find(r => r.nombre === editForm.rutaNombre);
    if (!ruta) {
      setMessage('Ruta no encontrada');
      return;
    }
    const sendForm = {
      idparadas: editId,
      rutaId: ruta.idrutas,
      nombre: editForm.nombre,
      latitud: editForm.latitud,
      longitud: editForm.longitud,
      orden: editForm.orden
    };
    const res = await fetch('/api/dashboard/paradas', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sendForm)
    });
    const data = await res.json();
    setMessage(data.message);
    setEditId(null);
    // Refresca la lista de paradas
    fetch('/api/dashboard/paradas')
      .then(res => res.json())
      .then(data => {
        const sorted = [...data].sort((a, b) => {
          if (a.rutaId !== b.rutaId) return a.rutaId - b.rutaId;
          return a.orden - b.orden;
        });
        setParadas(sorted);
      });
  };

  const handleDelete = async (idparadas) => {
    if (!window.confirm('¿Seguro que quieres borrar esta parada?')) return;
    await fetch('/api/dashboard/paradas', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idparadas })
    });
    // Refresca la lista de paradas
    fetch('/api/dashboard/paradas')
      .then(res => res.json())
      .then(data => {
        const sorted = [...data].sort((a, b) => {
          if (a.rutaId !== b.rutaId) return a.rutaId - b.rutaId;
          return a.orden - b.orden;
        });
        setParadas(sorted);
      });
  };

  // Agrupa las paradas por rutaId
  const paradasPorRuta = paradas.reduce((acc, parada) => {
    if (!acc[parada.rutaId]) acc[parada.rutaId] = [];
    acc[parada.rutaId].push(parada);
    return acc;
  }, {});

  // Mapea rutaId a nombre de ruta
  const rutaIdToNombre = rutas.reduce((acc, ruta) => {
    acc[ruta.idrutas] = ruta.nombre;
    return acc;
  }, {});

  return (
    <Layout showAddButton={isAdmin} onAddClick={handleAddParada} addLabel="Añadir parada">
      <div className="blue-box flex flex-col items-center justify-center box-main">
        <h2 className="section-title">Paradas</h2>
        {showForm && (
          <form onSubmit={handleSubmit} className="form-vertical mb-6">
            <div>
              <label>Ruta:</label>
              <select
                name="rutaNombre"
                value={form.rutaNombre}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una ruta</option>
                {rutas.map(ruta => (
                  <option key={ruta.idrutas} value={ruta.nombre}>{ruta.nombre}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Latitud:</label>
              <input
                type="number"
                step="any"
                name="latitud"
                value={form.latitud}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Longitud:</label>
              <input
                type="number"
                step="any"
                name="longitud"
                value={form.longitud}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Orden:</label>
              <input
                type="number"
                name="orden"
                value={form.orden}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">
              Guardar
            </button>
          </form>
        )}
        {message && <p className="mb-4 text-green-600">{message}</p>}
        <div className="w-full flex flex-col gap-6">
          {Object.keys(paradasPorRuta).map(rutaId => (
            <div key={rutaId} className="w-full">
              <h3 className="text-lg font-bold mb-2">
                {rutaIdToNombre[rutaId] ? rutaIdToNombre[rutaId] : `Ruta ${rutaId}`}
              </h3>
              <ul className="list-main">
                {paradasPorRuta[rutaId].map(parada => (
                  <li
                    key={parada.idparadas}
                    className="w-full parada-list-item"
                  >
                    <div className="parada-btn-row">
                      {isAdmin && editId !== parada.idparadas && (
                        <>
                          <button
                            className="parada-edit-btn text-blue-600"
                            title="Editar"
                            onClick={() => handleEditClick(parada)}
                          >
                            ✏️
                          </button>
                          <button
                            className="parada-delete-btn text-red-600"
                            title="Borrar"
                            onClick={() => handleDelete(parada.idparadas)}
                          >
                            🗑️
                          </button>
                        </>
                      )}
                      {editId === parada.idparadas ? (
                        isAdmin && (
                          <form onSubmit={handleEditSubmit} className="flex-1 flex flex-col gap-2">
                            <select
                              name="rutaNombre"
                              value={editForm.rutaNombre}
                              onChange={handleEditChange}
                              required
                              className="p-1 rounded border border-gray-300 text-black"
                            >
                              <option value="">Selecciona una ruta</option>
                              {rutas.map(ruta => (
                                <option key={ruta.idrutas} value={ruta.nombre}>{ruta.nombre}</option>
                              ))}
                            </select>
                            <input
                              type="text"
                              name="nombre"
                              value={editForm.nombre}
                              onChange={handleEditChange}
                              required
                              className="p-1 rounded border border-gray-300 text-black"
                            />
                            <input
                              type="number"
                              step="any"
                              name="latitud"
                              value={editForm.latitud}
                              onChange={handleEditChange}
                              required
                              className="p-1 rounded border border-gray-300 text-black"
                            />
                            <input
                              type="number"
                              step="any"
                              name="longitud"
                              value={editForm.longitud}
                              onChange={handleEditChange}
                              required
                              className="p-1 rounded border border-gray-300 text-black"
                            />
                            <input
                              type="number"
                              name="orden"
                              value={editForm.orden}
                              onChange={handleEditChange}
                              required
                              className="p-1 rounded border border-gray-300 text-black"
                            />
                            <button type="submit" className="bg-blue-700 text-white px-2 py-1 rounded-lg mt-1">
                              Guardar
                            </button>
                          </form>
                        )
                      ) : (
                        <button
                          className="flex-1 parada-main-btn dashboard-fav-route-paradas-list"
                          onClick={() => handleSelect(parada.nombre, parada.orden)}
                          style={{
                            background: '#1F6C98',
                            color: '#FADF63',
                            border: '2px solid #FADF63',
                            borderRadius: '0.5rem',
                            fontWeight: 'bold',
                            fontSize: '1.1em',
                            padding: '0.5rem 1.5rem',
                            cursor: 'pointer',
                            transition: 'background 0.2s, color 0.2s, border 0.2s',
                            width: '100%',
                            maxWidth: '900px',
                            boxSizing: 'border-box',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {parada.nombre}
                        </button>
                      )}
                    </div>
                    {selected === parada.nombre + parada.orden && !editId && (
                      <div className="data-card mt-2 parada-info-card">
                        <div><span>Latitud:</span> {parada.latitud}</div>
                        <div><span>Longitud:</span> {parada.longitud}</div>
                        <div><span>Orden:</span> {parada.orden}</div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
