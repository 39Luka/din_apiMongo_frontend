import { Link } from "react-router-dom";
import Nav from "./Nav.jsx";

/**
 * Header Component
 * 
 * Contains the logo, application title, and the main navigation menu.
 * Stays fixed or at the top of the general layout.
 * 
 * @component
 */
function Header() {
  const navLinks = [
    { to: "/home", label: "Inicio" },
    { to: "/products", label: "Productos" },
    { to: "/add-product", label: "Administración" },
  ];

  return (
    <header className="header">
      <Link to="/home" className="header__link" aria-label="Bakery++ Inicio">
        <img
          src="/Logo.png"
          alt="Logo de Bakery++"
          className="header__logo"
        />
        <hgroup>
          <h1 className="header__title">Bakery++</h1>
          <p className="header__subtitle">Powered by harina</p>
        </hgroup>
      </Link>

      <Nav links={navLinks} />
    </header>
  );
}

export default Header;
