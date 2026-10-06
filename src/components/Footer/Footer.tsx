import { useLanguage } from '../../i18n/useLanguage';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-simple">
          <div>
            <img src="../assets/icons/logo.png" alt="Logo"></img>
          </div>
          <span className="footer-name">Eric Mejias Gamonal</span>
          <nav className="footer-simple-links" aria-label="Enlaces de contacto">
            <a href="https://github.com/Eriquito00" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/eric-mejias-gamonal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.blogger.com/profile/00987636027947868735" target="_blank" rel="noopener noreferrer">Blogger</a>
            <a href="/docs/ATS_CV_Eric_Mejias.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            <a>ericmejiasgamonal@gmail.com</a>
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