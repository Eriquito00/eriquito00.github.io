import { useLanguage } from '../../i18n/useLanguage';
import './SkipLink.css';

interface SkipLinkProps {
  targetId: string;
}

export const SkipLink = ({ targetId }: SkipLinkProps) => {
  const { t } = useLanguage();
  return (
    <a
      href={`#${targetId}`}
      className="skip-link"
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
          target.focus();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      {t.navigation.skipToContent}
    </a>
  );
};

export default SkipLink;