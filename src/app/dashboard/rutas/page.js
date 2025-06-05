'use client';

import { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';

export default function Rutas() {
  const [rutas, setRutas] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    origen: '',
    destino: '',
    horaInicio: '',
    horaFin: ''
  });
  const [selected, setSelected] = useState(null);
  const [favoritas, setFavoritas] = useState([]);
  const [userId, setUserId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    nombre: '',
    descripcion: '',
    origen: '',
    destino: '',
    horaInicio: '',
    horaFin: ''
  });

  useEffect(() => {
    fetch('/api/dashboard/rutas')
      .then(res => res.json())
      .then(data => setRutas(data));

    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          setUserId(user.idusuarios);
          if (user.tipo === 'admin') setIsAdmin(true);
        } catch {}
      }
    }
  }, []);

  // Cargar favoritas solo cuando userId esté disponible
  useEffect(() => {
    if (userId) {
      fetch(`/api/dashboard/favorite-routes?usuarioId=${userId}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setFavoritas(data.map(f => f.rutaId));
          } else {
            setFavoritas([]);
          }
        })
        .catch(() => setFavoritas([]));
    }
  }, [userId]);

  const handleAddRuta = () => {
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
    const res = await fetch('/api/dashboard/rutas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setMessage(data.message);
    setForm({
      nombre: '',
      descripcion: '',
      origen: '',
      destino: '',
      horaInicio: '',
      horaFin: ''
    });
    setShowForm(false);
    // Refresca la lista de rutas
    fetch('/api/dashboard/rutas')
      .then(res => res.json())
      .then(data => setRutas(data));
  };

  const handleSelect = (nombre) => {
    setSelected(selected === nombre ? null : nombre);
  };

  const handleFavorito = async (idrutas) => {
    if (!userId) return;
    const isFav = favoritas.includes(idrutas);

    if (!isFav) {
      // Añadir a favoritos
      const res = await fetch('/api/dashboard/favorite-routes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuarioId: userId, rutaId: idrutas })
      });
      if (res.ok) {
        setFavoritas(prev => [...prev, idrutas]);
      }
    } else {
      // Quitar de favoritos
      const res = await fetch('/api/dashboard/favorite-routes', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuarioId: userId, rutaId: idrutas })
      });
      if (res.ok) {
        setFavoritas(prev => prev.filter(id => id !== idrutas));
      }
    }
  };

  const handleEditClick = (ruta) => {
    setEditId(ruta.idrutas);
    setEditForm({
      nombre: ruta.nombre,
      descripcion: ruta.descripcion,
      origen: ruta.origen,
      destino: ruta.destino,
      horaInicio: ruta.horaInicio,
      horaFin: ruta.horaFin
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
    // Cambia la URL para usar el endpoint general, no el dinámico
    const res = await fetch('/api/dashboard/rutas', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idrutas: editId, ...editForm })
    });
    const data = await res.json();
    setMessage(data.message);
    setEditId(null);
    // Refresca la lista de rutas
    fetch('/api/dashboard/rutas')
      .then(res => res.json())
      .then(data => setRutas(data));
  };

  const handleDelete = async (idrutas) => {
    if (!window.confirm('¿Seguro que quieres borrar esta ruta?')) return;
    // Cambia la URL para usar el endpoint general, no el dinámico
    await fetch('/api/dashboard/rutas', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idrutas })
    });
    // Refresca la lista de rutas
    fetch('/api/dashboard/rutas')
      .then(res => res.json())
      .then(data => setRutas(data));
  };

  return (
    <Layout showAddButton={isAdmin} onAddClick={handleAddRuta} addLabel="Añadir ruta">
      <div className="blue-box flex flex-col items-center justify-center box-main">
        <h2 className="section-title">Rutas</h2>
        {showForm && (
          <form onSubmit={handleSubmit} className="form-vertical mb-6">
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
              <label>Descripción:</label>
              <input
                type="text"
                name="descripcion"
                value={form.descripcion}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Origen:</label>
              <input
                type="text"
                name="origen"
                value={form.origen}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Destino:</label>
              <input
                type="text"
                name="destino"
                value={form.destino}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Hora Inicio:</label>
              <input
                type="time"
                name="horaInicio"
                value={form.horaInicio}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Hora Fin:</label>
              <input
                type="time"
                name="horaFin"
                value={form.horaFin}
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
        <ul className="list-main">
          {rutas.map(ruta => (
            <li
              key={ruta.idrutas}
              className="w-full ruta-list-item flex flex-row items-center gap-2"
            >
              {/* Botón editar a la izquierda, luego borrar, luego ruta, luego favorito */}
              {isAdmin && editId !== ruta.idrutas && (
                <>
                  <button
                    className="ruta-edit-btn"
                    title="Editar"
                    onClick={() => handleEditClick(ruta)}
                  >
                    ✏️
                  </button>
                  <button
                    className="ruta-delete-btn"
                    title="Borrar"
                    onClick={() => handleDelete(ruta.idrutas)}
                  >
                    🗑️
                  </button>
                </>
              )}
              {editId === ruta.idrutas ? (
                isAdmin && (
                  <form onSubmit={handleEditSubmit} className="flex-1 flex flex-col gap-2">
                    <input
                      type="text"
                      name="nombre"
                      value={editForm.nombre}
                      onChange={handleEditChange}
                      required
                      className="p-1 rounded border border-gray-300 text-black"
                    />
                    <input
                      type="text"
                      name="descripcion"
                      value={editForm.descripcion}
                      onChange={handleEditChange}
                      required
                      className="p-1 rounded border border-gray-300 text-black"
                    />
                    <input
                      type="text"
                      name="origen"
                      value={editForm.origen}
                      onChange={handleEditChange}
                      required
                      className="p-1 rounded border border-gray-300 text-black"
                    />
                    <input
                      type="text"
                      name="destino"
                      value={editForm.destino}
                      onChange={handleEditChange}
                      required
                      className="p-1 rounded border border-gray-300 text-black"
                    />
                    <input
                      type="time"
                      name="horaInicio"
                      value={editForm.horaInicio}
                      onChange={handleEditChange}
                      required
                      className="p-1 rounded border border-gray-300 text-black"
                    />
                    <input
                      type="time"
                      name="horaFin"
                      value={editForm.horaFin}
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
                <>
                  <button
                    className={`flex-1 ruta-main-btn${selected === ruta.nombre ? ' selected' : ''}`}
                    onClick={() => handleSelect(ruta.nombre)}
                  >
                    {ruta.nombre}
                  </button>
                  <button
                    className="ruta-fav-btn"
                    title={favoritas.includes(ruta.idrutas) ? "Quitar de favoritos" : "Añadir a favoritos"}
                    onClick={() => handleFavorito(ruta.idrutas)}
                  >
                    {favoritas.includes(ruta.idrutas) ? '❤️' : '🤍'}
                  </button>
                </>
              )}
              {/* Mostrar info debajo de los botones alineados */}
              {selected === ruta.nombre && !editId && (
                <div className="data-card mt-2 w-full ruta-info-card">
                  <div><span>Descripción:</span> {ruta.descripcion}</div>
                  <div><span>Origen:</span> {ruta.origen}</div>
                  <div><span>Destino:</span> {ruta.destino}</div>
                  <div><span>Hora Inicio:</span> {ruta.horaInicio}</div>
                  <div><span>Hora Fin:</span> {ruta.horaFin}</div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
