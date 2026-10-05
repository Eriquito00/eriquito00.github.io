import { useLanguage } from '../../i18n/useLanguage';
import { skillCategories } from './skillsData';
import { SkillCategory } from './SkillCategory';
import type { SkillCategory as SkillCategoryType } from '../../types/portfolio';
import './Skills.css';

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="skills-container">
        <div className="skills-header">
          <h2 id="skills-title" className="skills-title">{t.skills.title}</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category: SkillCategoryType) => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;