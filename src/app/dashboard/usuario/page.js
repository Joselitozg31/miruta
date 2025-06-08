'use client';

import React, { useEffect, useState, useRef } from 'react'; // <-- Añade React y useRef
import { useRouter } from 'next/navigation';

export default function Usuario() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [userImage, setUserImage] = useState(''); // base64 o url
  const [previewImage, setPreviewImage] = useState('');
  const imageInputRef = useRef(null); // <-- Usa useRef en vez de createRef
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Extrae el idusuarios del token simulado o google en localStorage
        const token = localStorage.getItem('token');
        let id = '';
        if (token && token.startsWith('token-simulado-')) {
          id = token.replace('token-simulado-', '');
        } else if (token && token.startsWith('token-google-')) {
          id = token.replace('token-google-', '');
        }
        if (!id) {
          setError('No se ha podido identificar el usuario.');
          return;
        }

        const response = await fetch(`/api/dashboard/usuario?id=${id}`, { credentials: 'include' });
        if (!response.ok) {
          let msg = 'No se pudieron obtener los datos del usuario';
          try {
            const errData = await response.json();
            if (errData?.message) msg += ': ' + errData.message;
          } catch {}
          throw new Error(msg + ` (status: ${response.status})`);
        }
        const data = await response.json();
        setUser(data);
        setUserImage(data.imagen || '');
        setPreviewImage(data.imagen || '');
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUser();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setPreviewImage(ev.target.result);
      setUserImage(ev.target.result); // base64
    };
    reader.readAsDataURL(file);
  };

  const handleImageClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPassword && newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);

    let encryptedPassword = '';
    if (newPassword) {
      const encoder = new TextEncoder();
      const data = encoder.encode(newPassword);
      const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
      encryptedPassword = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    try {
      // Construye el body solo con los campos necesarios
      const updateBody = {
        ...user,
        imagen: userImage || undefined,
      };
      if (newPassword) {
        updateBody.password = encryptedPassword;
      }
      const res = await fetch('/api/dashboard/usuario', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(updateBody),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Error al actualizar');
      setSuccess('Datos actualizados correctamente');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push('/auth/login');
  };

  return (
    <div className="blue-box">
      <h2 className="text-xl font-semibold mb-4">Mi cuenta</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      {!user && !error && <p>Cargando datos...</p>}
      {user && (
        <form className="text-left" onSubmit={handleUpdate}>
          {/* Imagen de usuario arriba del nombre */}
          <div className="user-data-row mt-4" style={{ justifyContent: 'center', display: 'flex' }}>
            <div>
              <img
                src={
                  previewImage && previewImage.trim() !== ''
                    ? previewImage
                    : '/logo-miruta.png' // Usa el logo si no hay imagen de perfil
                }
                alt="Imagen de usuario"
                style={{
                  width: 100,
                  height: 100,
                  objectFit: 'cover',
                  borderRadius: '50%',
                  marginBottom: '0.5rem',
                  cursor: 'pointer',
                  border: '2px solid #0074d9'
                }}
                onClick={handleImageClick}
                title="Haz clic para cambiar la imagen"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={imageInputRef}
                style={{ display: 'none' }}
              />
            </div>
          </div>
          <div className="user-data-row">
            <span className="font-semibold">Nombre:</span> {user.nombre}
          </div>
          <div className="user-data-row">
            <span className="font-semibold">Primer apellido:</span> {user.apellido1 || ''}
          </div>
          <div className="user-data-row">
            <span className="font-semibold">Segundo apellido:</span> {user.apellido2 || ''}
          </div>
          <div className="user-data-row">
            <span className="font-semibold">Nombre de usuario:</span> {user.nombreusuario || ''}
          </div>
          <div className="user-data-row">
            <span className="font-semibold">Email:</span> {user.email}
          </div>
          <div className="user-data-row mt-4">
            <label className="font-semibold block mb-1">Nueva contraseña: </label>
            <input
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className="w-full p-2 rounded border border-gray-300 text-black"
              autoComplete="new-password"
            />
          </div>
          <div className="user-data-row">
            <label className="font-semibold block mb-1">Confirmar contraseña: </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full p-2 rounded border border-gray-300 text-black"
              autoComplete="new-password"
            />
          </div>
          <button
            type="submit"
            className="btn-rounded btn-blue mt-4"
            style={{ width: '100%' }}
            disabled={loading}
          >
            {loading ? 'Guardando...' : 'Actualizar'}
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="btn-rounded btn-blue"
            style={{
              width: '100%',
              fontWeight: 'bold',
              marginTop: '1rem'
            }}
          >
            Cerrar sesión
          </button>
        </form>
      )}
    </div>
  );
}