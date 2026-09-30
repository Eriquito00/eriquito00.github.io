import type { SkillCategory } from '../types/portfolio';
import { useLanguage } from '../i18n/useLanguage';

const Skills = () => {
  const { t } = useLanguage();
  const skillCategories: SkillCategory[] = [
    { id: 'frontend', title: 'Frontend', icon: 'UI', description: 'Interfaces y experiencias para navegador', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Astro', 'Vite'] },
    { id: 'backend', title: 'Backend & APIs', icon: 'API', description: 'APIs, lógica de aplicación y tiempo real', skills: ['Node.js', 'Express', 'PHP', 'Python', 'Java', 'REST APIs', 'WebSockets'] },
    { id: 'databases', title: 'Datos', icon: 'DB', description: 'Modelado, persistencia y consultas', skills: ['MySQL', 'MongoDB', 'SQLite', 'Firebase', 'JDBC', 'Data modelling'] },
    { id: 'tools', title: 'Tools', icon: 'TOOLS', description: 'Herramientas para construir y compartir', skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'npm', 'Docker', 'Bash', 'Postman', 'Figma', 'Maven', 'Vercel'] },
    { id: 'ai-ml', title: 'IA & Big Data', icon: 'IA', description: 'Exploración aplicada desde Python', skills: ['Python', 'Big Data', 'Algorithms', 'Data structures'] },
    { id: 'seo', title: 'SEO', icon: 'SEO', description: 'Posicionamiento técnico y analítica', skills: ['SEO', 'GSC', 'GA4', 'SEMrush', 'Auditorías técnicas', 'Rendimiento web'] },
  ];

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="skills-container">
        <div className="skills-header">
          <h2 id="skills-title" className="skills-title">{t.skills.title}</h2>
          <p className="skills-subtitle">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="skill-category"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="category-header">
                <div className="category-icon">
                  <span>{category.icon}</span>
                </div>
                <h3 className="category-title">{t.skills.categories[category.id].title}</h3>
                <p className="category-description">{t.skills.categories[category.id].description}</p>
              </div>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;