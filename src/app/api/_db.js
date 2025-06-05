// Carga dotenv solo en desarrollo (Next.js ya lo hace en producción)
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config();
}

export function getMysqlConfig() {
  return {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'miruta',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  };
}
