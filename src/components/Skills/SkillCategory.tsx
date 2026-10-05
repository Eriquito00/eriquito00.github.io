import { useLanguage } from '../../i18n/useLanguage';
import type { SkillCategory as SkillCategoryData } from '../../types/portfolio';

interface SkillCategoryProps {
  category: SkillCategoryData;
}

export const SkillCategory = ({ category }: SkillCategoryProps) => {
  const { t } = useLanguage();

  return (
    <div className="skill-category">
      <div className="category-header">
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