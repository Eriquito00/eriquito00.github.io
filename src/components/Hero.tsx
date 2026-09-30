import { useLanguage } from '../i18n/useLanguage';

const Hero = () => {
  const { t } = useLanguage();
  const profile = { name: 'Eric Mejias Gamonal', role: t.hero.role, now: t.hero.profileNow, next: t.hero.profileNext, interests: t.hero.profileInterests, status: t.hero.profileStatus };

  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-content">
          <h1 id="hero-title" className="hero-name">
            Eric Mejias Gamonal
          </h1>

          <p className="hero-role">{t.hero.role}</p>

          <p className="hero-description">
            {t.hero.description}
          </p>

          <div className="hero-meta">
            <span>{t.hero.location}</span>
            <span>{t.hero.approach}</span>
            <span>{t.hero.stack}</span>
          </div>

          <div className="hero-actions">
            <a className="hero-link-button" href="https://github.com/Eriquito00" target="_blank" rel="noopener noreferrer">{t.hero.github} ↗</a>
            <a className="hero-link-button" href="https://www.linkedin.com/in/eric-mejias-gamonal-6114322b5/" target="_blank" rel="noopener noreferrer">{t.hero.linkedin} ↗</a>
            <a className="hero-link-button" href="/content/ATS_CV_Eric_Mejias.pdf" target="_blank" rel="noopener noreferrer">{t.hero.cv} ↗</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Resumen del stack de Eric">
          <div className="code-window">
            <div className="code-window-bar"><span></span><span></span><span></span><code>profile.json</code></div>
            <pre><code>{JSON.stringify(profile, null, 2)}</code></pre>
            <div className="code-window-footer"><span className="status-dot"></span> {t.hero.status}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;