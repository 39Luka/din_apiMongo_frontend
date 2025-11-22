// MainContent.jsx
import { Outlet } from "react-router-dom";

/**
 * MainContent component
 *
 * Contenedor principal de las rutas hijas.
 *
 * @component
 * @returns {JSX.Element}
 */
function MainContent() {
  return (
    <main
      className="flex-1 mx-auto pt-36 pb-15"
      id="main-content"
      tabIndex={-1}
      aria-label="Contenido principal"
    >
      <Outlet />
    </main>
  );
}

export default MainContent;
