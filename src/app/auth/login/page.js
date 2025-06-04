'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../apiAuth';
import Layout from '../../../components/Layout';
import Logo from '../../../components/Logo';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showVerify, setShowVerify] = useState(false);
  const [verifyCode, setVerifyCode] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Todos los campos son obligatorios');
      return;
    }

    try {
      const response = await login(email, password);
      if (response && response.token) {
        localStorage.setItem('token', response.token);
        if (response.user) {
          localStorage.setItem('user', JSON.stringify(response.user));
        }
        router.replace('/dashboard');
      } else {
        setError('Usuario o contraseña incorrectos. Respuesta: ' + JSON.stringify(response));
      }
    } catch (err) {
      if (err.message && err.message.includes('verificar tu cuenta')) {
        setShowVerify(true);
        setError('Debes verificar tu cuenta antes de iniciar sesión.');
      } else {
        setError((err && err.message) ? err.message : 'Usuario o contraseña incorrectos');
      }
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError('');
    const res = await fetch('/api/auth/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code: verifyCode }),
    });
    const data = await res.json();
    if (res.ok) {
      setShowVerify(false);
      setError('Cuenta verificada correctamente. Ahora puedes iniciar sesión.');
    } else {
      setError(data.message || 'Código incorrecto');
    }
  };

  return (
    <Layout>
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <Logo />
        <h1 className="text-3xl font-bold mb-6 text-center">
          Inicia sesión
        </h1>
        {error && <p className="text-center text-red-500">{error}</p>}
        {!showVerify ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group space-y-6">
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 rounded border border-gray-300"
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 rounded border border-gray-300"
              />
            </div>
            <div className="button-group mt-6">
              <button type="submit" className="btn-rounded btn-blue">
                Acceder
              </button>
              <button
                type="button"
                className="btn-rounded btn-secondary"
                onClick={() => router.push('/auth/register')}
              >
                Registrarse
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-6">
            <input
              type="text"
              placeholder="Código de verificación"
              value={verifyCode}
              onChange={e => setVerifyCode(e.target.value)}
              required
              className="w-full p-2 rounded border border-gray-300 text-black"
            />
            <button type="submit" className="btn-rounded btn-blue w-full">
              Verificar cuenta
            </button>
          </form>
        )}
        <p className="mt-6 text-center">
          <button
            type="button"
            className="btn-rounded"
            style={{
              background: '#00297A',
              color: '#FADF63',
              width: '100%',
              fontWeight: 'bold'
            }}
            onClick={() => router.push('/auth/recover')}
          >
            Recuperar contraseña
          </button>
        </p>
      </div>
    </Layout>
  );
}
