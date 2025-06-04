'use client';

import { useEffect, useState } from 'react';

export default function UsuariosDatos() {
  const [usuarios, setUsuarios] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    apellido1: '',
    apellido2: '',
    nombreusuario: '',
    email: '',
    tipo: 'usuario',
    verificado: 0
  });
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    nombre: '',
    apellido1: '',
    apellido2: '',
    nombreusuario: '',
    email: '',
    tipo: 'usuario',
    verificado: 0
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Verifica si el usuario es admin
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

  useEffect(() => {
    if (!isAdmin) return;
    fetch('/api/dashboard/usuariosdatos')
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, [isAdmin]);

  if (!isAdmin) {
    return (
      <div className="blue-box flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Acceso denegado</h2>
        <p>No tienes permisos para ver esta página.</p>
      </div>
    );
  }

  const handleSelect = (email) => {
    setSelected(selected === email ? null : email);
  };

  const handleAddUsuario = () => {
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
    const res = await fetch('/api/dashboard/usuariosdatos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setMessage(data.message);
    setForm({
      nombre: '',
      apellido1: '',
      apellido2: '',
      nombreusuario: '',
      email: '',
      tipo: 'usuario',
      verificado: 0
    });
    setShowForm(false);
    fetch('/api/dashboard/usuariosdatos')
      .then(res => res.json())
      .then(data => setUsuarios(data));
  };

  // Solo gestiona el estado del formulario, no hace fetch/POST/PUT/DELETE aquí
  const handleEditClick = (usuario) => {
    setEditId(usuario.idusuarios);
    setEditForm({
      nombre: usuario.nombre,
      apellido1: usuario.apellido1,
      apellido2: usuario.apellido2,
      nombreusuario: usuario.nombreusuario,
      email: usuario.email,
      tipo: usuario.tipo,
      verificado: usuario.verificado
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
    const res = await fetch('/api/dashboard/usuariosdatos', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idusuarios: editId, ...editForm })
    });
    const data = await res.json();
    setMessage(data.message);
    setEditId(null);
    fetch('/api/dashboard/usuariosdatos')
      .then(res => res.json())
      .then(data => setUsuarios(data));
  };

  const handleDelete = async (idusuarios) => {
    if (!window.confirm('¿Seguro que quieres borrar este usuario?')) return;
    await fetch('/api/dashboard/usuariosdatos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idusuarios })
    });
    fetch('/api/dashboard/usuariosdatos')
      .then(res => res.json())
      .then(data => setUsuarios(data));
  };

  return (
    <div className="blue-box flex flex-col items-center justify-center box-main">
      <h2 className="section-title">Usuarios</h2>
      {showForm && (
        <form onSubmit={handleSubmit} className="w-full mb-6 flex flex-col gap-4 items-center">
          <div className="w-full">
            <label className="font-semibold block mb-1">Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-gray-300 text-black"
            />
          </div>
          <div className="w-full">
            <label className="font-semibold block mb-1">Primer apellido:</label>
            <input
              type="text"
              name="apellido1"
              value={form.apellido1}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-gray-300 text-black"
            />
          </div>
          <div className="w-full">
            <label className="font-semibold block mb-1">Segundo apellido:</label>
            <input
              type="text"
              name="apellido2"
              value={form.apellido2}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 text-black"
            />
          </div>
          <div className="w-full">
            <label className="font-semibold block mb-1">Nombre de usuario:</label>
            <input
              type="text"
              name="nombreusuario"
              value={form.nombreusuario}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 text-black"
            />
          </div>
          <div className="w-full">
            <label className="font-semibold block mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-gray-300 text-black"
            />
          </div>
          <div className="w-full">
            <label className="font-semibold block mb-1">Tipo:</label>
            <select
              name="tipo"
              value={form.tipo}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 text-black"
            >
              <option value="usuario">Usuario</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="w-full">
            <label className="font-semibold block mb-1">Verificado:</label>
            <select
              name="verificado"
              value={form.verificado}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 text-black"
            >
              <option value={0}>No</option>
              <option value={1}>Sí</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded-lg">
            Guardar
          </button>
        </form>
      )}
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <ul className="list-main">
        {usuarios.map(usuario => (
          <li key={usuario.idusuarios} className="usuariosdatos-list-item">
            <div className="usuariosdatos-btn-row" style={{ gap: '1rem' }}>
              {isAdmin && editId !== usuario.idusuarios && (
                <>
                  <button
                    className="usuariosdatos-edit-btn text-blue-600"
                    title="Editar"
                    onClick={() => handleEditClick(usuario)}
                    style={{ marginRight: '0.5rem' }}
                  >
                    ✏️
                  </button>
                  <button
                    className="usuariosdatos-delete-btn text-red-600"
                    title="Borrar"
                    onClick={() => handleDelete(usuario.idusuarios)}
                  >
                    🗑️
                  </button>
                </>
              )}
              {editId === usuario.idusuarios ? (
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
                      name="apellido1"
                      value={editForm.apellido1}
                      onChange={handleEditChange}
                      required
                      className="p-1 rounded border border-gray-300 text-black"
                    />
                    <input
                      type="text"
                      name="apellido2"
                      value={editForm.apellido2}
                      onChange={handleEditChange}
                      className="p-1 rounded border border-gray-300 text-black"
                    />
                    <input
                      type="text"
                      name="nombreusuario"
                      value={editForm.nombreusuario}
                      onChange={handleEditChange}
                      className="p-1 rounded border border-gray-300 text-black"
                    />
                    <input
                      type="email"
                      name="email"
                      value={editForm.email}
                      onChange={handleEditChange}
                      required
                      className="p-1 rounded border border-gray-300 text-black"
                    />
                    <select
                      name="tipo"
                      value={editForm.tipo}
                      onChange={handleEditChange}
                      className="p-1 rounded border border-gray-300 text-black"
                    >
                      <option value="usuario">Usuario</option>
                      <option value="admin">Admin</option>
                    </select>
                    <select
                      name="verificado"
                      value={editForm.verificado}
                      onChange={handleEditChange}
                      className="p-1 rounded border border-gray-300 text-black"
                    >
                      <option value={0}>No</option>
                      <option value={1}>Sí</option>
                    </select>
                    <button type="submit" className="bg-blue-700 text-white px-2 py-1 rounded-lg mt-1">
                      Guardar
                    </button>
                  </form>
                )
              ) : (
                <button
                  className="flex-1 usuariosdatos-main-btn"
                  onClick={() => handleSelect(usuario.email)}
                >
                  {usuario.email}
                </button>
              )}
            </div>
            {selected === usuario.email && !editId && (
              <div className="data-card mt-2 usuariosdatos-info-card">
                <div><span>Nombre:</span> {usuario.nombre}</div>
                <div><span>Primer apellido:</span> {usuario.apellido1}</div>
                <div><span>Segundo apellido:</span> {usuario.apellido2}</div>
                <div><span>Nombre de usuario:</span> {usuario.nombreusuario}</div>
                <div>
                  <span>Tipo:</span>
                  <input
                    type="checkbox"
                    checked={usuario.tipo === 'admin'}
                    readOnly
                    style={{ marginLeft: '0.5rem', accentColor: '#1F6C98' }}
                  />
                  <span style={{ marginLeft: '0.5rem' }}>
                    {usuario.tipo === 'admin' ? 'Admin' : 'Usuario'}
                  </span>
                </div>
                <div><span>Verificado:</span> {usuario.verificado ? 'Sí' : 'No'}</div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
