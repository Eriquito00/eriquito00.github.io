import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import type { Theme } from '../../types/portfolio';
import githubWhite from '../../assets/icons/github-white.webp';
import githubBlack from '../../assets/icons/github-black.webp';
import './Footer.css';

interface FooterProps {
  theme: Theme;
}

const Footer = ({ theme }: FooterProps) => {
  const { t } = useLanguage();
  const githubIcon = theme === 'light' ? githubBlack : githubWhite;
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const copyTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => {
    if (copyTimeoutRef.current) window.clearTimeout(copyTimeoutRef.current);
  }, []);

  const handleEmailClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    try {
      await navigator.clipboard.writeText('ericmejiasgamonal@gmail.com');
      setIsEmailCopied(true);
      if (copyTimeoutRef.current) window.clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = window.setTimeout(() => setIsEmailCopied(false), 2000);
    } catch {
      setIsEmailCopied(false);
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-simple">
          <a
            href="https://github.com/Eriquito00/eriquito00.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-brand-link"
            aria-label="Repositorio del portfolio en GitHub"
          >
            <img src={githubIcon} alt="" className="footer-github-icon" aria-hidden="true" />
            <span className="footer-name">Eric Mejias Gamonal</span>
          </a>
          <nav className="footer-simple-links" aria-label="Enlaces de contacto">
            <a href="https://github.com/Eriquito00" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/eric-mejias-gamonal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.blogger.com/profile/00987636027947868735" target="_blank" rel="noopener noreferrer">Blogger</a>
            <a href="/docs/ATS_CV_Eric_Mejias.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            <span className="footer-email-link">
              <a href="mailto:ericmejiasgamonal@gmail.com" onClick={handleEmailClick}>
                ericmejiasgamonal@gmail.com
              </a>
              {isEmailCopied && (
                <span className="footer-confirmation-message" role="status" aria-live="polite">
                  {t.contact.copyEmail}
                </span>
              )}
            </span>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>Eric Mejias Gamonal · {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;