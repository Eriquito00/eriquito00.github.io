import { useState, useEffect } from 'react';
import type { Theme } from '../../types/portfolio';
import { useLanguage } from '../../i18n/useLanguage';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelect } from './LanguageSelect';
import './Navigation.css';

interface NavigationProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Navigation = ({ theme, toggleTheme }: NavigationProps) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'hero', label: t.navigation.home },
    { id: 'experience', label: t.navigation.experience },
    { id: 'skills', label: t.navigation.skills },
    { id: 'projects', label: t.navigation.projects },
    { id: 'certificates', label: t.navigation.certificates },
    { id: 'contact', label: t.navigation.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} role="navigation" aria-label={t.navigation.mainLabel}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <button
            onClick={() => scrollToSection('hero')}
            className="brand-button"
            aria-label="Ir al inicio"
          >
            <span className="brand-text">Eriquito00</span>
          </button>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={t.navigation.menuLabel}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`navbar-center ${isMobileMenuOpen ? 'open' : ''}`} role="menubar">
          <ul className="navbar-links" role="menubar">
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
          </ul>
        </div>

        <div className="navbar-actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} standalone />
          <LanguageSelect />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;