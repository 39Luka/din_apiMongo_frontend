/**
 * Footer component
 *
 * Componente que muestra el pie de página del sitio.
 * Contiene información básica como copyright.
 * Incluye accesibilidad mediante `aria-label`.
 *
 * @component
 * @returns {JSX.Element} Pie de página renderizado.
 */
function Footer() {
  return (
    <footer
      className="bg-(--color-secondary) text-(--color-primary) text-base py-6 w-full"
      aria-label="Pie de página" // Mejora accesibilidad describiendo la sección
    >
      <div
        className="container mx-auto text-center"
        role="presentation" // Contenedor puramente decorativo/estructural
      >
        © 2025 Mi Sitio
      </div>
    </footer>
  );
}

export default Footer;
