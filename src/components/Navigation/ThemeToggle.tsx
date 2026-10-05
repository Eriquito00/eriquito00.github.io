import type { Theme } from '../../types/portfolio';
import { useLanguage } from '../../i18n/useLanguage';
import sunIcon from '../../assets/icons/sun.svg';
import moonIcon from '../../assets/icons/moon.svg';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
  standalone?: boolean;
  className?: string;
}

export const ThemeToggle = ({ theme, toggleTheme, standalone = false, className = '' }: ThemeToggleProps) => {
  const { t } = useLanguage();
  const label = theme === 'light' ? t.navigation.themeToDark : t.navigation.themeToLight;

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${standalone ? 'standalone-theme-toggle' : ''} ${className}`}
      aria-label={label}
      title={label}
      data-theme={theme}
    >
      <span className="theme-icon sun">
        <img src={sunIcon} alt="" />
      </span>
      <span className="theme-icon moon">
        <img src={moonIcon} alt="" />
      </span>
    </button>
  );
};