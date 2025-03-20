# Etapa 1: Construcción
FROM node:18-alpine AS builder
WORKDIR /app

# Copiar dependencias e instalar
COPY package.json package-lock.json ./
RUN npm ci

# Copiar código fuente y compilar
COPY . .
RUN npm run build

# Etapa 2: Producción
FROM node:18-alpine
WORKDIR /app

# Copiar archivos de la etapa de construcción
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/node_modules node_modules

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=3000

# Exponer puerto
EXPOSE 3000

# Iniciar el servidor Next.js
CMD ["node", "node_modules/.bin/next", "start"]
