import { Outlet } from "react-router-dom";

/**
 * MainContent component
 *
 * Componente que sirve como contenedor principal del contenido de la página.
 * Se usa junto con `react-router-dom` para renderizar las sub-rutas.
 * Incluye accesibilidad mediante `id`, `tabIndex` y `aria-label`.
 *
 * @component
 * @returns {JSX.Element} Contenedor principal que renderiza las rutas hijas.
 */
function MainContent() {
  return (
    <main
      className="flex-1 mx-auto pt-36 pb-15"
      id="main-content" // ID usado para enlaces de accesibilidad ("skip link")
      tabIndex={-1} // Permite que el main reciba foco programáticamente
      aria-label="Contenido principal" // Mejora accesibilidad describiendo la sección
    >
      {/* Renderiza las rutas hijas definidas en App.jsx */}
      <Outlet />
    </main>
  );
}

export default MainContent;
