import { useEffect, useState, type ReactNode } from 'react';
import { LanguageContext, isLanguage } from './context';
import { translations } from './translations';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('portfolio-language');
    return isLanguage(savedLanguage) ? savedLanguage : 'es';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
    document.title = translations[language].seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', translations[language].seo.description);
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>{children}</LanguageContext.Provider>;
};
