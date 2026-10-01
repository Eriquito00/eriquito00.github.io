import { useLanguage } from '../../i18n/useLanguage';
import type { EducationItem as EducationItemData } from '../../types/portfolio';

interface EducationItemProps {
  item: EducationItemData;
}

export const EducationItem = ({ item }: EducationItemProps) => {
  const { t } = useLanguage();

  return (
    <article className="education-item" key={item.id}>
      <span>{item.period}</span>
      <div>
        <h3>{t.experience.studies[item.id]}</h3>
        <p>Sa Palomera · Blanes</p>
      </div>
    </article>
  );
};