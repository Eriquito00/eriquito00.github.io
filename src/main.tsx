import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'
import { LanguageProvider } from './i18n/LanguageProvider'

const initialTheme = localStorage.getItem('portfolio-theme') || 'dark'
document.documentElement.setAttribute('data-theme', initialTheme)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)