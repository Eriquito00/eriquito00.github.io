import type { Language, TranslationDictionary } from './types';

const spanish: TranslationDictionary = {
  languageName: 'Español',
  navigation: { home: 'Inicio', experience: 'Trayectoria', skills: 'Tecnologías', projects: 'Proyectos', certificates: 'Certificados', contact: 'Contacto', mainLabel: 'Navegación principal', menuLabel: 'Abrir menú de navegación', themeToLight: 'Cambiar a modo claro', themeToDark: 'Cambiar a modo oscuro', languageLabel: 'Idioma', skipToContent: 'Saltar al contenido principal', close: 'Cerrar' },
  hero: { role: 'Desarrollador web junior · IA y Big Data', description: 'Soy Eric Mejias Gamonal. Desarrollo proyectos web mientras sigo aprendiendo el mundo de la inteligencia artificial y Big Data. Aqui podeis ver más sobre mis proyectos y mi experiencia.', location: 'España', approach: 'GitHub-first', stack: 'TypeScript · React · Node.js · Express · Python', github: 'GitHub', linkedin: 'LinkedIn', cv: 'CV', status: 'available to explore', profileNow: 'Especialización en IA y Big Data', profileNext: '¿Ingeniería de datos?', profileInterests: ['desarrollo web', 'inteligencia artificial', 'datos'], profileStatus: 'aprendiendo' },
  experience: {
    title: 'Experiencia y formación', openCv: 'Abrir CV', professionalExperience: 'Experiencia profesional', education: 'Formación', facts: ['Permisos B y A2', 'Español y catalán nativos', 'Inglés B1-B2', 'Disponibilidad presencial, híbrida o remota'],
    items: {
      seo: { role: 'Analista SEO', company: 'Imàtica · Girona, Cataluña, España', detail: 'Auditorías técnicas y optimización de posicionamiento con GSC, GA4, ADS y SEMrush.' },
      geniusx: { role: 'Desarrollador Web', company: 'GeniusX · Cassà de la Selva, Cataluña, España', detail: 'Desarrollo de funcionalidades para aplicaciones web de cliente y entrega de features funcionales con PHP, CodeIgniter, JavaScript y AJAX.' },
      erasmus: { role: 'Técnico Microinformático', company: 'Leankubatore · Erasmus+ · Catania, Sicilia, Italia', detail: 'Soporte técnico, mantenimiento de sistemas y gestión de contenido en WordPress.' },
      school: { role: 'Técnico Microinformático', company: 'Escola Maria Cubí i Soler · Malgrat de Mar, Cataluña, España', detail: 'Resolución de incidencias de hardware, software y redes en equipos educativos.' }
    },
    studies: { ai: 'Especialización en Inteligencia Artificial y Big Data', daW: 'Grado Superior en Desarrollo de Aplicaciones Web', smr: 'Grado Medio en Sistemas Microinformáticos y Redes' }
  },
  skills: {
    title: 'Tecnologías y herramientas', subtitle: 'Tecnologías, herramientas y áreas que uso mientras construyo para la web y sigo creciendo hacia la IA y los datos.',
    categories: {
      frontend: { title: 'Frontend', description: 'Interfaces y experiencias para navegador' }, backend: { title: 'Backend', description: 'APIs, lógica de aplicación y tiempo real' }, databases: { title: 'Datos', description: 'Modelado, persistencia y consultas' }, tools: { title: 'Tools', description: 'Herramientas para construir y compartir' }, 'ai-ml': { title: 'IA & Big Data', description: 'Exploración aplicada desde Python' }, seo: { title: 'SEO', description: 'Posicionamiento técnico y analítica' }
    }
  },
  projects: {
    title: 'Proyectos', subtitle: 'Una selección pequeña y verificable de proyectos web, backend, IA y formación.', details: 'Ver detalles', repository: 'Repositorio', liveDemo: 'Demo en vivo', stack: 'Stack', filters: { all: 'Todos', fullstack: 'Full Stack', frontend: 'Frontend', backend: 'Backend', education: 'Apuntes' },
    copies: {
      rekko: { description: 'Red social full stack para descubrir y recomendar anime, con una experiencia de producto completa y publicada.', fullDescription: 'Proyecto principal: una red social para descubrir, organizar y recomendar anime. Combina React, TypeScript y Tailwind en el frontend con Node.js, Express y una capa de datos relacional. El proyecto está publicado y reúne autenticación, perfiles, recomendaciones y una experiencia guiada por la comunidad.' },
      rekkophp: { description: 'Prototipo PHP de una plataforma de recomendaciones de anime.', fullDescription: 'Exploración backend de Rekko con PHP, JavaScript y AJAX. El repositorio trabaja autenticación, comunicación cliente-servidor y organización de una aplicación web orientada a recomendaciones.' },
      astronomy: { description: 'Artículos de astronomía desde la API REST de Wikipedia con persistencia y paginación.', fullDescription: 'Aplicación PHP que consume la API REST de Wikipedia, guarda el contenido en MySQL y lo presenta con paginación. Es un ejercicio práctico de integración de APIs, persistencia y navegación de datos.' },
      geoqueryai: { description: 'Consultas geográficas en lenguaje natural visualizadas sobre un mapa.', fullDescription: 'Aplicación que interpreta consultas en lenguaje natural sobre lugares geográficos y muestra los resultados en un mapa interactivo. Es uno de los proyectos que conecta de forma más directa el desarrollo web con la inteligencia artificial.' },
      primero: { description: 'Implementación del juego Uno con TypeScript, Node.js y WebSockets.', fullDescription: 'Juego multijugador en tiempo real que utiliza WebSockets para sincronizar partidas y salas. El proyecto pone el foco en la comunicación cliente-servidor y en modelar la lógica de un juego completo.' },
      'iabd-notes': { description: 'Repositorio de apuntes de Inteligencia Artificial y Big Data.', fullDescription: 'Repositorio académico para organizar apuntes, ejercicios y material de estudio de la especialización en Inteligencia Artificial y Big Data.' },
      'webdev-notes': { description: 'Repositorio de apuntes y referencias de desarrollo web.', fullDescription: 'Repositorio personal para reunir apuntes, referencias y material de consulta relacionado con el desarrollo web.' },
      climbing: { description: 'Aplicación de gestión de escalada con Java, MySQL y JDBC.', fullDescription: 'Proyecto colaborativo de gestión de escalada con persistencia en MySQL mediante JDBC. El CV también recoge el uso de Maven, Docker y OAuth2 en el entorno técnico del proyecto.' },
      pokeapi: { description: 'Base de datos MySQL construida a partir de datos de PokeAPI.', fullDescription: 'Proyecto colaborativo de integración y gestión de datos: obtiene información de PokeAPI, la modela en MySQL y permite trabajar con consultas sobre el conjunto de datos.' },
      collections: { description: 'Lógica de gestión de productos para un supermercado ficticio.', fullDescription: 'Proyecto Java centrado en colecciones, programación orientada a objetos y manejo de excepciones para resolver un caso de gestión de productos desde terminal.' },
      myanimelist: { description: 'Cliente Java para consumir MyAnimeList con OAuth2 y JWT.', fullDescription: 'Aplicación Java orientada a consumir la API oficial de MyAnimeList mediante OAuth2 y tokens JWT, con foco en autenticación y consumo de APIs externas.' },
      pianoman: { description: 'Práctica interactiva de eventos de teclado, ratón y táctil en TypeScript.', fullDescription: 'Pequeño proyecto experimental para probar eventos de teclado, ratón y touch en una interfaz web interactiva.' }
    }
  },
  certificates: { title: 'Certificados', subtitle: 'Formación que acompaña el código.', credential: 'credential / pdf', download: 'Descargar PDF', filters: { all: 'Todos', generalitat: 'Generalitat', microsoft: 'Microsoft' } },
  contact: { title: 'Contacto', role: 'Desarrollador web junior · IA y Big Data', location: 'España · disponible presencial, híbrido o remoto', slogan: 'Código abierto, conversación directa.', availability: 'Disponible para conversar', availabilityDetail: 'Sobre desarrollo web, producto, inteligencia artificial y datos.' },
  footer: { copyright: 'React + TypeScript.' },
  seo: { title: 'Eric Mejias Gamonal - Portfolio Desarrollador Web', description: 'Portfolio de Eric Mejias Gamonal, desarrollador web junior interesado en IA y Big Data.' }
};

