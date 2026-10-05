import type { SkillCategory } from '../../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces y experiencias para navegador',
    skills: ['HTML', 'CSS', 'tailwind', 'JavaScript', 'TypeScript', 'React', 'Astro', 'Vite'],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'APIs, lógica de aplicación y tiempo real',
    skills: ['Node.js', 'Express', 'Java', 'PHP'],
  },
  {
    id: 'databases',
    title: 'Datos',
    description: 'Modelado, persistencia y consultas',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Firebase', 'Supabase', 'Prisma'],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Herramientas para construir y compartir',
    skills: ['Git', 'GitHub', 'VSC', 'Postman', 'Figma', 'Obsidian', 'Linux', 'Docker', 'Cloudflare'],
  },
  {
    id: 'seo',
    title: 'SEO',
    description: 'Posicionamiento técnico y analítica',
    skills: ['SEO', 'GEO', 'GSC', 'GA4', 'ADS', 'SEMrush', 'sitemap', 'robots', 'llms'],
  },
  {
    id: 'learning',
    title: 'Learning',
    description: 'Nuevas tecnologías',
    skills: ['Python', 'SQLServer', 'Pandas', 'Hadoop'],
  },
];