import type { Certificate, CertificateFilter } from '../../types/portfolio';

export const certificates: Certificate[] = [
  {
    id: 'ia',
    title: 'Inteligencia Artificial',
    issuer: 'Generalitat de Catalunya',
    file: '/docs/Generalitat_IA.pdf',
    description: 'Acreditación de la Generalitat de Catalunya tras completar el curso online «Intel·ligència Artificial per a la ciutadania» (8h) en 2026 con un 97,50% de nota.',
  },
  {
    id: 'cybersecurity',
    title: 'Ciberseguridad',
    issuer: 'Generalitat de Catalunya',
    file: '/docs/Generalitat_Ciberseguretat.pdf',
    description: 'Acreditación de la Generalitat de Catalunya por realizar el curso online «Ciberseguretat bàsica per a la ciutadania» (8h) finalizado en 2026 con un 95,11% de nota.',
  },
  {
    id: 'specialist',
    title: 'Título de especialista',
    issuer: 'Microsoft',
    filter: 'microsoft',
    file: '/docs/Título Especialista.pdf',
    description: 'Certificación Microsoft Office Specialist - Associate obtenida en mayo de 2023, la cual avala el dominio conjunto y certificado en Excel, PowerPoint y Word 2019.',
  },
  {
    id: 'excel',
    title: 'Excel',
    issuer: 'Microsoft',
    filter: 'microsoft',
    file: '/docs/Título Excel.pdf',
    description: 'Certificado oficial de Microsoft que acredita las competencias como Microsoft Office Specialist en Excel 2019 Associate, emitido en mayo de 2023 a través de Certiport.',
  },
  {
    id: 'powerpoint',
    title: 'PowerPoint',
    issuer: 'Microsoft',
    filter: 'microsoft',
    file: '/docs/Título PowerPoint.pdf',
    description: 'Acreditación oficial de Microsoft como Microsoft Office Specialist en PowerPoint 2019 Associate, lograda en mayo de 2023 tras superar los requisitos correspondientes.',
  },
  {
    id: 'word',
    title: 'Word',
    issuer: 'Microsoft',
    filter: 'microsoft',
    file: '/docs/Título Word.pdf',
    description: 'Certificado oficial de Microsoft que reconoce las competencias como Microsoft Office Specialist en Word 2019 Associate, completado exitosamente en mayo de 2023.',
  },
  {
    id: 'erasmus+',
    title: 'Erasmus+',
    issuer: 'Sa Palomera',
    filter: 'sapalomera',
    file: '/docs/Erasmus+.pdf',
    description: 'Certificado Erasmus+ por completar prácticas internacionales en LeanKubatore (Italia) entre abril y mayo de 2024, en el marco del programa de la Comisión Europea.',
  },
  {
    id: 'honorific',
    title: 'Mencion Honorífica',
    issuer: 'Sa Palomera',
    filter: 'sapalomera',
    file: '/docs/Menció honorífica.pdf',
    description: 'Mención honorífica otorgada en junio de 2024 por el Institut Sa Palomera tras destacar con una nota media de 8,24 en el CFGM de Sistemas Microinformáticos y Redes.',
  }
];

export const certificateFilters: Array<{ id: 'all' | CertificateFilter; label: string }> = [
  { id: 'all', label: 'Todos' },
  { id: 'generalitat', label: 'Generalitat' },
  { id: 'microsoft', label: 'Microsoft' },
  { id: 'sapalomera', label: 'Sa palomera' },
];