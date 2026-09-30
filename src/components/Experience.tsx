import { useLanguage } from '../i18n/useLanguage';
import type { EducationItem, ExperienceItem } from '../types/portfolio';

const experience: ExperienceItem[] = [
  { id: 'seo', period: 'Abr 2026 - Jun 2026' },
  { id: 'geniusx', period: 'Oct 2025 - Nov 2025' },
  { id: 'erasmus', period: 'Abr 2024 - May 2024' },
  { id: 'school', period: 'Oct 2023 - Feb 2024' },
];

const education: EducationItem[] = [
  { id: 'ai', period: '2026 - 2027' },
  { id: 'daW', period: '2024 - 2026' },
  { id: 'smr', period: '2022 - 2024' },
];

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="section-heading-row">
        <h2 id="experience-title" className="section-title">{t.experience.title}</h2>
        <a className="text-link" href="/content/ATS_CV_Eric_Mejias.pdf" target="_blank" rel="noopener noreferrer">{t.experience.openCv} <span>↗</span></a>
      </div>
      <div className="experience-layout">
        <div className="timeline" aria-label={t.experience.professionalExperience}>
          {experience.map((item) => {
            const copy = t.experience.items[item.id];
            return (
              <article className="timeline-item" key={`${item.id}-${item.period}`}>
                <span className="timeline-period">{item.period}</span>
                <div><h3>{copy.role}</h3><p className="timeline-company">{copy.company}</p><p>{copy.detail}</p></div>
              </article>
            );
          })}
        </div>
        <div className="education-list" aria-label={t.experience.education}>
          <p className="subsection-label">{t.experience.education}</p>
          {education.map((item) => (
            <article className="education-item" key={item.id}>
              <span>{item.period}</span>
              <div><h3>{t.experience.studies[item.id]}</h3><p>Sa Palomera · Blanes</p></div>
            </article>
          ))}
          <div className="profile-facts">{t.experience.facts.map((fact) => <span key={fact}>{fact}</span>)}</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
