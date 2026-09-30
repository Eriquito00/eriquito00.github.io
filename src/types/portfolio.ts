export type Theme = 'light' | 'dark';

export type ProjectCategory = 'fullstack' | 'frontend' | 'backend' | 'education';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  year: string;
  description: string;
  fullDescription: string;
  tags: string[];
  githubUrl: string;
  repoUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export type CertificateFilter = 'generalitat' | 'microsoft';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  filter?: CertificateFilter;
  file: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  id: string;
}

export interface EducationItem {
  period: string;
  id: string;
}
