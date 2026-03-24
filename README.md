# 🍪 Cookie Clicker (React + Vite)

Pequeña aplicación tipo **idle game / incremental** desarrollada con **React, TypeScript y Vite**, donde el usuario acumula clics (cookies) y puede exportar/importar su progreso.

---

## 🚀 Demo

> [Try me](https://cookie-clicker-alpha-two.vercel.app/)

---

## 🧠 Descripción

Este proyecto simula la mecánica básica de un **Cookie Clicker**:

* Cada clic incrementa un contador
* Se almacena el estado actual (clics + timestamp)
* Permite exportar e importar el progreso del usuario
* Manejo de estado con Context API

---

## 🧰 Tecnologías utilizadas

* ⚛️ React
* ⚡ Vite
* 🟦 TypeScript
* 🎨 TailwindCSS
* 🧩 Context API

---

## 📦 Instalación

```bash
git clone https://github.com/tw1ttt3r/cookie_clicker.git
cd cookie_clicker
yarn install
```

---

## ▶️ Ejecución

```bash
yarn run dev
```

Abrir en navegador:

```
http://localhost:5173
```

---

## 🏗️ Estructura del proyecto

```
src/
│
├── components/        # Componentes UI
├── config/context/    # Contexto global (cookies / storage)
├── config/hooks/      # Hooks personalizados
├── config/helpers/    # Helpers (export/import JSON, etc.)
└── main.tsx           # Entry point
```

---

## 💾 Funcionalidades principales

### 🍪 Contador de clics

* Incremento manual de cookies
* Registro de último clic (timestamp)

---

### 📤 Exportar progreso

Permite descargar el estado actual en formato JSON:

```json
{
  "accumulated": 120,
  "lastAccumulated": 1774393525
}
```

---

### 📥 Importar progreso

Permite cargar un archivo JSON previamente exportado para restaurar el estado.

---

## 🧪 Scripts disponibles

```bash
yarn run dev       # Desarrollo
yarn run build     # Build de producción
yarn run preview   # Preview del build
```

---

## ⚠️ Notas técnicas

* El import de archivos se realiza mediante:

  * `<input type="file">`
* El export se realiza usando:

  * Blob + descarga o `file-saver`
* La persistencia puede extenderse a:

  * localStorage

---

## 🚧 Posibles mejoras

* 💾 Autosave con localStorage
* 📈 Sistema de upgrades (multiplicadores)
* ⏱️ Generación automática de cookies
* 📱 Mejor UI/UX
* 🌙 Dark mode

---

## 🧑‍💻 Autor

Desarrollado por **tw1ttt3r**

---

## 📄 Licencia

MIT
