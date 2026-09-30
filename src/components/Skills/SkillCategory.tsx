import { useLanguage } from '../../i18n/useLanguage';
import type { SkillCategory } from '../../types/portfolio';

interface SkillCategoryProps {
  category: SkillCategory;
}

export const SkillCategory = ({ category }: SkillCategoryProps) => {
  const { t } = useLanguage();

  return (
    <div className="skill-category" data-aos="fade-up" data-aos-delay="100">
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
  );
};