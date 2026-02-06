import { Link } from "react-router-dom";
import Nav from "./Nav.jsx";
import { useHeader } from "../../hooks/useHeader";

/**
 * Header Component
 * 
 * Contains the logo, application title, main navigation, and auth toggle.
 * Refactored to use useHeader hook for clean logic separation.
 * 
 * @component
 */
function Header() {
  const {
    userLogged,
    userData,
    navLinks,
    handleAuthAction
  } = useHeader();

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
        <Nav links={navLinks}>
          {userLogged && userData && (
            <Link to="/profile" className="header__user-info">
              {userData.avatar ? (
                <img src={userData.avatar} alt={userData.username} className="header__avatar" />
              ) : (
                <span className="header__avatar-placeholder">👤</span>
              )}
              <span className="header__username">{userData.username}</span>
            </Link>
          )}

          <button
            onClick={handleAuthAction}
            className={`button ${userLogged ? "button--danger" : "button--primary"} header__auth-btn`}
          >
            {userLogged ? "Log Out" : "Log In"}
          </button>
        </Nav>
      </div>
    </header>
  );
}

export default Header;
