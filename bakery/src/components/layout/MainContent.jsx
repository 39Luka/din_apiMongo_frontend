import { Outlet } from "react-router-dom";

/**
 * Main Content Layout Container
 * 
 * Serves as the primary content area wrapper for all application pages.
 * Uses React Router's Outlet to render child routes dynamically.
 * 
 * This component provides:
 * - Semantic HTML5 `<main>` element for accessibility
 * - Skip-link target via `id="main-content"`
 * - Consistent spacing and layout constraints
 * 
 * @component
 */
function MainContent() {
  return (
    <main className="main-content" id="main-content">
      <Outlet />
    </main>
  );
}

export default MainContent;
