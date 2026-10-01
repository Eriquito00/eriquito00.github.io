import type { KeyboardEvent } from 'react';
import type { Project } from '../../types/portfolio';
import { useLanguage } from '../../i18n/useLanguage';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  const { t } = useLanguage();

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen(project);
    }
  };

  return (
    <article
      className={`project-card ${project.featured ? 'project-card-featured' : ''}`}
      onClick={() => onOpen(project)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="project-card-top">
        <span>{t.projects.filters[project.category]}</span>
        <span>{project.year}</span>
      </div>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-description">{t.projects.copies[project.id].description}</p>
      <div className="project-tags">
        {project.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>
      <div className="project-footer">
        <span className="project-open">{t.projects.details} <span>↗</span></span>
        <div className="project-links">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`${t.projects.repository}: ${project.name}`}
            onClick={(event) => event.stopPropagation()}
          >
            ⌘
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`${t.projects.liveDemo}: ${project.name}`}
              onClick={(event) => event.stopPropagation()}
            >
              ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
};