'use client';

import { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import Footer from '../../../components/footer';

export default function Autobus() {
  const [autobuses, setAutobuses] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    placa: '',
    modelo: '',
    capacidad: '',
    estado: 'activo'
  });
  const [message, setMessage] = useState('');
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    placa: '',
    modelo: '',
    capacidad: '',
    estado: 'activo'
  });
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('/api/dashboard/autobus')
      .then(res => res.json())
      .then(data => setAutobuses(data));

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

  const handleAddAutobus = () => {
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
    const res = await fetch('/api/dashboard/autobus', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    let data = {};
    try {
      data = await res.json();
    } catch {
      data = { message: 'Error inesperado del servidor' };
    }

    setMessage(data.message);
    setForm({
      placa: '',
      modelo: '',
      capacidad: '',
      estado: 'activo'
    });
    setShowForm(false);
    fetch('/api/dashboard/autobus')
      .then(res => res.json())
      .then(data => setAutobuses(data));
  };

  const handleEditClick = (autobus) => {
    setEditId(autobus.idAutobus);
    setEditForm({
      placa: autobus.placa,
      modelo: autobus.modelo,
      capacidad: autobus.capacidad,
      estado: autobus.estado
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
    const res = await fetch('/api/dashboard/autobus', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idAutobus: editId, ...editForm })
    });
    const data = await res.json();
    setMessage(data.message);
    setEditId(null);
    fetch('/api/dashboard/autobus')
      .then(res => res.json())
      .then(data => setAutobuses(data));
  };

  const handleDelete = async (idAutobus) => {
    if (!window.confirm('¿Seguro que quieres borrar este autobús?')) return;
    await fetch('/api/dashboard/autobus', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idAutobus })
    });
    fetch('/api/dashboard/autobus')
      .then(res => res.json())
      .then(data => setAutobuses(data));
  };

  const handleSelect = (placa) => {
    setSelected(selected === placa ? null : placa);
  };

  return (
    <Layout showAddButton={isAdmin} onAddClick={handleAddAutobus} addLabel="Añadir autobús">
      <div className="blue-box w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Autobuses</h2>
        {showForm && (
          <form onSubmit={handleSubmit} className="form-vertical mb-6">
            <div>
              <label>Matricula:</label>
              <input
                type="text"
                name="placa"
                value={form.placa}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Modelo:</label>
              <input
                type="text"
                name="modelo"
                value={form.modelo}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Capacidad:</label>
              <input
                type="text"
                name="capacidad"
                value={form.capacidad}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Estado:</label>
              <select
                name="estado"
                value={form.estado}
                onChange={handleChange}
              >
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
                <option value="en_mantenimiento">En mantenimiento</option>
                <option value="retirado">Retirado</option>
              </select>
            </div>
            <button type="submit">
              Guardar
            </button>
          </form>
        )}
        {message && <p className="mb-4 text-green-600">{message}</p>}
        <div className="flex flex-col w-full items-center">
          {autobuses.length === 0 && <p>No hay autobuses registrados.</p>}
          <ul className="list-main">
            {autobuses.map(autobus => (
              <li key={autobus.placa + autobus.modelo} className="w-full autobus-list-item">
                <div className="autobus-btn-row">
                  {isAdmin && editId !== autobus.idAutobus && (
                    <>
                      <button
                        className="autobus-edit-btn text-blue-600"
                        title="Editar"
                        onClick={() => handleEditClick(autobus)}
                      >
                        ✏️
                      </button>
                      <button
                        className="autobus-delete-btn text-red-600"
                        title="Borrar"
                        onClick={() => handleDelete(autobus.idAutobus)}
                      >
                        🗑️
                      </button>
                    </>
                  )}
                  {editId === autobus.idAutobus ? (
                    <form onSubmit={handleEditSubmit} className="flex-1 flex flex-col gap-2">
                      <input
                        type="text"
                        name="placa"
                        value={editForm.placa}
                        onChange={handleEditChange}
                        required
                        className="p-1 rounded border border-gray-300 text-black"
                      />
                      <input
                        type="text"
                        name="modelo"
                        value={editForm.modelo}
                        onChange={handleEditChange}
                        required
                        className="p-1 rounded border border-gray-300 text-black"
                      />
                      <input
                        type="text"
                        name="capacidad"
                        value={editForm.capacidad}
                        onChange={handleEditChange}
                        required
                        className="p-1 rounded border border-gray-300 text-black"
                      />
                      <select
                        name="estado"
                        value={editForm.estado}
                        onChange={handleEditChange}
                        className="p-1 rounded border border-gray-300 text-black"
                      >
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                        <option value="en_mantenimiento">En mantenimiento</option>
                        <option value="retirado">Retirado</option>
                      </select>
                      <button type="submit" className="bg-blue-700 text-white px-2 py-1 rounded-lg mt-1">
                        Guardar
                      </button>
                    </form>
                  ) : (
                    <button
                      className="flex-1 autobus-main-btn"
                      onClick={() => handleSelect(autobus.placa)}
                    >
                      {autobus.placa}
                    </button>
                  )}
                </div>
                {selected === autobus.placa && !editId && (
                  <div className="data-card mt-2 autobus-info-card">
                    <div><span>Modelo:</span> {autobus.modelo}</div>
                    <div><span>Capacidad:</span> {autobus.capacidad}</div>
                    <div><span>Estado:</span> {autobus.estado}</div>
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
