import type { Theme } from '../../types/portfolio';

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
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};