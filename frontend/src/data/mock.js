// Mock data for Jose David's Portfolio

export const personalInfo = {
  name: "Jose David Vásquez Alcaraz",
  age: 17,
  title: "Desarrollador Junior",
  bio: "Joven desarrollador apasionado por la tecnología y la innovación. Con 2 años de experiencia en programación, especializado en desarrollo web frontend y backend. Actualmente obteniendo el título de Técnico en Desarrollo de Software con el SENA (2025) y participando en un semillero con Quipux.",
  photo: "https://customer-assets.emergentagent.com/job_c25361e1-18ff-483e-a1b1-2c63bc05c20e/artifacts/y5ikw4lu_ae0213b5-f3f1-486a-b612-7eae5dbdc85f.jfif",
  contact: {
    phone: "3133446721",
    email: "da4048382@gmail.com",
    github: "https://github.com/DA4048382-NETIZEN",
    location: "Colombia"
  },
  education: [
    {
      institution: "SENA",
      title: "Técnico en Desarrollo de Software",
      year: "2025",
      logo: "https://customer-assets.emergentagent.com/job_c25361e1-18ff-483e-a1b1-2c63bc05c20e/artifacts/p77zob6b_13d088e9-630d-451f-8888-28518e1162ac.jfif"
    },
    {
      institution: "Quipux",
      title: "Semillero de Desarrollo",
      year: "2025",
      logo: "https://customer-assets.emergentagent.com/job_c25361e1-18ff-483e-a1b1-2c63bc05c20e/artifacts/crep97zl_b175f559-f35b-4e4c-87d5-cae3dccf213b.jfif"
    }
  ]
};

export const skills = {
  frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 70 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Bootstrap", level: 70 }
  ],
  backend: [
    { name: "PHP", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "Django", level: 65 }
  ],
  databases: [
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 70 }
  ],
  tools: [
    { name: "Git/GitHub", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "Postman", level: 75 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Sistema de Gestión Escolar",
    description: "Plataforma web para gestión de estudiantes, profesores y calificaciones. Incluye dashboard administrativo y panel de estudiantes.",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjBwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NjEwNjQ2NjN8MA&ixlib=rb-4.1.0&q=85",
    category: "Web Application"
  },
  {
    id: 2,
    title: "E-Commerce con Carrito de Compras",
    description: "Tienda online completa con sistema de autenticación, carrito de compras y panel de administración de productos.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "https://images.unsplash.com/photo-1653387319597-84bde7e5368e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxjb2RpbmclMjBwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NjEwNjQ2NjN8MA&ixlib=rb-4.1.0&q=85",
    category: "Full Stack"
  },
  {
    id: 3,
    title: "API REST de Gestión de Tareas",
    description: "API RESTful completa para gestión de tareas con autenticación JWT, CRUD operations y documentación Swagger.",
    technologies: ["Python", "Django", "PostgreSQL", "JWT"],
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    category: "Backend"
  },
  {
    id: 4,
    title: "Dashboard Analítico",
    description: "Dashboard interactivo con gráficos y estadísticas en tiempo real para visualización de datos empresariales.",
    technologies: ["React", "Chart.js", "Node.js", "MySQL"],
    image: "https://images.unsplash.com/photo-1565229284535-2cbbe3049123?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NjEwNjQ2NjN8MA&ixlib=rb-4.1.0&q=85",
    category: "Data Visualization"
  },
  {
    id: 5,
    title: "Blog Personal con CMS",
    description: "Blog personal con sistema de gestión de contenido, comentarios, categorías y buscador avanzado.",
    technologies: ["PHP", "MySQL", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1718353097521-e47e1d67edc2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBib29rc3xlbnwwfHx8fDE3NjEwNjQ2Njh8MA&ixlib=rb-4.1.0&q=85",
    category: "Web Application"
  }
];

export const services = [
  {
    id: 1,
    title: "Desarrollo Frontend",
    description: "Creación de interfaces web modernas y responsivas con React, HTML5, CSS3 y frameworks como Tailwind CSS y Bootstrap.",
    features: [
      "Diseño responsivo y mobile-first",
      "Interfaces interactivas y dinámicas",
      "Optimización de rendimiento",
      "Cross-browser compatibility"
    ]
  },
  {
    id: 2,
    title: "Desarrollo Backend",
    description: "Desarrollo de APIs RESTful y lógica de servidor con PHP, Node.js, Python y gestión de bases de datos.",
    features: [
      "APIs RESTful robustas",
      "Autenticación y seguridad",
      "Integración con bases de datos",
      "Arquitectura escalable"
    ]
  },
  {
    id: 3,
    title: "Desarrollo Full Stack",
    description: "Soluciones completas desde el diseño frontend hasta la implementación backend y despliegue.",
    features: [
      "Aplicaciones web completas",
      "Integración frontend-backend",
      "Gestión de bases de datos",
      "Despliegue y mantenimiento"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Instructor SENA",
    role: "Docente de Desarrollo de Software",
    content: "Jose David demuestra una gran capacidad de aprendizaje y dedicación. Su habilidad para resolver problemas complejos y su pasión por la tecnología lo destacan entre sus compañeros.",
    avatar: "https://ui-avatars.com/api/?name=Instructor+SENA&background=ff6b35&color=fff"
  },
  {
    id: 2,
    name: "Mentor Quipux",
    role: "Líder de Semillero",
    content: "Durante el semillero, Jose David ha mostrado excelentes habilidades técnicas y trabajo en equipo. Su compromiso con el aprendizaje continuo es admirable.",
    avatar: "https://ui-avatars.com/api/?name=Mentor+Quipux&background=00b4d8&color=fff"
  }
];