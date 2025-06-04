'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../../components/Layout';

export default function Recover() {
  const [step, setStep] = useState(1); // 1: pedir email, 2: pedir código y nueva contraseña
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Paso 1: Solicitar código de recuperación
  const handleRequestCode = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    if (!email) {
      setError('Introduce tu correo electrónico');
      return;
    }
    // Aquí deberías llamar a tu API para enviar el código al correo
    const res = await fetch('/api/auth/recover', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage('Se ha enviado un código de recuperación a tu correo.');
      setStep(2);
    } else {
      setError(data.message || 'No se pudo enviar el código');
    }
  };

  // Paso 2: Cambiar contraseña con código
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    if (!code || !newPassword || !repeatPassword) {
      setError('Completa todos los campos');
      return;
    }
    if (newPassword !== repeatPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    // Validación frontend (opcional, el backend valida igual)
    const specialChars = /[.,\-¨\*\^¿\?=\/\·"\$%´`+]/;
    const hasUppercase = /[A-Z]/;
    if (
      newPassword.length < 8 ||
      !hasUppercase.test(newPassword) ||
      !specialChars.test(newPassword)
    ) {
      setError('La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial (.,-¨*^¿?=)/·"$%´`+)');
      return;
    }
    // Aquí deberías llamar a tu API para cambiar la contraseña
    const res = await fetch('/api/auth/recover', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code, newPassword }),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage('Contraseña cambiada correctamente. Ahora puedes iniciar sesión.');
      setTimeout(() => router.push('/auth/login'), 2000);
    } else {
      setError(data.message || 'No se pudo cambiar la contraseña');
    }
  };

  return (
    <Layout>
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Recuperar contraseña</h1>
        {message && <p className="text-green-600 text-center">{message}</p>}
        {error && <p className="text-red-600 text-center">{error}</p>}
        {step === 1 && (
          <form onSubmit={handleRequestCode} className="space-y-6">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full p-2 rounded border border-gray-300 text-black"
            />
            <button type="submit" className="btn-rounded btn-blue w-full">
              Enviar código
            </button>
            <button
              type="button"
              className="btn-rounded btn-secondary w-full"
              onClick={() => router.push('/auth/login')}
            >
              Volver al login
            </button>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleChangePassword} className="space-y-6">
            <input
              type="text"
              placeholder="Código recibido"
              value={code}
              onChange={e => setCode(e.target.value)}
              required
              className="w-full p-2 rounded border border-gray-300 text-black"
            />
            <input
              type="password"
              placeholder="Nueva contraseña"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              required
              className="w-full p-2 rounded border border-gray-300 text-black"
            />
            <input
              type="password"
              placeholder="Repetir nueva contraseña"
              value={repeatPassword}
              onChange={e => setRepeatPassword(e.target.value)}
              required
              className="w-full p-2 rounded border border-gray-300 text-black"
            />
            <button type="submit" className="btn-rounded btn-blue w-full">
              Cambiar contraseña
            </button>
            <button
              type="button"
              className="btn-rounded btn-secondary w-full"
              onClick={() => router.push('/auth/login')}
            >
              Volver al login
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
}
