// Carga dotenv solo en desarrollo (Next.js ya lo hace en producción)
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // Carga las variables de entorno desde un archivo .env
  require('dotenv').config();
}

// Configuración de conexión a MySQL
export function getMysqlConfig() {
  return {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',         // <-- Cambia a DB_USER
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'miruta',    // <-- Cambia a DB_NAME
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  };
}
