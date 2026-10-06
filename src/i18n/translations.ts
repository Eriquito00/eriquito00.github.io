import type { Language, TranslationDictionary } from "./types";

const spanish: TranslationDictionary = {
  languageName: "Español",
  navigation: {
    home: "Inicio",
    experience: "Trayectoria",
    skills: "Tecnologías",
    projects: "Proyectos",
    certificates: "Certificados",
    contact: "Contacto",
    mainLabel: "Navegación principal",
    menuLabel: "Abrir menú de navegación",
    themeToLight: "Cambiar a modo claro",
    themeToDark: "Cambiar a modo oscuro",
    languageLabel: "Idioma",
    skipToContent: "Saltar al contenido principal",
    close: "Cerrar",
  },
  hero: {
    role: "Desarrollador web · IA y Big Data",
    description:
      "Soy Eric Mejias Gamonal. Desarrollo proyectos web mientras sigo aprendiendo el mundo de la inteligencia artificial y Big Data. Aqui podeis ver más sobre mis proyectos y mi experiencia.",
    location: "España",
    approach: "GitHub-first",
    stack: "TypeScript · React · Node.js · Express · Python",
    github: "GitHub",
    linkedin: "LinkedIn",
    blogger: "Blogger",
    cv: "CV",
    status: "available to explore",
    profileNow: "Especialización en IA y Big Data",
    profileNext: "¿Ingeniería de datos?",
    profileInterests: ["desarrollo web", "inteligencia artificial", "datos"],
    profileStatus: "aprendiendo",
  },
  experience: {
    title: "Experiencia y formación",
    openCv: "Abrir CV",
    professionalExperience: "Experiencia profesional",
    education: "Formación",
    facts: [
      "Permisos B y A2",
      "Español y catalán nativos",
      "Inglés B1-B2",
      "Disponibilidad presencial, híbrida o remota",
    ],
    items: {
      seo: {
        role: "Analista SEO",
        company: "Imàtica · Girona, Cataluña, España",
        detail:
          "Auditorías técnicas y optimización de posicionamiento con GSC, GA4, ADS y SEMrush.",
      },
      geniusx: {
        role: "Desarrollador Web",
        company: "GeniusX · Cassà de la Selva, Cataluña, España",
        detail:
          "Desarrollo de funcionalidades para aplicaciones web de cliente y entrega de features funcionales con PHP, CodeIgniter, JavaScript y AJAX.",
      },
      erasmus: {
        role: "Técnico Microinformático",
        company: "Leankubatore · Erasmus+ · Catania, Sicilia, Italia",
        detail:
          "Soporte técnico, mantenimiento de sistemas y gestión de contenido en WordPress.",
      },
      school: {
        role: "Técnico Microinformático",
        company: "Escola Maria Cubí i Soler · Malgrat de Mar, Cataluña, España",
        detail:
          "Resolución de incidencias de hardware, software y redes en equipos educativos.",
      },
    },
    studies: {
      ai: "Especialización en Inteligencia Artificial y Big Data",
      daW: "Grado Superior en Desarrollo de Aplicaciones Web",
      smr: "Grado Medio en Sistemas Microinformáticos y Redes",
    },
  },
  skills: {
    title: "Tecnologías y herramientas",
    categories: {
      frontend: {
        title: "Frontend",
        description: "Interfaces y experiencias para navegador",
      },
      backend: {
        title: "Backend",
        description: "APIs, lógica de aplicación y tiempo real",
      },
      databases: {
        title: "Datos",
        description: "Modelado, persistencia y consultas",
      },
      tools: {
        title: "Tools",
        description: "Herramientas para construir y compartir",
      },
      learning: { title: "Learning", description: "Nuevas tecnologías" },
      seo: { title: "SEO", description: "Posicionamiento técnico y analítica" },
    },
  },
  projects: {
    title: "Proyectos",
    details: "Ver detalles",
    repository: "Repositorio",
    liveDemo: "Demo en vivo",
    stack: "Stack",
    filters: {
      all: "Todos",
      fullstack: "Full Stack",
      frontend: "Frontend",
      backend: "Backend",
      education: "Apuntes",
    },
    copies: {
      rekko: {
        description:
          "Rekko-Lists es la organización de una red social de anime full stack, con frontend React + TypeScript y API REST en Node.js, Express y Prisma para recomendaciones e interacción.",
        fullDescription:
          "Rekko-Lists desarrolla una red social centrada en el descubrimiento de anime y las recomendaciones. El proyecto integra un frontend SPA con React, Vite, TypeScript, Zustand y Tailwind, junto a una API REST en Node.js, Express, Prisma y PostgreSQL. Incluye autenticación, perfiles, publicaciones, comentarios, reputación, retos diarios, recomendaciones e integración con servicios de anime.",
      },
      rekkophp: {
        description: "Prototipo de plataforma de recomendaciones de anime desarrollada en PHP, con arquitectura MVC, autenticación JWT y OAuth2, gestión de usuarios y persistencia en MySQL.",
        fullDescription: "Prototipo de una plataforma de recomendaciones de anime desarrollada en PHP, que sirvió como base para la posterior evolución de Rekko. Implementa una arquitectura MVC propia, autenticación mediante JWT y OAuth2 con GitHub, refresh tokens, gestión de usuarios y roles, recuperación de contraseña, reCAPTCHA y persistencia en MySQL mediante PDO. También incorpora PHPStan para análisis estático."
      },
      astronomy: {
        description: "Aplicación PHP que consume la API REST de Wikipedia para obtener artículos de astronomía, almacenarlos en MySQL y mostrarlos mediante una interfaz MVC con paginación.",
        fullDescription: "Aplicación web desarrollada en PHP que consume la API REST de Wikipedia para obtener artículos cortos de astronomía, incluyendo imágenes, y almacenarlos en una base de datos MySQL mediante PDO. Utiliza una arquitectura MVC y permite configurar los artículos mediante CSV, recargarlos bajo demanda y mostrarlos mediante paginación configurable. El proyecto está preparado para ejecutarse con Apache, PHP y MySQL mediante XAMPP."
      },
      geoqueryai: {
        description: "Aplicación web que combina consultas en lenguaje natural con datos geográficos para buscar lugares y representar los resultados en un mapa mediante IA y una arquitectura cliente-servidor.",
        fullDescription: "Aplicación web que permite realizar consultas en lenguaje natural sobre lugares geográficos y visualizar los resultados directamente sobre un mapa. El proyecto utiliza una arquitectura cliente-servidor separando frontend y backend, con TypeScript en el cliente y Node.js en el servidor. Integra un modelo de IA mediante la API de OpenAI para interpretar las consultas y transformarlas en búsquedas geográficas, proporcionando una forma más natural de explorar ubicaciones."
      },
      primero: {
        description: "Juego multijugador inspirado en UNO desarrollado con TypeScript, Node.js y WebSockets, con frontend y servidor independientes y preparado para despliegue en Render.",
        fullDescription: "Juego multijugador inspirado en UNO desarrollado para practicar comunicación en tiempo real mediante WebSockets. El proyecto utiliza TypeScript y Node.js, separando frontend, servidor y scripts auxiliares. La arquitectura permite gestionar partidas y comunicación entre jugadores en tiempo real, y el proyecto está preparado para desplegarse como un único servicio Node.js en Render mediante un Blueprint y un proceso de build específico para producción.",
      },
      "iabd-notes": {
        description: "Repositorio de apuntes y material de estudio sobre Inteligencia Artificial y Big Data, organizado por áreas como modelos de IA, programación, aprendizaje automático y sistemas Big Data.",
        fullDescription: "Repositorio personal de apuntes y material de estudio del ámbito de Inteligencia Artificial y Big Data. El contenido está organizado en diferentes áreas, incluyendo Big Data aplicado, modelos de IA, programación de IA, sistemas de aprendizaje automático y sistemas de Big Data. También incorpora recursos visuales y una estructura compatible con Obsidian para facilitar la organización y consulta del contenido.",
      },
      "webdev-notes": {
        description:  "Repositorio de apuntes de Desarrollo de Aplicaciones Web que reúne contenidos de frontend, backend, bases de datos, sistemas, SEO, despliegue, Git y diseño web.",
        fullDescription: "Repositorio de apuntes y material de estudio de Desarrollo de Aplicaciones Web, organizado por las diferentes áreas del ciclo DAW. Incluye contenidos de frontend y backend, bases de datos, persistencia, programación, sistemas informáticos, diseño de interfaces, despliegue, SEO, Git y GitHub y lenguajes de marcas. Está estructurado para consultar y mantener de forma organizada el aprendizaje técnico del ciclo.",
      },
      climbing: {
        description: "Aplicación de gestión de escalada desarrollada en Java con MySQL y JDBC, con persistencia de datos, pruebas y un entorno reproducible mediante Docker y Maven.",
        fullDescription: "Aplicación de gestión relacionada con la escalada desarrollada en Java, utilizando MySQL como sistema de persistencia y JDBC para la comunicación con la base de datos. El proyecto trabaja con Java 21, Maven y Docker, incluyendo un entorno contenedorizado para la base de datos y una estructura preparada para desarrollo y pruebas. Fue desarrollado conjuntamente como proyecto académico y cuenta además con tests y documentación del sistema.",
      },
      pokeapi: {
        description: "Proyecto de integración de datos que consume la PokeAPI, transforma su información y la almacena en una base de datos relacional MySQL mediante scripts de carga y modelos documentados.",
        fullDescription: "Proyecto centrado en la integración y persistencia de datos procedentes de la PokeAPI. El sistema consume información de la API, la procesa y la carga en una base de datos relacional MySQL. Incluye el diseño del modelo entidad-relación y modelo relacional, scripts DDL y DML, documentación y código organizado para la obtención e inserción de datos. El objetivo principal es trabajar el flujo completo desde una API externa hasta una base de datos estructurada.",
      },
      collections: {
        description: "Aplicación de consola en Java para gestionar productos de un supermercado, practicando programación orientada a objetos, Collections, herencia, ordenación y manejo de excepciones.",
        fullDescription: "Aplicación de consola desarrollada en Java que simula la gestión de productos de un supermercado. Implementa diferentes tipos de productos mediante herencia y clases especializadas para alimentación, electrónica y textil. El proyecto está orientado a practicar el uso de Collections, ordenación de elementos y gestión de excepciones según las diferentes situaciones del programa, aplicando conceptos de programación orientada a objetos.",
      },
      myanimelist: {
        description:  "Aplicación Java que consume la API oficial de MyAnimeList mediante OAuth2 y JWT, integrando autenticación, acceso a datos de anime y una base de datos gestionada con Docker.",
        fullDescription: "Aplicación desarrollada en Java centrada en el consumo de la API oficial de MyAnimeList y el aprendizaje de flujos de autenticación. Implementa OAuth2 y JWT para gestionar el acceso a la API, obteniendo información relacionada con anime y usuarios. El proyecto utiliza Java 21, Maven y Docker, incorporando una base de datos en un contenedor para facilitar el entorno de ejecución y persistencia de la aplicación.",
      },
      pianoman: {
        description: "Aplicación web interactiva que simula un piano virtual y permite reproducir notas mediante teclado, ratón o pantalla táctil, desarrollada con TypeScript, JavaScript, HTML, CSS y SVG.",
        fullDescription: "Aplicación web interactiva que simula un piano virtual directamente en el navegador. Permite reproducir notas mediante el teclado físico, el ratón y dispositivos táctiles, incorporando resaltado visual de las teclas activadas y soporte para diferentes métodos de interacción. Está desarrollada con TypeScript y JavaScript, utilizando HTML, CSS y SVG para la representación e interacción con el piano.",
      },
    },
  },
  certificates: {
    title: "Certificados",
    credential: "credential / pdf",
    download: "Descargar PDF",
    filters: {
      all: "Todos",
      generalitat: "Generalitat",
      microsoft: "Microsoft",
      sapalomera: "Sa Palomera",
    },
  },
  contact: {
    title: "Contacto",
    role: "Desarrollador web · IA y Big Data",
    location: "España · disponible presencial, híbrido o remoto · ericmejiasgamonal@gmail.com",
    slogan: "Código abierto, conversación directa.",
    availability: "Disponible para conversar",
    availabilityDetail:
      "Sobre desarrollo web, producto, inteligencia artificial y datos.",
  },
  footer: { copyright: "TypeScript + React + ESLint + Vite" },
  seo: {
    title: "Eric Mejias Gamonal - Portfolio Desarrollador Web",
    description:
      "Portfolio de Eric Mejias Gamonal, desarrollador web interesado en IA y Big Data.",
  },
};

