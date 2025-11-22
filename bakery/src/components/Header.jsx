import Nav from "./Nav.jsx";

/**
 * Header component
 *
 * Componente que representa el encabezado principal del sitio.
 * Contiene el título del sitio y la navegación principal.
 * Incluye accesibilidad mediante `aria-label`.
 *
 * @component
 * @returns {JSX.Element} Encabezado renderizado con título y menú de navegación.
 */
function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 shadow-md bg-(--color-secondary) flex items-center justify-between p-8"
      aria-label="Encabezado principal" // Mejora accesibilidad describiendo la sección
    >
      {/* Título del sitio */}
      <h1 className="text-base heading-base heading-h1 text-(--color-primary)">
        Bakery++
      </h1>

      {/* Componente de navegación */}
      <Nav />
    </header>
  );
}

export default Header;
