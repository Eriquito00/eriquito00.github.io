import { useState, type KeyboardEvent } from 'react';
import type { Project, ProjectCategory } from '../types/portfolio';
import { useLanguage } from '../i18n/useLanguage';

const projects: Project[] = [
  {
    id: 'rekko', name: 'Rekko', featured: true, category: 'fullstack', year: '2024',
    description: 'Red social full stack para descubrir y recomendar anime, con una experiencia de producto completa y publicada.',
    fullDescription: 'Proyecto principal: una red social para descubrir, organizar y recomendar anime. Combina React, TypeScript y Tailwind en el frontend con Node.js, Express y una capa de datos relacional. El proyecto está publicado y reúne autenticación, perfiles, recomendaciones y una experiencia guiada por la comunidad.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Supabase'], githubUrl: 'https://github.com/Rekko-Lists', repoUrl: 'https://github.com/Eriquito00/Rekko', liveUrl: 'https://rekko-lists.web.app',
  },
  {
    id: 'rekkophp', name: 'RekkoPHP', category: 'backend', year: '2023',
    description: 'Prototipo PHP de una plataforma de recomendaciones de anime.',
    fullDescription: 'Exploración backend de Rekko con PHP, JavaScript y AJAX. El repositorio trabaja autenticación, comunicación cliente-servidor y organización de una aplicación web orientada a recomendaciones.',
    tags: ['PHP', 'JavaScript', 'AJAX', 'OAuth2', 'JWT'], githubUrl: 'https://github.com/Eriquito00/RekkoPHP', repoUrl: 'https://github.com/Eriquito00/RekkoPHP',
  },
  {
    id: 'astronomy', name: 'AstronomyArticlesPHP', category: 'backend', year: '2023',
    description: 'Artículos de astronomía desde la API REST de Wikipedia con persistencia y paginación.',
    fullDescription: 'Aplicación PHP que consume la API REST de Wikipedia, guarda el contenido en MySQL y lo presenta con paginación. Es un ejercicio práctico de integración de APIs, persistencia y navegación de datos.',
    tags: ['PHP', 'MySQL', 'REST API', 'Pagination'], githubUrl: 'https://github.com/Eriquito00/AstronomyArticlesPHP', repoUrl: 'https://github.com/Eriquito00/AstronomyArticlesPHP',
  },
  {
    id: 'geoqueryai', name: 'GeoQueryAI', category: 'frontend', year: '2024',
    description: 'Consultas geográficas en lenguaje natural visualizadas sobre un mapa.',
    fullDescription: 'Aplicación que interpreta consultas en lenguaje natural sobre lugares geográficos y muestra los resultados en un mapa interactivo. Es uno de los proyectos que conecta de forma más directa el desarrollo web con la inteligencia artificial.',
    tags: ['TypeScript', 'AI', 'Maps', 'NLP'], githubUrl: 'https://github.com/Eriquito00/GeoQueryAI', repoUrl: 'https://github.com/Eriquito00/GeoQueryAI',
  },
  {
    id: 'primero', name: 'Primero', category: 'frontend', year: '2024',
    description: 'Implementación del juego Uno con TypeScript, Node.js y WebSockets.',
    fullDescription: 'Juego multijugador en tiempo real que utiliza WebSockets para sincronizar partidas y salas. El proyecto pone el foco en la comunicación cliente-servidor y en modelar la lógica de un juego completo.',
    tags: ['TypeScript', 'Node.js', 'WebSockets'], githubUrl: 'https://github.com/Eriquito00/Primero', repoUrl: 'https://github.com/Eriquito00/Primero',
  },
  {
    id: 'iabd-notes', name: 'IABD-Notes', category: 'education', year: '2024',
    description: 'Repositorio de apuntes de Inteligencia Artificial y Big Data.',
    fullDescription: 'Repositorio académico para organizar apuntes, ejercicios y material de estudio de la especialización en Inteligencia Artificial y Big Data.',
    tags: ['AI', 'Big Data', 'Notes'], githubUrl: 'https://github.com/Eriquito00/IABD-Notes', repoUrl: 'https://github.com/Eriquito00/IABD-Notes',
  },
  {
    id: 'webdev-notes', name: 'Webdev-Notes', category: 'education', year: '2024',
    description: 'Repositorio de apuntes y referencias de desarrollo web.',
    fullDescription: 'Repositorio personal para reunir apuntes, referencias y material de consulta relacionado con el desarrollo web.',
    tags: ['Web development', 'Notes', 'Learning'], githubUrl: 'https://github.com/Eriquito00/Webdev-Notes', repoUrl: 'https://github.com/Eriquito00/Webdev-Notes',
  },
  {
    id: 'climbing', name: 'ProyectoAplicacionEscalada', category: 'backend', year: '2023',
    description: 'Aplicación de gestión de escalada con Java, MySQL y JDBC.',
    fullDescription: 'Proyecto colaborativo de gestión de escalada con persistencia en MySQL mediante JDBC. El CV también recoge el uso de Maven, Docker y OAuth2 en el entorno técnico del proyecto.',
    tags: ['Java', 'MySQL', 'JDBC', 'Docker', 'OAuth2'], githubUrl: 'https://github.com/Eriquito00/ProyectoAplicacionEscalada', repoUrl: 'https://github.com/Eriquito00/ProyectoAplicacionEscalada',
  },
  {
    id: 'pokeapi', name: 'Atacando_PokeAPI', category: 'backend', year: '2023',
    description: 'Base de datos MySQL construida a partir de datos de PokeAPI.',
    fullDescription: 'Proyecto colaborativo de integración y gestión de datos: obtiene información de PokeAPI, la modela en MySQL y permite trabajar con consultas sobre el conjunto de datos.',
    tags: ['MySQL', 'Java', 'PokeAPI', 'Data'], githubUrl: 'https://github.com/Eriquito00/Atacando_PokeAPI', repoUrl: 'https://github.com/Eriquito00/Atacando_PokeAPI',
  },
  {
    id: 'collections', name: 'Collections_Exceptions_JAVA', category: 'backend', year: '2023',
    description: 'Lógica de gestión de productos para un supermercado ficticio.',
    fullDescription: 'Proyecto Java centrado en colecciones, programación orientada a objetos y manejo de excepciones para resolver un caso de gestión de productos desde terminal.',
    tags: ['Java', 'OOP', 'Collections', 'Exceptions'], githubUrl: 'https://github.com/Eriquito00/Collections_Exceptions_JAVA', repoUrl: 'https://github.com/Eriquito00/Collections_Exceptions_JAVA',
  },
  {
    id: 'myanimelist', name: 'WysperOtaku_MyAnimeListAPIConsuming', category: 'backend', year: '2024',
    description: 'Cliente Java para consumir MyAnimeList con OAuth2 y JWT.',
    fullDescription: 'Aplicación Java orientada a consumir la API oficial de MyAnimeList mediante OAuth2 y tokens JWT, con foco en autenticación y consumo de APIs externas.',
    tags: ['Java', 'OAuth2', 'JWT', 'REST'], githubUrl: 'https://github.com/WysperOtaku/MyAnimeListAPIConsuming', repoUrl: 'https://github.com/WysperOtaku/MyAnimeListAPIConsuming',
  },
  {
    id: 'pianoman', name: 'PianoMan', category: 'frontend', year: '2023',
    description: 'Práctica interactiva de eventos de teclado, ratón y táctil en TypeScript.',
    fullDescription: 'Pequeño proyecto experimental para probar eventos de teclado, ratón y touch en una interfaz web interactiva.',
    tags: ['TypeScript', 'Events', 'Interactive'], githubUrl: 'https://github.com/Eriquito00/PianoMan', repoUrl: 'https://github.com/Eriquito00/PianoMan',
  },
];

