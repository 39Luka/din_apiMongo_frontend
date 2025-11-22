import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client';
import "./assets/styles/index.css"; // Estilos globales
import App from './App.jsx'; 
import { BrowserRouter } from 'react-router-dom'; // Navegación SPA

// Monta la app en el elemento con id 'root'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      {/* Enlace de accesibilidad para saltar al contenido principal */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
                   bg-(--color-primary) text-white px-4 py-2 rounded z-50"
        role="doc-link"
        aria-label="Saltar al contenido principal"
      >
        Contenido principal de la página
      </a>

      {/* Componente raíz de la aplicación */}
      <App />
    </StrictMode>
  </BrowserRouter>
)
