import type { Certificate } from '../../types/portfolio';

interface CertificateCardProps {
  certificate: Certificate;
  onOpen: (certificate: Certificate) => void;
}

export const CertificateCard = ({ certificate, onOpen }: CertificateCardProps) => {
  return (
    <button className="certificate-card" onClick={() => onOpen(certificate)}>
      <span className="certificate-mark">PDF</span>
      <span className="certificate-copy">
        <strong>{certificate.title}</strong>
        <small>{certificate.issuer}</small>
      </span>
      <span className="certificate-arrow">↗</span>
    </button>
  );
};