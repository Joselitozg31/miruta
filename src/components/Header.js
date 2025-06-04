'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleHomeClick = () => {
    // Si el usuario tiene token, ve al dashboard, si no, ve al login
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      router.replace('/dashboard');
    } else {
      router.replace('/auth/login');
    }
  };

  const handleUserClick = () => {
    router.push('/dashboard/usuario');
  };

  return (
    <header className="header flex items-center justify-center relative">
      <div className="absolute left-4 flex items-center">
        {/* Menú hamburguesa de 3 líneas */}
        <div
          className="flex flex-col justify-center items-center cursor-pointer"
          style={{ width: '2.2rem', height: '2.2rem' }}
          tabIndex={0}
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(!menuOpen)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setMenuOpen(!menuOpen); }}
        >
          <div style={{
            width: '2rem',
            height: '0.3rem',
            background: '#FADF63',
            borderRadius: '0.2rem',
            margin: '0.4rem 0'
          }} />
          <div style={{
            width: '2rem',
            height: '0.3rem',
            background: '#FADF63',
            borderRadius: '0.2rem',
            margin: '0.4rem 0'
          }} />
          <div style={{
            width: '2rem',
            height: '0.3rem',
            background: '#FADF63',
            borderRadius: '0.2rem',
            margin: '0.4rem 0'
          }} />
        </div>
        {/* Menú desplegable */}
        {menuOpen && (
          <div
            className="menu-content"
            style={{
              position: 'absolute',
              top: '2.8rem',
              left: 0,
              zIndex: 200
            }}
          >
            <a href="/dashboard/rutas">Rutas</a>
            <a href="/dashboard/paradas">Paradas</a>
            <a href="/dashboard/ubicacion">Ubicación</a>
            {isAdmin && (
              <>
                <a href="/dashboard/autobus">Autobús</a>
                <a href="/dashboard/conductor">Conductor</a>
                <a href="/dashboard/usuariosdatos">Usuarios</a>
              </>
            )}
          </div>
        )}
      </div>
      <div className="flex-1 flex justify-center">
        <span
          className="text-[5rem] font-extrabold tracking-wide text-center cursor-pointer select-none"
          style={{ letterSpacing: '2px', lineHeight: '1', fontSize: 20}}
          onClick={() => router.push('/dashboard')}
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.push('/dashboard'); }}
          role="link"
          aria-label="Ir al dashboard"
        >
          MiRuta
        </span>
      </div>
      <div className="absolute right-4 flex items-center">
        {/* Botón usuario a la derecha */}
        <nav className="flex gap-4 items-center">
          <button
            className="user-button"
            title="Usuario"
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              fontSize: '1.8rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={handleUserClick}
          >
            {/* Icono de persona estilo Material/Emoji */}
            <span role="img" aria-label="usuario">👤</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
