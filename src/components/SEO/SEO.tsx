import { useEffect, useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import { seoData } from '../../data/seoData';

export const SEO = () => {
  const { language } = useLanguage();
  const datosIdioma = seoData.idiomas[language] || seoData.idiomas.es;
  const [actualizado, setActualizado] = useState(false);

  useEffect(() => {
    if (actualizado) return;

    document.title = datosIdioma.titulo;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', datosIdioma.descripcion);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', datosIdioma.keywords);
    }

    setActualizado(true);
  }, [language, actualizado]);

  return null;
};

export default SEO;