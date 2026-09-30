import { useLanguage } from '../../i18n/useLanguage';
import type { ExperienceItem } from '../../types/portfolio';

interface TimelineItemProps {
  item: ExperienceItem;
}

export const TimelineItem = ({ item }: TimelineItemProps) => {
  const { t } = useLanguage();
  const copy = t.experience.items[item.id];

  return (
    <article className="timeline-item" key={`${item.id}-${item.period}`}>
      <span className="timeline-period">{item.period}</span>
      <div>
        <h3>{copy.role}</h3>
        <p className="timeline-company">{copy.company}</p>
        <p>{copy.detail}</p>
      </div>
    </article>
  );
};