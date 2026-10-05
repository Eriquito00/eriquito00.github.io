import type { Certificate, CertificateFilter } from '../../types/portfolio';

export const certificates: Certificate[] = [
  {
    id: 'ia',
    title: 'Inteligencia Artificial',
    issuer: 'Generalitat de Catalunya',
    file: '/docs/Generalitat_IA.pdf',
    description: 'Certificado relacionado con formación en inteligencia artificial.',
  },
  {
    id: 'cybersecurity',
    title: 'Ciberseguridad',
    issuer: 'Generalitat de Catalunya',
    file: '/docs/Generalitat_Ciberseguretat.pdf',
    description: 'Certificado relacionado con formación en ciberseguridad.',
  },
  {
    id: 'specialist',
    title: 'Título de especialista',
    issuer: 'Microsoft',
    filter: 'microsoft',
    file: '/docs/Título Especialista.pdf',
    description: 'Acreditación de formación especializada de Microsoft.',
  },
  {
    id: 'excel',
    title: 'Excel',
    issuer: 'Microsoft',
    filter: 'microsoft',
    file: '/docs/Título Excel.pdf',
    description: 'Acreditación de formación en Microsoft Excel.',
  },
  {
    id: 'powerpoint',
    title: 'PowerPoint',
    issuer: 'Microsoft',
    filter: 'microsoft',
    file: '/docs/Título PowerPoint.pdf',
    description: 'Acreditación de formación en Microsoft PowerPoint.',
  },
  {
    id: 'word',
    title: 'Word',
    issuer: 'Microsoft',
    filter: 'microsoft',
    file: '/docs/Título Word.pdf',
    description: 'Acreditación de formación en Microsoft Word.',
  },
];

export const certificateFilters: Array<{ id: 'all' | CertificateFilter; label: string }> = [
  { id: 'all', label: 'Todos' },
  { id: 'generalitat', label: 'Generalitat' },
  { id: 'microsoft', label: 'Microsoft' },
];