const catalan: TranslationDictionary = {
  languageName: "Català",
  navigation: {
    home: "Inici",
    experience: "Trajectòria",
    skills: "Tecnologies",
    projects: "Projectes",
    certificates: "Certificats",
    contact: "Contacte",
    mainLabel: "Navegació principal",
    menuLabel: "Obrir menú de navegació",
    themeToLight: "Canviar al mode clar",
    themeToDark: "Canviar al mode fosc",
    languageLabel: "Idioma",
    skipToContent: "Saltar al contingut principal",
    close: "Tancar",
  },
  hero: {
    role: "Desenvolupador web · IA i Big Data",
    description:
      "Soc Eric Mejias Gamonal. Desenvolupo projectes web i de programari mentre continuo formant-me en intel·ligència artificial i Big Data. Aquest lloc reuneix treball personal i acadèmic enllaçat als repositoris originals.",
    location: "Espanya",
    approach: "GitHub-first",
    stack: "React · Node · Python · Java",
    github: "GitHub",
    linkedin: "LinkedIn",
    blogger: "Blogger",
    cv: "CV",
    status: "available to explore",
    profileNow: "Especialització en IA i Big Data",
    profileNext: "Enginyeria de dades?",
    profileInterests: [
      "desenvolupament web",
      "intel·ligència artificial",
      "dades",
    ],
    profileStatus: "aprenent en públic",
  },
  experience: {
    title: "Experiència i formació",
    openCv: "Obrir CV",
    professionalExperience: "Experiència professional",
    education: "Formació",
    facts: [
      "Permisos B i A2",
      "Espanyol i català nadius",
      "Anglès B1-B2",
      "Disponibilitat presencial, híbrida o remota",
    ],
    items: {
      seo: {
        role: "Analista SEO",
        company: "Imàtica · Girona, Catalunya",
        detail:
          "Auditories tècniques i optimització del posicionament amb Google Search Console, GA4 i SEMrush.",
      },
      geniusx: {
        role: "Desenvolupador Web",
        company: "GeniusX · Cassà de la Selva",
        detail:
          "Desenvolupament de funcionalitats per a aplicacions web de client i lliurament de features funcionals.",
      },
      erasmus: {
        role: "Tècnic Microinformàtic",
        company: "Leankubatore · Erasmus+ · Catània, Itàlia",
        detail:
          "Suport tècnic i manteniment de sistemes en un entorn internacional i multicultural.",
      },
      school: {
        role: "Tècnic Microinformàtic",
        company: "Escola Maria Cubí i Soler · Malgrat de Mar",
        detail:
          "Resolució d’incidències de maquinari, programari i xarxes en equips educatius.",
      },
    },
    studies: {
      ai: "Especialització en Intel·ligència Artificial i Big Data",
      daW: "Grau Superior en Desenvolupament d’Aplicacions Web",
      smr: "Grau Mitjà en Sistemes Microinformàtics i Xarxes",
    },
  },
  skills: {
    title: "Tecnologies i eines",
    categories: {
      frontend: {
        title: "Frontend",
        description: "Interfícies i experiències per al navegador",
      },
      backend: {
        title: "Backend & APIs",
        description: "APIs, lògica d’aplicació i temps real",
      },
      databases: {
        title: "Dades",
        description: "Modelatge, persistència i consultes",
      },
      tools: { title: "Eines", description: "Eines per construir i compartir" },
      learning: { title: "Learning", description: "Noves tecnologies" },
      seo: { title: "SEO", description: "Posicionament tècnic i analítica" },
    },
  },
  projects: {
    title: "Projectes",
    details: "Veure detalls",
    repository: "Repositori",
    liveDemo: "Demo en directe",
    stack: "Stack",
    filters: {
      all: "Tots",
      fullstack: "Full Stack",
      frontend: "Frontend",
      backend: "Backend",
      education: "Apunts",
    },
    copies: {
      rekko: {
        description:
          "Xarxa social full stack per descobrir i recomanar anime, amb una experiència de producte completa i publicada.",
        fullDescription:
          "Projecte principal: una xarxa social per descobrir, organitzar i recomanar anime. Combina React, TypeScript i Tailwind al frontend amb Node.js, Express i una capa de dades relacional. El projecte està publicat i reuneix autenticació, perfils, recomanacions i una experiència guiada per la comunitat.",
      },
      rekkophp: {
        description: "Prototip PHP d’una plataforma de recomanacions d’anime.",
        fullDescription:
          "Exploració backend de Rekko amb PHP, JavaScript i AJAX. El repositori treballa l’autenticació, la comunicació client-servidor i l’estructura d’una aplicació web orientada a recomanacions.",
      },
      astronomy: {
        description:
          "Articles d’astronomia des de l’API REST de Wikipedia amb persistència i paginació.",
        fullDescription:
          "Aplicació PHP que consumeix l’API REST de Wikipedia, desa el contingut a MySQL i el presenta amb paginació. És un exercici pràctic d’integració d’APIs, persistència i navegació de dades.",
      },
      geoqueryai: {
        description:
          "Consultes geogràfiques en llenguatge natural visualitzades sobre un mapa.",
        fullDescription:
          "Aplicació que interpreta consultes en llenguatge natural sobre llocs geogràfics i mostra els resultats en un mapa interactiu. És un dels projectes que connecta més directament el desenvolupament web amb la intel·ligència artificial.",
      },
      primero: {
        description:
          "Implementació del joc Uno amb TypeScript, Node.js i WebSockets.",
        fullDescription:
          "Joc multijugador en temps real que utilitza WebSockets per sincronitzar partides i sales. El projecte se centra en la comunicació client-servidor i en modelar la lògica d’un joc complet.",
      },
      "iabd-notes": {
        description:
          "Repositori d’apunts d’Intel·ligència Artificial i Big Data.",
        fullDescription:
          "Repositori acadèmic per organitzar apunts, exercicis i material d’estudi de l’especialització en Intel·ligència Artificial i Big Data.",
      },
      "webdev-notes": {
        description:
          "Repositori d’apunts i referències de desenvolupament web.",
        fullDescription:
          "Repositori personal per reunir apunts, referències i material de consulta relacionat amb el desenvolupament web.",
      },
      climbing: {
        description: "Aplicació de gestió d’escalada amb Java, MySQL i JDBC.",
        fullDescription:
          "Projecte col·laboratiu de gestió d’escalada amb persistència a MySQL mitjançant JDBC. El CV també recull l’ús de Maven, Docker i OAuth2 en l’entorn tècnic del projecte.",
      },
      pokeapi: {
        description:
          "Base de dades MySQL construïda a partir de dades de PokeAPI.",
        fullDescription:
          "Projecte col·laboratiu d’integració i gestió de dades: obté informació de PokeAPI, la modela a MySQL i permet treballar amb consultes sobre el conjunt de dades.",
      },
      collections: {
        description:
          "Lògica de gestió de productes per a un supermercat fictici.",
        fullDescription:
          "Projecte Java centrat en col·leccions, programació orientada a objectes i gestió d’excepcions per resoldre un cas de gestió de productes des del terminal.",
      },
      myanimelist: {
        description: "Client Java per consumir MyAnimeList amb OAuth2 i JWT.",
        fullDescription:
          "Aplicació Java orientada a consumir l’API oficial de MyAnimeList mitjançant OAuth2 i tokens JWT, amb focus en autenticació i consum d’APIs externes.",
      },
      pianoman: {
        description:
          "Pràctica interactiva d’esdeveniments de teclat, ratolí i tàctil amb TypeScript.",
        fullDescription:
          "Petit projecte experimental per provar esdeveniments de teclat, ratolí i tàctils en una interfície web interactiva.",
      },
    },
  },
  certificates: {
    title: "Certificats",
    credential: "credencial / pdf",
    download: "Descarregar PDF",
    filters: {
      all: "Tots",
      generalitat: "Generalitat",
      microsoft: "Microsoft",
      sapalomera: "Sa Palomera",
    },
  },
  contact: {
    title: "Contacte",
    role: "Desenvolupador web · IA i Big Data",
    location: "Espanya · disponibilitat presencial, híbrida o remota",
    slogan: "Codi obert, conversa directa.",
    availability: "Disponible per conversar",
    availabilityDetail:
      "Sobre desenvolupament web, producte, intel·ligència artificial i dades.",
  },
  footer: { copyright: "React + TypeScript." },
  seo: {
    title: "Eric Mejias Gamonal - Portfolio de Desenvolupador Web",
    description:
      "Portfolio d’Eric Mejias Gamonal, desenvolupador web interessat en IA i Big Data.",
  },
};

