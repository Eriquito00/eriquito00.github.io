import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import type { Language } from '../../i18n/types';

interface LanguageSelectProps {
  className?: string;
}

export const LanguageSelect = ({ className = '' }: LanguageSelectProps) => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLLabelElement | null>(null);
  const options: Language[] = ['es', 'ca', 'en'];

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  return (
    <label ref={wrapperRef} className={`language-select-wrapper ${className}`}>
      <button
        type="button"
        className="language-select-trigger"
        aria-label={t.navigation.languageLabel}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen((open) => !open)}
      >
        {language.toUpperCase()}
      </button>
      <ul className={`language-menu ${isOpen ? 'open' : ''}`} role="listbox" aria-label={t.navigation.languageLabel}>
        {options.map((option) => (
          <li key={option} role="option" aria-selected={language === option}>
            <button
              type="button"
              className={`language-option ${language === option ? 'selected' : ''}`}
              onClick={() => {
                setLanguage(option);
                setIsOpen(false);
              }}
            >
              <span>{option.toUpperCase()}</span>
            </button>
          </li>
        ))}
      </ul>
    </label>
  );
};