const categories: Array<{ id: 'all' | ProjectCategory; label: string }> = [
  { id: 'all', label: 'Todos' }, { id: 'fullstack', label: 'Full Stack' }, { id: 'frontend', label: 'Frontend' }, { id: 'backend', label: 'Backend' }, { id: 'education', label: 'Apuntes' },
];

interface ProjectsProps {
  setActiveProject: (project: Project) => void;
}

const Projects = ({ setActiveProject }: ProjectsProps) => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');
  const filteredProjects = projects.filter((project) => activeFilter === 'all' || project.category === activeFilter);

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="projects-container">
        <div className="projects-header">
          <div className="section-heading-row">
            <h2 id="projects-title" className="section-title">{t.projects.title}</h2>
          </div>
          <p className="projects-subtitle">{t.projects.subtitle}</p>
          <div className="projects-filters">{categories.map((category) => <button key={category.id} onClick={() => setActiveFilter(category.id)} className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}>{t.projects.filters[category.id]} <span className="filter-count">({category.id === 'all' ? projects.length : projects.filter((project) => project.category === category.id).length})</span></button>)}</div>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className={`project-card ${project.featured ? 'project-card-featured' : ''}`} onClick={() => setActiveProject(project)} role="button" tabIndex={0} onKeyDown={(event: KeyboardEvent<HTMLElement>) => (event.key === 'Enter' || event.key === ' ') && setActiveProject(project)}>
              <div className="project-card-top"><span>{t.projects.filters[project.category]}</span><span>{project.year}</span></div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{t.projects.copies[project.id].description}</p>
              <div className="project-tags">{project.tags.slice(0, 4).map((tag) => <span key={tag} className="project-tag">{tag}</span>)}</div>
              <div className="project-footer"><span className="project-open">{t.projects.details} <span>↗</span></span><div className="project-links"><a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${t.projects.repository}: ${project.name}`} onClick={(event) => event.stopPropagation()}>⌘</a>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${t.projects.liveDemo}: ${project.name}`} onClick={(event) => event.stopPropagation()}>↗</a>}</div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
