import { useId } from "react";

/**
 * Seccion component
 *
 * Componente que representa una sección de contenido con título.
 * Permite pasar contenido interno a través de `children`.
 * Incluye accesibilidad mediante `aria-labelledby` y `id` único para el título.
 *
 * @component
 * @param {Object} props
 * @param {string} props.titulo - Título de la sección.
 * @param {React.ReactNode} props.children - Contenido que se renderiza dentro de la sección.
 * @returns {JSX.Element} Sección con encabezado y contenido.
 */
function Seccion({ titulo, children }) {
  const idTitulo = useId(); // Genera un ID único para accesibilidad

  return (
    <>
      <section
        aria-labelledby={titulo + "_" + idTitulo} // Relaciona la sección con su encabezado
        className="max-w-7xl mx-auto py-6 px-4"
      >
        <header className="text-start mb-8 mt-6">
          {/* Título de la sección */}
          <h2
            id={titulo + "_" + idTitulo} // ID usado por aria-labelledby
            className="text-base heading-base heading-h2 text-(--color-primary)"
          >
            {titulo}
          </h2>
        </header>

        {/* Contenido de la sección */}
        {children}
      </section>
    </>
  );
}

export default Seccion;
