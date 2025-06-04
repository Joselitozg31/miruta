/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Asegúrate de incluir todas las rutas relevantes
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#00297A', // Define el color azul personalizado
      },
    },
  },
  plugins: [],
};
