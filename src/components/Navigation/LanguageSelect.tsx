import { useLanguage } from '../../i18n/useLanguage';
import type { Language } from '../../i18n/types';

interface LanguageSelectProps {
  className?: string;
}

export const LanguageSelect = ({ className = '' }: LanguageSelectProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <label className={`language-select-wrapper ${className}`}>
      <select
        className="language-select"
        value={language}
        onChange={(event) => setLanguage(event.target.value as Language)}
        aria-label="Idioma"
      >
        <option value="es">ES</option>
        <option value="ca">CA</option>
        <option value="en">EN</option>
      </select>
    </label>
  );
};