import { useState } from 'react';
import type { Certificate, CertificateFilter } from '../types/portfolio';
import { useLanguage } from '../i18n/useLanguage';

const certificates: Certificate[] = [
  { id: 'ia', title: 'Inteligencia Artificial', issuer: 'Generalitat de Catalunya', file: '/content/Generalitat_IA.pdf', description: 'Certificado relacionado con formación en inteligencia artificial.' },
  { id: 'cybersecurity', title: 'Ciberseguridad', issuer: 'Generalitat de Catalunya', file: '/content/Generalitat_Ciberseguretat.pdf', description: 'Certificado relacionado con formación en ciberseguridad.' },
  { id: 'specialist', title: 'Título de especialista', issuer: 'Microsoft', filter: 'microsoft', file: '/content/Título Especialista.pdf', description: 'Acreditación de formación especializada de Microsoft.' },
  { id: 'excel', title: 'Excel', issuer: 'Microsoft', filter: 'microsoft', file: '/content/Título Excel.pdf', description: 'Acreditación de formación en Microsoft Excel.' },
  { id: 'powerpoint', title: 'PowerPoint', issuer: 'Microsoft', filter: 'microsoft', file: '/content/Título PowerPoint.pdf', description: 'Acreditación de formación en Microsoft PowerPoint.' },
  { id: 'word', title: 'Word', issuer: 'Microsoft', filter: 'microsoft', file: '/content/Título Word.pdf', description: 'Acreditación de formación en Microsoft Word.' },
];

const certificateFilters: Array<{ id: 'all' | CertificateFilter; label: string }> = [
  { id: 'all', label: 'Todos' },
  { id: 'generalitat', label: 'Generalitat' },
  { id: 'microsoft', label: 'Microsoft' },
];

interface CertificatesProps {
  setActiveCertificate: (certificate: Certificate) => void;
}

const Certificates = ({ setActiveCertificate }: CertificatesProps) => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | CertificateFilter>('all');
  const visibleCertificates = certificates.filter((certificate) => activeFilter === 'all' || (certificate.filter || 'generalitat') === activeFilter);

  return (
    <section id="certificates" className="certificates-section" aria-labelledby="certificates-title">
    <div className="section-heading-row">
      <h2 id="certificates-title" className="section-title">{t.certificates.title}</h2>
    </div>
    <p className="section-aside certificate-subtitle">{t.certificates.subtitle}</p>
    <div className="certificate-filters" aria-label="Filtrar certificados">
      {certificateFilters.map((filter) => <button key={filter.id} className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`} onClick={() => setActiveFilter(filter.id)}>{t.certificates.filters[filter.id]} <span>({filter.id === 'all' ? certificates.length : certificates.filter((certificate) => (certificate.filter || 'generalitat') === filter.id).length})</span></button>)}
    </div>
    <div className="certificate-grid">
      {visibleCertificates.map((certificate) => (
        <button className="certificate-card" key={certificate.id} onClick={() => setActiveCertificate(certificate)}>
          <span className="certificate-mark">PDF</span>
          <span className="certificate-copy"><strong>{certificate.title}</strong><small>{certificate.issuer}</small></span>
          <span className="certificate-arrow">↗</span>
        </button>
      ))}
    </div>
    </section>
  );
};

export default Certificates;
