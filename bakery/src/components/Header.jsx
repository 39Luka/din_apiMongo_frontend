// Header.jsx
import { Link } from "react-router-dom";
import Nav from "./Nav.jsx";

/**
 * Header component
 *
 * Encabezado principal con logo y navegación.
 *
 * @component
 * @returns {JSX.Element}
 */
function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-[var(--color-secondary)] flex items-center justify-between p-4"
      aria-label="Encabezado principal"
    >
      <Link
        to="/home"
        className="flex items-center gap-4"
        aria-label="Ir al inicio"
      >
        <img
          src="/Logo.png"
          alt="Logo de Bakery++"
          className="w-[100px] h-[100px] object-contain"
        />
        <div role="presentation">
          <h1 className="text-base heading-base heading-h1 text-[var(--color-primary)]">
            Bakery++
          </h1>
          <p className="text-base font-medium text-[var(--color-primary)]">
            Powered by harina
          </p>
        </div>
      </Link>

      <Nav />
    </header>
  );
}

export default Header;
