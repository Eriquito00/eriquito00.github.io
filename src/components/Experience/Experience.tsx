import { useLanguage } from '../../i18n/useLanguage';
import { experience, education } from './experienceData';
import { TimelineItem } from './TimelineItem';
import { EducationItem } from './EducationItem';
import type { ExperienceItem, EducationItem as EducationItemType } from '../../types/portfolio';
import './Experience.css';

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="section-heading-row">
        <h2 id="experience-title" className="section-title">{t.experience.title}</h2>
        <a
          className="text-link"
          href="/content/ATS_CV_Eric_Mejias.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.experience.openCv} <span>↗</span>
        </a>
      </div>
      <div className="experience-layout">
        <div className="timeline" aria-label={t.experience.professionalExperience}>
          {experience.map((item: ExperienceItem) => (
            <TimelineItem key={`${item.id}-${item.period}`} item={item} />
          ))}
        </div>
        <div className="education-list" aria-label={t.experience.education}>
          <p className="subsection-label">{t.experience.education}</p>
          {education.map((item: EducationItemType) => (
            <EducationItem key={item.id} item={item} />
          ))}
          <div className="profile-facts">
            {t.experience.facts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;