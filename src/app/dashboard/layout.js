'use client';

import Header from '../../components/Header';

export default function DashboardLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="full-width-bar">
        <Header />
      </div>
      <main style={{ flex: 1 }}>{children}</main>
      <footer
        className="full-width-bar"
        style={{
          textAlign: 'center',
          padding: '0.7rem 0',
          background: '#1F6C98',
          color: '#FADF63',
          fontSize: '0.95em',
          marginTop: 'auto'
        }}
      >
        © {new Date().getFullYear()} MiRuta. Todos los derechos reservados.
      </footer>
    </div>
  );
}
