import { useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import { certificates, certificateFilters } from './certificatesData';
import { CertificateCard } from './CertificateCard';
import type { Certificate, CertificateFilter } from '../../types/portfolio';
import './Certificates.css';

interface CertificatesProps {
  setActiveCertificate: (certificate: Certificate) => void;
}

export const Certificates = ({ setActiveCertificate }: CertificatesProps) => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | CertificateFilter>('all');
  const visibleCertificates = certificates.filter(
    (certificate) => activeFilter === 'all' || (certificate.filter || 'generalitat') === activeFilter
  );

  return (
    <section id="certificates" className="certificates-section" aria-labelledby="certificates-title">
      <div className="section-heading-row">
        <h2 id="certificates-title" className="section-title">{t.certificates.title}</h2>
      </div>
      <div className="certificate-filters" aria-label="Filtrar certificados">
        {certificateFilters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
            aria-pressed={activeFilter === filter.id}
          >
            {t.certificates.filters[filter.id]}
            <span className="filter-count">
              {filter.id === 'all'
                ? certificates.length
                : certificates.filter((c) => (c.filter || 'generalitat') === filter.id).length}
            </span>
          </button>
        ))}
      </div>
      <div className="certificate-grid">
        {visibleCertificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} onOpen={setActiveCertificate} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;