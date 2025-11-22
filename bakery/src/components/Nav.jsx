// Nav.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";

/**
 * Nav component
 *
 * Menú principal, escritorio y móvil.
 *
 * @component
 * @returns {JSX.Element}
 */
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/home", label: "Home" },
    { to: "/productos", label: "Productos" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-base text-bold rounded-md ${
      isActive
        ? "text-(--color-primary)"
        : "text-black hover:text-(--color-primary)"
    }`;

  return (
    <nav className="relative" aria-label="Navegación principal">
      {/* Botón menú móvil */}
      <button
        onClick={toggleMenu}
        className="text-2xl text-(--color-primary) px-2 py-1 rounded md:hidden"
        aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        tabIndex={0}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Menú móvil */}
      {isOpen && (
        <ul
          id="menu-movil"
          className="fixed top-20 left-0 w-full bg-(--color-secondary) z-50 flex flex-col gap-4 p-6 md:hidden"
          aria-label="Menú de navegación móvil"
        >
          {links.map((link) => (
            <li key={link.to} role="menuitem">
              <NavLink
                to={link.to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
                tabIndex={0}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {/* Menú escritorio */}
      <ul
        className="hidden md:flex gap-6"
        role="menubar"
        aria-label="Menú de navegación principal"
      >
        {links.map((link) => (
          <li key={link.to} role="menuitem">
            <NavLink to={link.to} className={linkClass} tabIndex={0}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
