 Portafolio de Jose David Vásquez Alcaraz

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8.svg)](https://tailwindcss.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110.1-009688.svg)](https://fastapi.tiangolo.com/)

Portafolio web moderno y creativo desarrollado con React, Tailwind CSS y FastAPI. Incluye una Pokédex interactiva con integración a la PokeAPI.

 Características

 Diseño Moderno
- Modo Oscuro/Claro: Cambia entre temas con un solo clic
- Animaciones Fluidas: Micro-interacciones y efectos visuales atractivos
- Diseño Responsivo: Optimizado para todos los dispositivos
- Gradientes Creativos: Paleta de colores vibrante con naranja, ámbar y turquesa

 Páginas Principales
1. Inicio: Presentación impactante con información destacada
2. Sobre Mí: Biografía, educación (SENA, Quipux) y habilidades
3. Proyectos: Galería de 5 proyectos con filtros por categoría
4. Pokédex: Página interactiva con integración a PokeAPI
5. Contacto: Formulario con validaciones y información de contacto

 Pokédex Interactiva
- Búsqueda Avanzada: Por nombre o ID con validaciones
- Filtros por Tipo: 18 tipos de Pokémon disponibles
- Carga Infinita: Scroll infinito con paginación
- Detalles Completos: 
  - Estadísticas base (HP, Attack, Defense, etc.)
  - Habilidades y tipos
  - Altura y peso
  - Cadena de evolución
  - Imágenes de alta calidad

Tecnologías Utilizadas

 Frontend
- React 19.0.0: Framework principal
- React Router 7.5.1: Navegación entre páginas
- Tailwind CSS 3.4.17: Estilos y diseño
- Lucide React: Iconos modernos
- Shadcn/ui: Componentes UI de alta calidad
- Axios: Peticiones HTTP

 Backend
- FastAPI 0.110.1: Framework backend (preparado para futuras integraciones)
- MongoDB: Base de datos NoSQL
- Motor: Driver asíncrono para MongoDB

API Externa
- PokeAPI: API REST pública para datos de Pokémon

  Requisitos Previos

- Node.js 18+ y Yarn
- Python 3.9+
- MongoDB (opcional para backend)

 Instalación y Uso

 1. Instalar Dependencias del Frontend
bash
cd frontend
yarn install


 2. Ejecutar el Proyecto

Frontend:
bash
cd frontend
yarn start

El frontend estará disponible en `http://localhost:3000`

  Estructura del Proyecto

```
/app
├── frontend/
│   ├── src/
│   │   ├── components/        Componentes reutilizables
│   │   │   ├── Header.js
│   │   │   └── Footer.js
│   │   ├── pages/             Páginas principales
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   ├── Projects.js
│   │   │   ├── Pokemon.js
│   │   │   └── Contact.js
│   │   ├── context/           Context API
│   │   │   └── ThemeContext.js
│   │   ├── data/              Datos mock
│   │   │   └── mock.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── server.py
│   └── requirements.txt
└── README.md
```

Características Técnicas

Validaciones del Formulario de Contacto
-  Nombre: Mínimo 3 caracteres
-  Email: Formato válido
-  Asunto: Campo requerido
-  Mensaje: Mínimo 10 caracteres

Validaciones de la Pokédex
-  Búsqueda: Mínimo 2 caracteres
-  Manejo de errores: Mensajes claros para Pokémon no encontrado
- Carga optimizada: Paginación de 20 Pokémon por página

 Paleta de Colores

css
/* Colores Principales */
Naranja: #f97316 (orange-500)
Ámbar: #f59e0b (amber-500)
Turquesa: #14b8a6 (teal-500)
Cian: #06b6d4 (cyan-500)

/* Neutros */
Slate 900: #0f172a (Dark mode background)
Slate 800: #1e293b
White: #ffffff (Light mode background)
```

 Sobre el Desarrollador

Jose David Vásquez Alcaraz
- 🎂 17 años
- 💼 Técnico en Desarrollo de Software - SENA (2025)
- 🌱 Semillero de Desarrollo - Quipux (2025)
- 💻 2 años de experiencia en desarrollo web
- 📧 Email: da4048382@gmail.com
- 📱 Teléfono: 3133446721
- 💻 GitHub: [DA4048382-NETIZEN](https://github.com/DA4048382-NETIZEN)

 Habilidades Técnicas

Frontend:
- HTML, CSS, JavaScript
- React (nivel básico-intermedio)
- Tailwind CSS, Bootstrap (nivel básico)

Backend:
- PHP (nivel avanzado)
- Node.js (nivel intermedio)
- Python (nivel intermedio)
- Django (nivel básico)

Bases de Datos:
- MySQL
- MongoDB

 Contacto

Si tienes alguna pregunta o quieres colaborar en un proyecto:

- 📧 Email: da4048382@gmail.com
- 📱 Teléfono: 3133446721
- 💻 GitHub: https://github.com/DA4048382-NETIZEN

---

Desarrollado  por Jose David Vásquez Alcaraz
