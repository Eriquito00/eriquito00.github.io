import { useContext } from 'react';
import { LanguageContext } from './context';
import type { LanguageContextValue } from './context';

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
};
