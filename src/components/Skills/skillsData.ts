import type { SkillCategory } from '../../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'UI',
    description: 'Interfaces y experiencias para navegador',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Astro', 'Vite'],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: 'API',
    description: 'APIs, lógica de aplicación y tiempo real',
    skills: ['Node.js', 'Express', 'PHP', 'Python', 'Java', 'REST APIs', 'WebSockets'],
  },
  {
    id: 'databases',
    title: 'Datos',
    icon: 'DB',
    description: 'Modelado, persistencia y consultas',
    skills: ['MySQL', 'MongoDB', 'SQLite', 'Firebase', 'JDBC', 'Data modelling'],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'TOOLS',
    description: 'Herramientas para construir y compartir',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'npm', 'Docker', 'Bash', 'Postman', 'Figma', 'Maven', 'Vercel'],
  },
  {
    id: 'ai-ml',
    title: 'IA & Big Data',
    icon: 'IA',
    description: 'Exploración aplicada desde Python',
    skills: ['Python', 'Big Data', 'Algorithms', 'Data structures'],
  },
  {
    id: 'seo',
    title: 'SEO',
    icon: 'SEO',
    description: 'Posicionamiento técnico y analítica',
    skills: ['SEO', 'GSC', 'GA4', 'SEMrush', 'Auditorías técnicas', 'Rendimiento web'],
  },
];