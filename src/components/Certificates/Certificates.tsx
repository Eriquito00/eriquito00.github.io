import { useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import { CertificateCard } from './CertificateCard';
import type { Certificate } from '../../types/portfolio';
import './Certificates.css';

export const Certificates = ({ setActiveCertificate }: { setActiveCertificate: (certificate: Certificate) => void }) => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'microsoft' | 'generalitat' | 'sapalomera'>('all');

  const certificates = Object.values(t.certificates.copies) as Certificate[];

  const visibleCertificates = certificates.filter(
    (certificate) => activeFilter === 'all' || (certificate.filter || 'generalitat') === activeFilter
  );

  return (
    <section id="certificates" className="certificates-section" aria-labelledby="certificates-title">
      <div className="section-heading-row">
        <h2 id="certificates-title" className="section-title">{t.certificates.title}</h2>
      </div>
      <div className="certificate-filters" aria-label="Filtrar certificados">
        {Object.entries(t.certificates.filters).map(([key, label]) => (
          <button
            key={key}
            className={`filter-button ${activeFilter === key ? 'active' : ''}`}
            onClick={() => setActiveFilter(key as typeof activeFilter)}
            aria-pressed={activeFilter === key}
          >
            {label}
            <span className="filter-count">
              {key === 'all'
                ? certificates.length
                : certificates.filter((c) => (c.filter || 'generalitat') === key).length}
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
