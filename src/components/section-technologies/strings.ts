export const TITLE = `Tecnologías`;

interface ContentType {
  id: number;
  title: string;
  content: string;
  url: string;
}

export const CONTENT: ContentType[] = [
  {
    id: 1,
    title: "Javascript",
    content:
      "Tengo experiencia en JavaScript, desarrollando aplicaciones web dinámicas y funcionalidades interactivas. He trabajado en proyectos utilizando tanto el lado del cliente (front-end) como el lado del servidor (back-end) con Node.js.",
    url: "/javascript.svg",
  },
  {
    id: 2,
    title: "Typescript",
    content:
      "He trabajado con TypeScript, desarrollando aplicaciones web y servicios backend. Tengo experiencia en la creación de tipos de datos personalizados, interfaces, y en el uso de características avanzadas como decoradores y tipos de uniones.",
    url: "/typescript.svg",
  },
  {
    id: 3,
    title: "React.js",
    content:
      "He trabajado con React, desarrollando aplicaciones web dinámicas. Tengo experiencia en gestión de estado, componentes reutilizables, y optimización de rendimiento para una experiencia de usuario fluida.",
    url: "/react.svg",
  },
  {
    id: 4,
    title: "Github.js",
    content:
      "He trabajado con Next.js, desarrollando aplicaciones web dinámicas usando React. Tengo experiencia en enrutamiento dinámico, renderizado del lado del servidor y optimización de rendimiento.",
    url: "/github.svg",
  },
  {
    id: 5,
    title: "Next.js",
    content:
      "He trabajado con Next.js, desarrollando aplicaciones web dinámicas usando React. Tengo experiencia en enrutamiento dinámico, renderizado del lado del servidor y optimización de rendimiento.",
    url: "/nextjs.svg",
  },
  {
    id: 6,
    title: "Node.js",
    content:
      "He trabajado con Node.js y Express para crear servidores web robustos. Tengo experiencia en enrutamiento, middleware, manejo de solicitudes y respuestas, y desarrollo de API RESTful.",
    url: "/node.svg",
  },
  {
    id: 7,
    title: "Sql Server",
    content:
      "He trabajado con SQL Server, gestionando bases de datos relacionales. Tengo experiencia en diseño de esquemas, consultas SQL, almacenamiento de procedimientos, y optimización de consultas para mejorar el rendimiento de la base de datos.",
    url: "/microsoft-sql-server.svg",
  },
  {
    id: 8,
    title: "My Sql",
    content:
      "He trabajado con MySQL, administrando bases de datos relacionales. Tengo experiencia en diseño de esquemas, consultas SQL, almacenamiento de procedimientos y funciones, y optimización de consultas para mejorar el rendimiento de la base de datos.",
    url: "/mysql.svg",
  },
  {
    id: 9,
    title: "Postgres Sql",
    content:
      "He trabajado con PostgreSQL, administrando bases de datos relacionales. Tengo experiencia en diseño de esquemas, consultas SQL avanzadas, almacenamiento de procedimientos y funciones, y optimización de consultas para mejorar el rendimiento de la base de datos.",
    url: "/postgresql.svg",
  },
];
