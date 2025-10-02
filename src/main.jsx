import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Forzar scroll al inicio SIEMPRE
if (typeof window !== 'undefined') {
  // Antes de cargar
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  
  // Al cargar
  window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });
  
  // Al DOM listo
  document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
