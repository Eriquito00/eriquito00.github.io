import { useEffect } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import type { Certificate } from '../../types/portfolio';
import './CertificateModal.css';

interface CertificateModalProps {
  certificate: Certificate;
  onClose: () => void;
}

export const CertificateModal = ({ certificate, onClose }: CertificateModalProps) => {
  const { t } = useLanguage();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="certificate-modal-overlay"
      onClick={(event) => event.target === event.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
    >
      <div className="certificate-modal">
        <button className="modal-close" onClick={onClose} aria-label={t.navigation.close}>
          ×
        </button>
        <div className="certificate-modal-copy">
          <p className="eyebrow">{t.certificates.credential}</p>
          <h2 id="certificate-modal-title">{certificate.title}</h2>
          <p>{certificate.issuer}</p>
          <p className="certificate-description">{certificate.description}</p>
          <a className="modal-link" href={certificate.file} download>
            {t.certificates.download} <span>↓</span>
          </a>
        </div>
        <iframe
          className="certificate-viewer"
          src={`${certificate.file}#toolbar=0&navpanes=0`}
          title={`Vista previa de ${certificate.title}`}
        />
      </div>
    </div>
  );
};

export default CertificateModal;