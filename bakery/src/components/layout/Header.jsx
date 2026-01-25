import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import Nav from "./Nav.jsx";

/**
 * Header Component
 * 
 * Contains the logo, application title, main navigation, and auth toggle.
 * 
 * @component
 */
function Header() {
  const { userLogged, logout, login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (userLogged) {
      navigate("/home");
      // Use setTimeout to allow navigation to complete before state change
      // prevents PrivateRoute from redirecting to /login
      setTimeout(() => {
        logout();
      }, 0);
    } else {
      // For the simulation, we can just login directly or go to page.
      // The user said "solo te loguee y te desloguee", so let's make it direct!
      login();
    }
  };

  const navLinks = [
    { to: "/home", label: "Inicio" },
    { to: "/products", label: "Productos" },
    // Only show direct Admin link if logged in
    ...(userLogged ? [{ to: "/admin", label: "Admin" }] : []),
  ];

  return (
    <header className="header">
      <Link to="/home" className="header__link" aria-label="Bakery++ Inicio">
        <img
          src="/Logo.png"
          alt="Logo de Bakery++"
          className="header__logo"
        />
        <hgroup className="header__brand">
          <h1 className="header__title">Bakery++</h1>
          <p className="header__subtitle">Crafted with care</p>
        </hgroup>
      </Link>

      <div className="header__actions">
        <Nav links={navLinks} />

        <button
          onClick={handleAuthAction}
          className={`button ${userLogged ? "button--danger" : "button--primary"} header__auth-btn`}
        >
          {userLogged ? "Log Out" : "Log In"}
        </button>
      </div>
    </header>
  );
}

export default Header;
