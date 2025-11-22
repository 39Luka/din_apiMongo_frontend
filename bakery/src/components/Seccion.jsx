// Seccion.jsx
import { useId } from "react";

/**
 * Seccion component
 *
 * Sección con título y contenido. Usa aria-labelledby para accesibilidad.
 *
 * @component
 * @param {Object} props
 * @param {string} props.titulo - Título de la sección.
 * @param {React.ReactNode} props.children - Contenido de la sección.
 * @returns {JSX.Element}
 */
function Seccion({ titulo, children }) {
  const idTitulo = useId();

  return (
    <section
      aria-labelledby={`${titulo}_${idTitulo}`}
      className="max-w-7xl mx-auto py-6 px-4"
    >
      <header className="text-start mb-8 mt-6">
        <h2
          id={`${titulo}_${idTitulo}`}
          className="text-base heading-base heading-h2 text-(--color-primary)"
        >
          {titulo}
        </h2>
      </header>

      {/* Contenido de la sección */}
      {children}
    </section>
  );
}

export default Seccion;
