/**
 * Footer Component
 * 
 * Displays copyright information and secondary links at the bottom of all pages.
 * 
 * @component
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          &copy; {currentYear} Bakery++. Todos los derechos reservados.
        </p>
        <p className="footer__subtext">
          Hecho con ❤️ para amantes del pan artesano.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
