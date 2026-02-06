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
function Nav({ links = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggles the mobile menu state.
   */
  const toggleMenu = () => setIsOpen(!isOpen);

  /**
   * Generates dynamic CSS classes based on whether the link is active.
   * @param {Object} params 
   * @param {boolean} params.isActive - Whether the current route matches the link.
   * @returns {string} CSS class string.
   */
  const linkClass = ({ isActive }) =>
    `nav__link ${isActive ? "nav__link--active" : ""}`;

  // Moved MenuList definition before the main return statement
  const MenuList = () => (
    <ul className={isOpen ? "nav__menu nav__menu--mobile" : "nav__menu nav__menu--desktop"}>
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
  );

  return (
    <nav className="nav" aria-label="Navegación principal">
      <button
        onClick={toggleMenu}
        className="nav__toggle"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      <MenuList />
    </nav>
  );
}


export default Nav;