const catalan: TranslationDictionary = {
  languageName: 'Català',
  navigation: { home: 'Inici', experience: 'Trajectòria', skills: 'Tecnologies', projects: 'Projectes', certificates: 'Certificats', contact: 'Contacte', mainLabel: 'Navegació principal', menuLabel: 'Obrir menú de navegació', themeToLight: 'Canviar al mode clar', themeToDark: 'Canviar al mode fosc', languageLabel: 'Idioma', skipToContent: 'Saltar al contingut principal', close: 'Tancar' },
  hero: { role: 'Desenvolupador web junior · IA i Big Data', description: 'Soc Eric Mejias Gamonal. Desenvolupo projectes web i de programari mentre continuo formant-me en intel·ligència artificial i Big Data. Aquest lloc reuneix treball personal i acadèmic enllaçat als repositoris originals.', location: 'Espanya', approach: 'GitHub-first', stack: 'React · Node · Python · Java', github: 'GitHub', linkedin: 'LinkedIn', cv: 'CV', status: 'available to explore', profileNow: 'Especialització en IA i Big Data', profileNext: 'Enginyeria de dades?', profileInterests: ['desenvolupament web', 'intel·ligència artificial', 'dades'], profileStatus: 'aprenent en públic' },
  experience: {
    title: 'Experiència i formació', openCv: 'Obrir CV', professionalExperience: 'Experiència professional', education: 'Formació', facts: ['Permisos B i A2', 'Espanyol i català nadius', 'Anglès B1-B2', 'Disponibilitat presencial, híbrida o remota'],
    items: {
      seo: { role: 'Analista SEO', company: 'Imàtica · Girona, Catalunya', detail: 'Auditories tècniques i optimització del posicionament amb Google Search Console, GA4 i SEMrush.' },
      geniusx: { role: 'Desenvolupador Web', company: 'GeniusX · Cassà de la Selva', detail: 'Desenvolupament de funcionalitats per a aplicacions web de client i lliurament de features funcionals.' },
      erasmus: { role: 'Tècnic Microinformàtic', company: 'Leankubatore · Erasmus+ · Catània, Itàlia', detail: 'Suport tècnic i manteniment de sistemes en un entorn internacional i multicultural.' },
      school: { role: 'Tècnic Microinformàtic', company: 'Escola Maria Cubí i Soler · Malgrat de Mar', detail: 'Resolució d’incidències de maquinari, programari i xarxes en equips educatius.' }
    },
    studies: { ai: 'Especialització en Intel·ligència Artificial i Big Data', daW: 'Grau Superior en Desenvolupament d’Aplicacions Web', smr: 'Grau Mitjà en Sistemes Microinformàtics i Xarxes' }
  },
  skills: {
    title: 'Tecnologies i eines', subtitle: 'Un mapa pràctic de les tecnologies, eines i àrees que faig servir mentre construeixo per a la web i continuo creixent cap a la IA i les dades.',
    categories: {
      frontend: { title: 'Frontend', description: 'Interfícies i experiències per al navegador' }, backend: { title: 'Backend & APIs', description: 'APIs, lògica d’aplicació i temps real' }, databases: { title: 'Dades', description: 'Modelatge, persistència i consultes' }, tools: { title: 'Eines', description: 'Eines per construir i compartir' }, 'ai-ml': { title: 'IA i Big Data', description: 'Exploració aplicada des de Python' }, seo: { title: 'SEO', description: 'Posicionament tècnic i analítica' }
    }
  },
  projects: {
    title: 'Projectes', subtitle: 'Una selecció petita i verificable de projectes web, backend, IA i formació.', details: 'Veure detalls', repository: 'Repositori', liveDemo: 'Demo en directe', stack: 'Stack', filters: { all: 'Tots', fullstack: 'Full Stack', frontend: 'Frontend', backend: 'Backend', education: 'Apunts' },
    copies: {
      rekko: { description: 'Xarxa social full stack per descobrir i recomanar anime, amb una experiència de producte completa i publicada.', fullDescription: 'Projecte principal: una xarxa social per descobrir, organitzar i recomanar anime. Combina React, TypeScript i Tailwind al frontend amb Node.js, Express i una capa de dades relacional. El projecte està publicat i reuneix autenticació, perfils, recomanacions i una experiència guiada per la comunitat.' },
      rekkophp: { description: 'Prototip PHP d’una plataforma de recomanacions d’anime.', fullDescription: 'Exploració backend de Rekko amb PHP, JavaScript i AJAX. El repositori treballa l’autenticació, la comunicació client-servidor i l’estructura d’una aplicació web orientada a recomanacions.' },
      astronomy: { description: 'Articles d’astronomia des de l’API REST de Wikipedia amb persistència i paginació.', fullDescription: 'Aplicació PHP que consumeix l’API REST de Wikipedia, desa el contingut a MySQL i el presenta amb paginació. És un exercici pràctic d’integració d’APIs, persistència i navegació de dades.' },
      geoqueryai: { description: 'Consultes geogràfiques en llenguatge natural visualitzades sobre un mapa.', fullDescription: 'Aplicació que interpreta consultes en llenguatge natural sobre llocs geogràfics i mostra els resultats en un mapa interactiu. És un dels projectes que connecta més directament el desenvolupament web amb la intel·ligència artificial.' },
      primero: { description: 'Implementació del joc Uno amb TypeScript, Node.js i WebSockets.', fullDescription: 'Joc multijugador en temps real que utilitza WebSockets per sincronitzar partides i sales. El projecte se centra en la comunicació client-servidor i en modelar la lògica d’un joc complet.' },
      'iabd-notes': { description: 'Repositori d’apunts d’Intel·ligència Artificial i Big Data.', fullDescription: 'Repositori acadèmic per organitzar apunts, exercicis i material d’estudi de l’especialització en Intel·ligència Artificial i Big Data.' },
      'webdev-notes': { description: 'Repositori d’apunts i referències de desenvolupament web.', fullDescription: 'Repositori personal per reunir apunts, referències i material de consulta relacionat amb el desenvolupament web.' },
      climbing: { description: 'Aplicació de gestió d’escalada amb Java, MySQL i JDBC.', fullDescription: 'Projecte col·laboratiu de gestió d’escalada amb persistència a MySQL mitjançant JDBC. El CV també recull l’ús de Maven, Docker i OAuth2 en l’entorn tècnic del projecte.' },
      pokeapi: { description: 'Base de dades MySQL construïda a partir de dades de PokeAPI.', fullDescription: 'Projecte col·laboratiu d’integració i gestió de dades: obté informació de PokeAPI, la modela a MySQL i permet treballar amb consultes sobre el conjunt de dades.' },
      collections: { description: 'Lògica de gestió de productes per a un supermercat fictici.', fullDescription: 'Projecte Java centrat en col·leccions, programació orientada a objectes i gestió d’excepcions per resoldre un cas de gestió de productes des del terminal.' },
      myanimelist: { description: 'Client Java per consumir MyAnimeList amb OAuth2 i JWT.', fullDescription: 'Aplicació Java orientada a consumir l’API oficial de MyAnimeList mitjançant OAuth2 i tokens JWT, amb focus en autenticació i consum d’APIs externes.' },
      pianoman: { description: 'Pràctica interactiva d’esdeveniments de teclat, ratolí i tàctil amb TypeScript.', fullDescription: 'Petit projecte experimental per provar esdeveniments de teclat, ratolí i tàctils en una interfície web interactiva.' }
    }
  },
  certificates: { title: 'Certificats', subtitle: 'Formació que acompanya el codi.', credential: 'credencial / pdf', download: 'Descarregar PDF', filters: { all: 'Tots', generalitat: 'Generalitat', microsoft: 'Microsoft' } },
  contact: { title: 'Contacte', role: 'Desenvolupador web junior · IA i Big Data', location: 'Espanya · disponibilitat presencial, híbrida o remota', slogan: 'Codi obert, conversa directa.', availability: 'Disponible per conversar', availabilityDetail: 'Sobre desenvolupament web, producte, intel·ligència artificial i dades.' },
  footer: { copyright: 'React + TypeScript.' },
  seo: { title: 'Eric Mejias Gamonal - Portfolio de Desenvolupador Web', description: 'Portfolio d’Eric Mejias Gamonal, desenvolupador web junior interessat en IA i Big Data.' }
};