const english: TranslationDictionary = {
  languageName: "English",
  navigation: {
    home: "Home",
    experience: "Background",
    skills: "Technology",
    projects: "Projects",
    certificates: "Certificates",
    contact: "Contact",
    mainLabel: "Main navigation",
    menuLabel: "Open navigation menu",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    languageLabel: "Language",
    skipToContent: "Skip to main content",
    close: "Close",
  },
  hero: {
    role: "Web developer · AI & Big Data",
    description:
      "I am Eric Mejias Gamonal. I build web and software projects while studying artificial intelligence and Big Data. This site brings together personal and academic work linked to its original repositories.",
    location: "Spain",
    approach: "GitHub-first",
    stack: "React · Node · Python · Java",
    github: "GitHub",
    linkedin: "LinkedIn",
    blogger: "Blogger",
    cv: "CV",
    status: "available to explore",
    profileNow: "AI & Big Data specialization",
    profileNext: "Data Engineering?",
    profileInterests: ["web development", "artificial intelligence", "data"],
    profileStatus: "learning in public",
  },
  experience: {
    title: "Experience and education",
    openCv: "Open CV",
    professionalExperience: "Professional experience",
    education: "Education",
    facts: [
      "B and A2 driving licences",
      "Native Spanish and Catalan",
      "English B1-B2",
      "On-site, hybrid or remote availability",
    ],
    items: {
      seo: {
        role: "SEO Analyst",
        company: "Imàtica · Girona, Catalonia",
        detail:
          "Technical audits and search positioning optimisation with Google Search Console, GA4 and SEMrush.",
      },
      geniusx: {
        role: "Web Developer",
        company: "GeniusX · Cassà de la Selva",
        detail:
          "Developed features for client web applications and delivered functional work on schedule.",
      },
      erasmus: {
        role: "IT Technician",
        company: "Leankubatore · Erasmus+ · Catania, Italy",
        detail:
          "Provided technical support and system maintenance in an international, multicultural environment.",
      },
      school: {
        role: "IT Technician",
        company: "Escola Maria Cubí i Soler · Malgrat de Mar",
        detail:
          "Resolved hardware, software and network incidents across educational equipment.",
      },
    },
    studies: {
      ai: "Specialisation in Artificial Intelligence and Big Data",
      daW: "Higher Degree in Web Application Development",
      smr: "Intermediate Degree in Microcomputer Systems and Networks",
    },
  },
  skills: {
    title: "Technology and tools",
    categories: {
      frontend: {
        title: "Frontend",
        description: "Interfaces and browser experiences",
      },
      backend: {
        title: "Backend & APIs",
        description: "APIs, application logic and real time",
      },
      databases: {
        title: "Data",
        description: "Modelling, persistence and queries",
      },
      tools: { title: "Tools", description: "Tools for building and sharing" },
      learning: { title: "Learning", description: "New technologies" },
      seo: { title: "SEO", description: "Technical positioning and analytics" },
    },
  },
  projects: {
    title: "Projects",
    details: "View details",
    repository: "Repository",
    liveDemo: "Live demo",
    stack: "Stack",
    filters: {
      all: "All",
      fullstack: "Full Stack",
      frontend: "Frontend",
      backend: "Backend",
      education: "Notes",
    },
    copies: {
      rekko: {
        description:
          "A full-stack social network for discovering and recommending anime, with a complete published product experience.",
        fullDescription:
          "Main project: a social network for discovering, organising and recommending anime. It combines React, TypeScript and Tailwind on the frontend with Node.js, Express and a relational data layer. The project is published and brings together authentication, profiles, recommendations and a community-led experience.",
      },
      rekkophp: {
        description: "PHP prototype of an anime recommendation platform.",
        fullDescription:
          "Backend exploration of Rekko with PHP, JavaScript and AJAX. The repository works with authentication, client-server communication and the structure of a recommendation-focused web application.",
      },
      astronomy: {
        description:
          "Astronomy articles from Wikipedia’s REST API with persistence and pagination.",
        fullDescription:
          "PHP application that consumes Wikipedia’s REST API, stores content in MySQL and presents it with pagination. A practical exercise in API integration, persistence and data navigation.",
      },
      geoqueryai: {
        description: "Natural-language geographic queries visualised on a map.",
        fullDescription:
          "Application that interprets natural-language queries about geographic places and displays results on an interactive map. It connects web development directly with artificial intelligence.",
      },
      primero: {
        description:
          "Uno game implementation with TypeScript, Node.js and WebSockets.",
        fullDescription:
          "Real-time multiplayer game using WebSockets to synchronise rooms and matches. The project focuses on client-server communication and modelling complete game logic.",
      },
      "iabd-notes": {
        description:
          "Notes repository for Artificial Intelligence and Big Data.",
        fullDescription:
          "Academic repository for organising notes, exercises and study material from the Artificial Intelligence and Big Data specialisation.",
      },
      "webdev-notes": {
        description: "Notes and references repository for web development.",
        fullDescription:
          "Personal repository for collecting notes, references and study material related to web development.",
      },
      climbing: {
        description:
          "Climbing management application with Java, MySQL and JDBC.",
        fullDescription:
          "Collaborative climbing management project with MySQL persistence through JDBC. The CV also documents Maven, Docker and OAuth2 in the project environment.",
      },
      pokeapi: {
        description: "MySQL database built from PokeAPI data.",
        fullDescription:
          "Collaborative data integration project: it retrieves information from PokeAPI, models it in MySQL and enables queries over the dataset.",
      },
      collections: {
        description: "Product management logic for a fictional supermarket.",
        fullDescription:
          "Java project focused on collections, object-oriented programming and exception handling for a terminal-based product management case.",
      },
      myanimelist: {
        description: "Java client consuming MyAnimeList with OAuth2 and JWT.",
        fullDescription:
          "Java application consuming the official MyAnimeList API through OAuth2 and JWT tokens, focused on authentication and external API consumption.",
      },
      pianoman: {
        description:
          "Interactive TypeScript practice for keyboard, mouse and touch events.",
        fullDescription:
          "Small experimental project for testing keyboard, mouse and touch events in an interactive web interface.",
      },
    },
  },
  certificates: {
    title: "Certificates",
    credential: "credential / pdf",
    download: "Download PDF",
    filters: {
      all: "All",
      generalitat: "Generalitat",
      microsoft: "Microsoft",
      sapalomera: "Sa Palomera",
    },
  },
  contact: {
    title: "Contact",
    role: "Web developer · AI & Big Data",
    location: "Spain · on-site, hybrid or remote availability",
    slogan: "Open source, direct conversation.",
    availability: "Open to conversations",
    availabilityDetail:
      "About web development, product, artificial intelligence and data.",
  },
  footer: { copyright: "React + TypeScript." },
  seo: {
    title: "Eric Mejias Gamonal - Web Developer Portfolio",
    description:
      "Portfolio of Eric Mejias Gamonal, a web developer interested in AI and Big Data.",
  },
};

export const translations: Record<Language, TranslationDictionary> = {
  es: spanish,
  ca: catalan,
  en: english,
};
