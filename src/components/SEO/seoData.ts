export const siteConfig = {
  name: 'Eric Mejias Gamonal',
  description:
    'Portfolio profesional de Eric Mejias Gamonal, desarrollador web full-stack especializado en IA y Big Data. Proyectos con React, Node, PHP, Python y más.',
  author: 'Eric Mejias Gamonal',
  defaultLanguage: 'es',
  url: process.env.NODE_ENV === 'production' ? 'https://ericmejiasgamonal.vercel.app' : 'http://localhost:5173',
};

export const socialLinks = {
  github: 'https://github.com/Eriquito00',
  linkedin: 'https://www.linkedin.com/in/eric-mejias-gamonal',
  blog: 'https://www.blogger.com/profile/00987636027947868735',
};

export const metaData = {
  es: {
    title: 'Eric Mejias Gamonal | Portfolio Desarrollador Web',
    description:
      'Portfolio profesional de Eric Mejias Gamonal, desarrollador web full-stack especializado en IA y Big Data. Proyectos con React, Node, PHP, Python y más.',
    keywords:
      'Eric Mejias Gamonal, portfolio, desarrollador web, full-stack, IA, Big Data, React, Node.js, PHP, Python, TypeScript',
  },
  ca: {
    title: 'Eric Mejias Gamonal | Portfolio Desenvolupador Web',
    description:
      'Portfolio professional de Eric Mejias Gamonal, full-stack developer especialitzat en IA i Big Data. Projectes amb React, Node, PHP, Python i més.',
    keywords:
      'Eric Mejias Gamonal, portfolio, desenvolupador full-stack, IA, Big Data, React, Node.js, PHP, Python, TypeScript',
  },
  en: {
    title: 'Eric Mejias Gamonal | Web Developer Portfolio',
    description:
      'Professional portfolio of Eric Mejias Gamonal, full-stack web developer specialized in AI and Big Data. Projects with React, Node, PHP, Python and more.',
    keywords:
      'Eric Mejias Gamonal, portfolio, web developer, full-stack, AI, Big Data, React, Node.js, PHP, Python, TypeScript',
  },
};

export const schema = {
  type: 'Person',
  name: 'Eric Mejias Gamonal',
  description: 'Full-stack developer specialized in AI and Big Data',
  url: process.env.NODE_ENV === 'production' ? 'https://ericmejiasgamonal.vercel.app' : 'http://localhost:5173',
  image: '/src/assets/favicon.webp',
  '@type': 'Person',
  jobTitle: 'Full-stack Developer',
  email: 'ericmejiasgamonal@gmail.com',
};