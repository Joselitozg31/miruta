import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full text-center py-4 bg-gray-200 text-gray-700 mt-8">
      © {new Date().getFullYear()} MiRuta. Todos los derechos reservados.
    </footer>
  );
}
