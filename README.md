.This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Structure Folder
# Proyecto Next.js 15 con Prisma y ShadCN

Este proyecto es una aplicación web desarrollada con **Next.js 15**, utilizando **Prisma** para la gestión de base de datos y **ShadCN** para la UI.

## Tecnologías utilizadas

- **Next.js 15** - Framework de React para aplicaciones web
- **Prisma** - ORM para manejar la base de datos
- **ShadCN** - Biblioteca de componentes UI basada en Tailwind CSS
- **Redux Toolkit** - Manejo de estado global
- **TypeScript** - Tipado estático para mayor seguridad en el código

## Estructura de Carpetas

### 📂 `prisma/` - Configuración de Prisma para la base de datos

Contiene los archivos relacionados con la base de datos, incluyendo modelos y migraciones.

- `schema.prisma` - Esquema principal de la base de datos.
- `models/` - Modelos de la base de datos separados en archivos.
- `migrations/` - Historial de migraciones de la base de datos.
- `seed.ts` - Script para poblar la base de datos con datos iniciales.

### 📂 `scripts/` - Scripts personalizados

- `generateEnums.js` - Generación automática de enums para el proyecto.

### 📂 `src/` - Código fuente principal del proyecto

#### 📂 `app/` - Router de la aplicación (Frontend + Backend)

- **📂 api **`` - Rutas API que manejan la lógica del backend.
  - `auth/` - Manejo de autenticación.
  - `recursos/` - Endpoints relacionados con recursos.
  - `pagos/` - Endpoints relacionados con pagos, incluyendo webhooks.
- 📂dashboard`` - Dashboard protegido de la aplicación.
- 📂login`` - Página de inicio de sesión.
- 📂recursos`` - Página de gestión de recursos.
- 📂pagos`` - Página de gestión de pagos.
- `layout.tsx` - Layout global de la aplicación.
- `page.tsx` - Página principal de la aplicación.

#### 📂 `components/` - Componentes reutilizables

- `ui/` - Componentes de interfaz como botones, modales y tablas.
- `auth/` - Componentes relacionados con la autenticación.
- `recursos/` - Componentes específicos para recursos.
- `pagos/` - Componentes específicos para pagos.

#### 📂 `hooks/` - Hooks personalizados

Contiene funciones reutilizables como `useAuth.ts` para autenticación y `useFetch.ts` para llamadas a la API.

#### 📂 `redux/` - Gestión de estado global con Redux Toolkit

- `store.ts` - Configuración de Redux.
- `slices/` - Slices para manejar el estado de autenticación, recursos y pagos.

#### 📂 `services/` - Servicios para manejar la lógica de negocio y consumo de APIs

- `auth/` - Lógica de autenticación y cliente HTTP.
- `recursos/` - Lógica de recursos y cliente HTTP.
- `pagos/` - Lógica de pagos y cliente HTTP.

#### 📂 `domain/` - Modelos, interfaces y enums

Define estructuras de datos y enumeraciones utilizadas en la aplicación.

#### 📂 `infrastructure/` - Configuración y conexión con la base de datos

- `database/` - Cliente de Prisma.
- `repositories/` - Repositorios para interactuar con la base de datos.
- `apiClients/` - Clientes para APIs externas.
- `providers/` - Integraciones con proveedores externos.

#### 📂 `styles/` - Estilos globales con CSS

#### 📂 `config/` - Configuración global del proyecto

- `routes.ts` - Definición de rutas.
- `constants.ts` - Variables y constantes globales.

#### 📂 `middleware/` - Middleware para la aplicación

- `authMiddleware.ts` - Middleware de autenticación.

## Configuración y Ejecución del Proyecto

### 1. Clonar el repositorio

```sh
git clone <URL_DEL_REPO>
cd <NOMBRE_DEL_PROYECTO>
```

### 2. Instalar dependencias

```sh
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` y agregar las variables necesarias:

```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/basededatos"
NEXTAUTH_SECRET="clave-secreta"
```

### 4. Ejecutar migraciones de Prisma

```sh
npx prisma migrate dev
```

### 5. Poblar la base de datos (Opcional)

```sh
npx prisma db seed
```

### 6. Iniciar el servidor de desarrollo

```sh
npm run dev
```


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
