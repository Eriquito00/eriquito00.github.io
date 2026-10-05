import { useLanguage } from '../../i18n/useLanguage';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-simple">
          <span className="footer-name">Eric Mejias Gamonal</span>
          <nav className="footer-simple-links" aria-label="Enlaces de contacto">
            <a href="https://github.com/Eriquito00" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/eric-mejias-gamonal-6114322b5/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/content/ATS_CV_Eric_Mejias.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            <a href="mailto:ericmejiasgamonal@gmail.com">ericmejiasgamonal@gmail.com</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Eric Mejias Gamonal · {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;