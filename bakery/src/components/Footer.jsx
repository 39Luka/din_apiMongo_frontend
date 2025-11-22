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
      className="bg-(--color-secondary) text-(--color-primary) py-6 w-full"
      aria-label="Pie de página"
    >
      <div className="w-full flex items-center justify-between px-6">
        
        {/* Copy a la izquierda */}
        <p className="text-base">
          © 2025 Bakery++ — Todos los derechos reservados
        </p>

        {/* Logo a la derecha, tamaño exacto 35px */}
        <img
          src="/Logo.png"
          alt="Logo de Bakery++"
          className="w-[100px] h-[100px] object-contain"
        />
      </div>
    </footer>
  );
}

export default Footer;
