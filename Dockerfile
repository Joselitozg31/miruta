# Usa Node.js LTS como base
FROM node:20-alpine

# Instala dependencias del sistema necesarias para node-gyp y mysql2
RUN apk add --no-cache python3 make g++ bash

# Crea directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json primero para aprovechar la cache de Docker
COPY package*.json ./

# Instala dependencias de Node.js
RUN npm install

# Copia el resto del código fuente
COPY . .

# Copia el archivo .env si existe (o monta con docker-compose)
# COPY .env .env

# Construye la app Next.js para producción
RUN npm run build || true

# Expone el puerto por defecto de Next.js
EXPOSE 3000

# Variables de entorno recomendadas para producción
ENV NODE_ENV=production

# Comando para iniciar Next.js en producción
CMD ["npm", "start"]
