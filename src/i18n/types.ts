import type { CertificateFilter } from "../types/portfolio";

export type Language = "es" | "ca" | "en";

export interface ProjectCopy {
  description: string;
  fullDescription: string;
}

export interface TranslationDictionary {
  languageName: string;
  navigation: {
    home: string;
    experience: string;
    skills: string;
    projects: string;
    certificates: string;
    contact: string;
    mainLabel: string;
    menuLabel: string;
    themeToLight: string;
    themeToDark: string;
    languageLabel: string;
    skipToContent: string;
    close: string;
  };
  hero: {
    role: string;
    description: string;
    location: string;
    approach: string;
    stack: string;
    github: string;
    linkedin: string;
    blogger: string;
    cv: string;
  };
  experience: {
    title: string;
    openCv: string;
    professionalExperience: string;
    education: string;
    facts: string[];
    items: Record<string, { role: string; company: string; detail: string }>;
    studies: Record<string, string>;
  };
  skills: {
    title: string;
    categories: Record<string, { title: string; description: string }>;
  };
  projects: {
    title: string;
    filters: Record<string, string>;
    details: string;
    repository: string;
    liveDemo: string;
    stack: string;
    copies: Record<string, ProjectCopy>;
  };
  certificates: {
    title: string;
    filters: Record<string, string>;
    credential: string;
    download: string;
    copies: Record<
      string,
      {
        id: string;
        title: string;
        issuer: string;
        file: string;
        description: string;
        filter: CertificateFilter;
      }
    >;
  };
  contact: {
    title: string;
    role: string;
    location: string;
    slogan: string;
    availability: string;
    availabilityDetail: string;
    copyEmail: string;
  };
  footer: {
    copyright: string;
  };
  seo: {
    title: string;
    description: string;
  };
}
