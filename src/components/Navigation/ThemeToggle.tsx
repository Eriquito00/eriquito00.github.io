import type { Theme } from '../../types/portfolio';
import sunIcon from '../../assets/sun.svg?react';
import moonIcon from '../../assets/moon.svg?react';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  standalone?: boolean;
  className?: string;
}

export const ThemeToggle = ({ theme, onToggle, standalone = false, className = '' }: ThemeToggleProps) => {
  const label = `Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`;

  return (
    <button
      onClick={onToggle}
      className={`theme-toggle ${standalone ? 'standalone-theme-toggle' : ''} ${className}`}
      aria-label={label}
      title={label}
      data-theme={theme}
    >
      <span className="theme-icon sun">
        <sunIcon />
      </span>
      <span className="theme-icon moon">
        <moonIcon />
      </span>
    </button>
  );
};