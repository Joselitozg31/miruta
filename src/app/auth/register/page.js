'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../../../components/Logo';
import Layout from '../../../components/Layout';

function validatePassword(password) {
  // Al menos 8 caracteres, una mayúscula y un caracter especial
  const regex = /^(?=.*[A-Z])(?=.*[.,\-´+`¡']).{8,}$/;
  return regex.test(password);
}

export default function Register() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido1: '',
    apellido2: '',
    nombreusuario: '',
    email: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.nombre || !formData.apellido1 || !formData.email || !formData.password) {
      setError('Todos los campos obligatorios deben ser completados');
      return;
    }
    if (formData.password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    if (!validatePassword(formData.password)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres, una mayúscula y un caracter especial (. , - ´+`¡')."
      );
      return;
    }

    // Comprueba que window.crypto.subtle existe antes de usarlo
    let encryptedPassword = formData.password;
    if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
      const encoder = new TextEncoder();
      const data = encoder.encode(formData.password);
      const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
      encryptedPassword = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, password: encryptedPassword }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      // Redirige a la página de verificación tras registro
      router.push(`/auth/verify?email=${encodeURIComponent(formData.email)}`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <Logo />
        <h1 className="text-3xl font-bold mb-6 text-center">Regístrate</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group space-y-6">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-gray-300"
            />
            <input
              type="text"
              name="apellido1"
              placeholder="Primer apellido"
              value={formData.apellido1}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-gray-300"
            />
            <input
              type="text"
              name="apellido2"
              placeholder="Segundo apellido"
              value={formData.apellido2}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300"
            />
            <input
              type="text"
              name="nombreusuario"
              placeholder="Nombre de usuario"
              value={formData.nombreusuario}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-gray-300"
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-gray-300"
              autoComplete="new-password"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
              className="w-full p-2 rounded border border-gray-300"
              autoComplete="new-password"
            />
            <button type="submit" className="bg-blue-700 text-white p-2 rounded-lg">
              Registrarse
            </button>
          </div>
        </form>
        <p className="mt-6 text-center">
          <a href="/auth/login" className="text-blue-400 hover:underline">
            ¿Ya tienes una cuenta? Inicia sesión
          </a>
        </p>
      </div>
    </Layout>
  );
}