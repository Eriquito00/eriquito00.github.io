import { createContext } from 'react';
import type { Language, TranslationDictionary } from './types';

export interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationDictionary;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export const isLanguage = (value: string | null): value is Language => value === 'es' || value === 'ca' || value === 'en';
