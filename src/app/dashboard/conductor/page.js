'use client';

import { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import Footer from '../../../components/footer';

export default function Conductor() {
  const [conductores, setConductores] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    apellido1: '',
    apellido2: '',
    dni: '',
    telefono: '',
    licencia: '',
    fecha_contratacion: ''
  });
  const [message, setMessage] = useState('');
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    nombre: '',
    apellido1: '',
    apellido2: '',
    dni: '',
    telefono: '',
    licencia: '',
    fecha_contratacion: ''
  });
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('/api/dashboard/conductor')
      .then(res => res.json())
      .then(data => setConductores(data));

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

  const handleAddConductor = () => {
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
    const res = await fetch('/api/dashboard/conductor', {
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
      dni: '',
      telefono: '',
      licencia: '',
      fecha_contratacion: ''
    });
    setShowForm(false);
    fetch('/api/dashboard/conductor')
      .then(res => res.json())
      .then(data => setConductores(data));
  };

  const handleEditClick = (conductor) => {
    setEditId(conductor.idconductores);
    setEditForm({
      nombre: conductor.nombre,
      apellido1: conductor.apellido1,
      apellido2: conductor.apellido2,
      dni: conductor.dni,
      telefono: conductor.telefono,
      licencia: conductor.licencia,
      fecha_contratacion: conductor.fecha_contratacion
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
    const res = await fetch('/api/dashboard/conductor', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idconductores: editId, ...editForm })
    });
    const data = await res.json();
    setMessage(data.message);
    setEditId(null);
    fetch('/api/dashboard/conductor')
      .then(res => res.json())
      .then(data => setConductores(data));
  };

  const handleDelete = async (idconductores) => {
    if (!window.confirm('¿Seguro que quieres borrar este conductor?')) return;
    await fetch('/api/dashboard/conductor', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idconductores })
    });
    fetch('/api/dashboard/conductor')
      .then(res => res.json())
      .then(data => setConductores(data));
  };

  const handleSelect = (dni) => {
    setSelected(selected === dni ? null : dni);
  };

  return (
    <Layout showAddButton={isAdmin} onAddClick={handleAddConductor} addLabel="Añadir conductor">
      <div className="blue-box w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Conductores</h2>
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
                className="w-full p-2 rounded border border-gray-300 text-black"
              />
            </div>
            <div>
              <label>Primer apellido:</label>
              <input
                type="text"
                name="apellido1"
                value={form.apellido1}
                onChange={handleChange}
                required
                className="w-full p-2 rounded border border-gray-300 text-black"
              />
            </div>
            <div>
              <label>Segundo apellido:</label>
              <input
                type="text"
                name="apellido2"
                value={form.apellido2}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 text-black"
              />
            </div>
            <div>
              <label>DNI:</label>
              <input
                type="text"
                name="dni"
                value={form.dni}
                onChange={handleChange}
                required
                className="w-full p-2 rounded border border-gray-300 text-black"
              />
            </div>
            <div>
              <label>Teléfono:</label>
              <input
                type="text"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
                className="w-full p-2 rounded border border-gray-300 text-black"
              />
            </div>
            <div>
              <label>Licencia:</label>
              <input
                type="text"
                name="licencia"
                value={form.licencia}
                onChange={handleChange}
                required
                className="w-full p-2 rounded border border-gray-300 text-black"
              />
            </div>
            <div>
              <label>Fecha contratación:</label>
              <input
                type="date"
                name="fecha_contratacion"
                value={form.fecha_contratacion}
                onChange={handleChange}
                required
                className="w-full p-2 rounded border border-gray-300 text-black"
              />
            </div>
            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded-lg">
              Guardar
            </button>
          </form>
        )}
        {message && <p className="mb-4 text-green-600">{message}</p>}
        <div className="flex flex-col w-full items-center">
          {conductores.length === 0 && <p>No hay conductores registrados.</p>}
          <ul className="list-main">
            {conductores.map(conductor => (
              <li key={conductor.licencia + conductor.telefono} className="w-full conductor-list-item">
                <div className="conductor-btn-row">
                  {isAdmin && editId !== conductor.idconductores && (
                    <>
                      <button
                        className="conductor-edit-btn text-blue-600"
                        title="Editar"
                        onClick={() => handleEditClick(conductor)}
                      >
                        ✏️
                      </button>
                      <button
                        className="conductor-delete-btn text-red-600"
                        title="Borrar"
                        onClick={() => handleDelete(conductor.idconductores)}
                      >
                        🗑️
                      </button>
                    </>
                  )}
                  {editId === conductor.idconductores ? (
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
                        name="dni"
                        value={editForm.dni}
                        onChange={handleEditChange}
                        required
                        className="p-1 rounded border border-gray-300 text-black"
                      />
                      <input
                        type="text"
                        name="telefono"
                        value={editForm.telefono}
                        onChange={handleEditChange}
                        required
                        className="p-1 rounded border border-gray-300 text-black"
                      />
                      <input
                        type="text"
                        name="licencia"
                        value={editForm.licencia}
                        onChange={handleEditChange}
                        required
                        className="p-1 rounded border border-gray-300 text-black"
                      />
                      <input
                        type="date"
                        name="fecha_contratacion"
                        value={editForm.fecha_contratacion}
                        onChange={handleEditChange}
                        required
                        className="p-1 rounded border border-gray-300 text-black"
                      />
                      <button type="submit" className="bg-blue-700 text-white px-2 py-1 rounded-lg mt-1">
                        Guardar
                      </button>
                    </form>
                  ) : (
                    <button
                      className="flex-1 conductor-main-btn"
                      onClick={() => handleSelect(conductor.dni)}
                    >
                      {conductor.dni}
                    </button>
                  )}
                </div>
                {selected === conductor.dni && !editId && (
                  <div className="data-card mt-2 conductor-info-card">
                    <div><span>Nombre:</span> {conductor.nombre}</div>
                    <div><span>Primer apellido:</span> {conductor.apellido1}</div>
                    <div><span>Segundo apellido:</span> {conductor.apellido2}</div>
                    <div><span>Teléfono:</span> {conductor.telefono}</div>
                    <div><span>Licencia:</span> {conductor.licencia}</div>
                    <div><span>Fecha contratación:</span> {conductor.fecha_contratacion}</div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
