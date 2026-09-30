import { useEffect } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import type { Project } from '../../types/portfolio';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { t } = useLanguage();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="project-modal-overlay visible"
      onClick={(event) => event.target === event.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="project-modal visible">
        <button onClick={onClose} className="modal-close" aria-label={t.navigation.close}>
          ×
        </button>
        <div className="modal-content">
          <p className="eyebrow">{t.projects.filters[project.category]} / {project.year}</p>
          <h2 id="modal-title" className="modal-title">{project.name}</h2>
          <p className="modal-description">{t.projects.copies[project.id].fullDescription}</p>
          <div className="modal-section">
            <h3 className="modal-section-title">{t.projects.stack}</h3>
            <div className="tech-stack">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="modal-links">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="modal-link">
              {t.projects.repository} ↗
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-link">
                {t.projects.liveDemo} ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;