const english: TranslationDictionary = {
  languageName: 'English',
  navigation: { home: 'Home', experience: 'Background', skills: 'Technology', projects: 'Projects', certificates: 'Certificates', contact: 'Contact', mainLabel: 'Main navigation', menuLabel: 'Open navigation menu', themeToLight: 'Switch to light mode', themeToDark: 'Switch to dark mode', languageLabel: 'Language', skipToContent: 'Skip to main content', close: 'Close' },
  hero: { role: 'Junior web developer · AI & Big Data', description: 'I am Eric Mejias Gamonal. I build web and software projects while studying artificial intelligence and Big Data. This site brings together personal and academic work linked to its original repositories.', location: 'Spain', approach: 'GitHub-first', stack: 'React · Node · Python · Java', github: 'GitHub', linkedin: 'LinkedIn', cv: 'CV', status: 'available to explore', profileNow: 'AI & Big Data specialization', profileNext: 'Data Engineering?', profileInterests: ['web development', 'artificial intelligence', 'data'], profileStatus: 'learning in public' },
  experience: {
    title: 'Experience and education', openCv: 'Open CV', professionalExperience: 'Professional experience', education: 'Education', facts: ['B and A2 driving licences', 'Native Spanish and Catalan', 'English B1-B2', 'On-site, hybrid or remote availability'],
    items: {
      seo: { role: 'SEO Analyst', company: 'Imàtica · Girona, Catalonia', detail: 'Technical audits and search positioning optimisation with Google Search Console, GA4 and SEMrush.' },
      geniusx: { role: 'Web Developer', company: 'GeniusX · Cassà de la Selva', detail: 'Developed features for client web applications and delivered functional work on schedule.' },
      erasmus: { role: 'IT Technician', company: 'Leankubatore · Erasmus+ · Catania, Italy', detail: 'Provided technical support and system maintenance in an international, multicultural environment.' },
      school: { role: 'IT Technician', company: 'Escola Maria Cubí i Soler · Malgrat de Mar', detail: 'Resolved hardware, software and network incidents across educational equipment.' }
    },
    studies: { ai: 'Specialisation in Artificial Intelligence and Big Data', daW: 'Higher Degree in Web Application Development', smr: 'Intermediate Degree in Microcomputer Systems and Networks' }
  },
  skills: {
    title: 'Technology and tools', subtitle: 'A practical map of the technologies, tools and areas I use while building for the web and growing towards AI and data.',
    categories: {
      frontend: { title: 'Frontend', description: 'Interfaces and browser experiences' }, backend: { title: 'Backend & APIs', description: 'APIs, application logic and real time' }, databases: { title: 'Data', description: 'Modelling, persistence and queries' }, tools: { title: 'Tools', description: 'Tools for building and sharing' }, 'ai-ml': { title: 'AI & Big Data', description: 'Applied exploration with Python' }, seo: { title: 'SEO', description: 'Technical positioning and analytics' }
    }
  },
  projects: {
    title: 'Projects', subtitle: 'A small, verifiable selection of web, backend, AI and learning projects.', details: 'View details', repository: 'Repository', liveDemo: 'Live demo', stack: 'Stack', filters: { all: 'All', fullstack: 'Full Stack', frontend: 'Frontend', backend: 'Backend', education: 'Notes' },
    copies: {
      rekko: { description: 'A full-stack social network for discovering and recommending anime, with a complete published product experience.', fullDescription: 'Main project: a social network for discovering, organising and recommending anime. It combines React, TypeScript and Tailwind on the frontend with Node.js, Express and a relational data layer. The project is published and brings together authentication, profiles, recommendations and a community-led experience.' },
      rekkophp: { description: 'PHP prototype of an anime recommendation platform.', fullDescription: 'Backend exploration of Rekko with PHP, JavaScript and AJAX. The repository works with authentication, client-server communication and the structure of a recommendation-focused web application.' },
      astronomy: { description: 'Astronomy articles from Wikipedia’s REST API with persistence and pagination.', fullDescription: 'PHP application that consumes Wikipedia’s REST API, stores content in MySQL and presents it with pagination. A practical exercise in API integration, persistence and data navigation.' },
      geoqueryai: { description: 'Natural-language geographic queries visualised on a map.', fullDescription: 'Application that interprets natural-language queries about geographic places and displays results on an interactive map. It connects web development directly with artificial intelligence.' },
      primero: { description: 'Uno game implementation with TypeScript, Node.js and WebSockets.', fullDescription: 'Real-time multiplayer game using WebSockets to synchronise rooms and matches. The project focuses on client-server communication and modelling complete game logic.' },
      'iabd-notes': { description: 'Notes repository for Artificial Intelligence and Big Data.', fullDescription: 'Academic repository for organising notes, exercises and study material from the Artificial Intelligence and Big Data specialisation.' },
      'webdev-notes': { description: 'Notes and references repository for web development.', fullDescription: 'Personal repository for collecting notes, references and study material related to web development.' },
      climbing: { description: 'Climbing management application with Java, MySQL and JDBC.', fullDescription: 'Collaborative climbing management project with MySQL persistence through JDBC. The CV also documents Maven, Docker and OAuth2 in the project environment.' },
      pokeapi: { description: 'MySQL database built from PokeAPI data.', fullDescription: 'Collaborative data integration project: it retrieves information from PokeAPI, models it in MySQL and enables queries over the dataset.' },
      collections: { description: 'Product management logic for a fictional supermarket.', fullDescription: 'Java project focused on collections, object-oriented programming and exception handling for a terminal-based product management case.' },
      myanimelist: { description: 'Java client consuming MyAnimeList with OAuth2 and JWT.', fullDescription: 'Java application consuming the official MyAnimeList API through OAuth2 and JWT tokens, focused on authentication and external API consumption.' },
      pianoman: { description: 'Interactive TypeScript practice for keyboard, mouse and touch events.', fullDescription: 'Small experimental project for testing keyboard, mouse and touch events in an interactive web interface.' }
    }
  },
  certificates: { title: 'Certificates', subtitle: 'Training that supports the code.', credential: 'credential / pdf', download: 'Download PDF', filters: { all: 'All', generalitat: 'Generalitat', microsoft: 'Microsoft' } },
  contact: { title: 'Contact', role: 'Junior web developer · AI & Big Data', location: 'Spain · on-site, hybrid or remote availability', slogan: 'Open source, direct conversation.', availability: 'Open to conversations', availabilityDetail: 'About web development, product, artificial intelligence and data.' },
  footer: { copyright: 'React + TypeScript.' },
  seo: { title: 'Eric Mejias Gamonal - Web Developer Portfolio', description: 'Portfolio of Eric Mejias Gamonal, a junior web developer interested in AI and Big Data.' }
};

export const translations: Record<Language, TranslationDictionary> = { es: spanish, ca: catalan, en: english };
