import { useState } from "react";
import { NavLink } from "react-router-dom";

/**
 * Navigation Component (Nav)
 * 
 * Manages the application's main menu, including opening/closing logic
 * for mobile devices and link active states.
 * 
 * @component
 * @param {Object} props
 * @param {Array<{to: string, label: string}>} props.links - Navigation links.
 */
function Nav({ links = [], children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    `nav__link ${isActive ? "nav__link--active" : ""}`;

  return (
    <nav className="nav" aria-label="Navegación principal">
      {/* Hamburger Toggle - Visible only on Mobile */}
      <button
        onClick={toggleMenu}
        className="nav__toggle"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Main Container - Collapsible on Mobile, Row on Desktop */}
      <div className={`nav__container ${isOpen ? "nav__container--open" : ""}`}>
        <ul className="nav__list">
          {links.map((link) => (
            <li key={link.to} className="nav__item">
              <NavLink
                to={link.to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Injected Actions (User Profile, Login Button) */}
        {children && (
          <div className="nav__user-actions" onClick={() => setIsOpen(false)}>
            {children}
          </div>
        )}
      </div>

      {/* Overlay for mobile to close menu when clicking outside */}
      {isOpen && <div className="nav__overlay" onClick={() => setIsOpen(false)} />}
    </nav>
  );
}


export default Nav;
