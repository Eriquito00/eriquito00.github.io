import type { Theme } from '../../types/portfolio';
import { useLanguage } from '../../i18n/useLanguage';

export const getNavigationSections = (t: ReturnType<typeof useLanguage>['t']) => [
  { id: 'hero', label: t.navigation.home },
  { id: 'experience', label: t.navigation.experience },
  { id: 'skills', label: t.navigation.skills },
  { id: 'projects', label: t.navigation.projects },
  { id: 'certificates', label: t.navigation.certificates },
  { id: 'contact', label: t.navigation.contact },
];

export const getThemeIcon = (theme: Theme) => {
  if (theme === 'light') {
    return { src: '/moon.svg', alt: 'Modo oscuro' };
  }
  return { src: '/sun.svg', alt: 'Modo claro' };
};