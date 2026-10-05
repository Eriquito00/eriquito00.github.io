import { useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import { projects, projectCategories } from './projectsData';
import { ProjectCard } from './ProjectCard';
import type { Project, ProjectCategory } from '../../types/portfolio';
import './Projects.css';

interface ProjectsProps {
  setActiveProject: (project: Project) => void;
}

export const Projects = ({ setActiveProject }: ProjectsProps) => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');
  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="projects-container">
        <div className="projects-header">
          <div className="section-heading-row">
            <h2 id="projects-title" className="section-title">{t.projects.title}</h2>
          </div>
          <div className="projects-filters" aria-label="Filtrar proyectos">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}
                aria-pressed={activeFilter === category.id}
              >
                {t.projects.filters[category.id]}
                <span className="filter-count">
                  {category.id === 'all'
                    ? projects.length
                    : projects.filter((p) => p.category === category.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;