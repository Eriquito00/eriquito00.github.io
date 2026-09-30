import { useLanguage } from '../../i18n/useLanguage';
import type { Theme } from '../../types/portfolio';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
  toggleTheme: () => void;
}

export const MobileMenu = ({ isOpen, onClose, theme, toggleTheme }: MobileMenuProps) => {
  const { language, setLanguage, t } = useLanguage();

  const sections = [
    { id: 'hero', label: t.navigation.home },
    { id: 'experience', label: t.navigation.experience },
    { id: 'skills', label: t.navigation.skills },
    { id: 'projects', label: t.navigation.projects },
    { id: 'certificates', label: t.navigation.certificates },
    { id: 'contact', label: t.navigation.contact },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ul className="navbar-links navbar-links-open" role="menubar">
      {sections.map((section) => (
        <li key={section.id} className="navbar-link" role="none">
          <button
            onClick={() => scrollToSection(section.id)}
            className="nav-link-button"
            role="menuitem"
            aria-label={`Ir a ${section.label}`}
          >
            {section.label}
          </button>
        </li>
      ))}
      <li className="theme-toggle-wrapper" role="none">
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
          title={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </li>
    </ul>
  );
};