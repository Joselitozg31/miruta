'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Layout from '../../../components/Layout';

function VerifyContent() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) setEmail(emailParam);
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setSuccess(false);

    const res = await fetch('/api/auth/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code }),
    });
    const data = await res.json();
    if (res.ok) {
      setSuccess(true);
      setMessage('¡Cuenta verificada correctamente! Ya puedes iniciar sesión.');
      setTimeout(() => router.push('/auth/login'), 2000);
    } else {
      setMessage(data.message || 'Error al verificar el código');
    }
  };

  return (
    <Layout>
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md mt-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Verificar cuenta</h1>
        {message && (
          <p className={success ? 'text-green-600 text-center' : 'text-red-500 text-center'}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full p-2 rounded border border-gray-300 text-black"
          />
          <input
            type="text"
            placeholder="Código de verificación"
            value={code}
            onChange={e => setCode(e.target.value)}
            required
            className="w-full p-2 rounded border border-gray-300 text-black"
          />
          <button type="submit" className="bg-blue-700 text-white p-2 rounded-lg w-full">
            Verificar
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default function Verify() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <VerifyContent />
    </Suspense>
  );
}
