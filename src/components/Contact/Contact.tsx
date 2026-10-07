import { useLanguage } from '../../i18n/useLanguage';
import './Contact.css';
import profile from "../../assets/favicon.webp";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-container">
        <div className="section-heading-row">
          <h2 id="contact-title" className="section-title">{t.contact.title}</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-identity">
              <img className="contact-monogram" src={profile} alt="Profile"></img>
              <div>
                <p className="contact-kicker">Eric Mejias Gamonal</p>
                <p className="contact-role">{t.contact.role}</p>
              </div>
            </div>
            <p className="contact-location">{t.contact.location}</p>
            <h3 className="contact-info-title contact-slogan">{t.contact.slogan}</h3>
            <div className="contact-links">
              <a
                className="contact-link"
                href="https://github.com/Eriquito00"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.github}
              </a>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/eric-mejias-gamonal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.linkedin}
              </a>
              <a
                className="contact-link"
                href="https://www.blogger.com/profile/00987636027947868735"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.blogger}
              </a>
            </div>
          </div>
          <aside className="contact-side">
            <span className="status-dot"></span>
            <strong>{t.contact.availability}</strong>
            <p>{t.contact.availabilityDetail}</p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;