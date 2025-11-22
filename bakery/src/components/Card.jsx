// Card.jsx
/**
 * Card component
 *
 * Tarjeta de producto con imagen, nombre y descripción.
 * Accesibilidad mediante aria-label y tabIndex.
 *
 * @component
 * @param {Object} props
 * @param {string} props.nombre - Nombre del producto.
 * @param {string} props.descripcion - Descripción.
 * @param {string} props.imagen - URL de la imagen.
 * @returns {JSX.Element}
 */
function Card({ nombre, descripcion, imagen }) {
  return (
    <article
      tabIndex={0} // Permite que la tarjeta sea enfocada con teclado
      aria-label={`${nombre}: ${descripcion}`} // Lector de pantalla leerá nombre + descripción
      className="w-full bg-white rounded-xl shadow-lg flex flex-col h-full"
    >
      <figure>
        {/* Imagen del producto */}
        <img
          src={imagen}
          alt={`Imagen del producto ${nombre}`} // Texto alternativo descriptivo
          className="w-full h-32 sm:h-36 md:h-40 lg:h-44 object-cover rounded-t-xl"
        />

        {/* Información textual */}
        <figcaption className="p-4">
          <h3 className="text-sm sm:text-base md:text-lg heading-base heading-h3 text-(--color-primary) mb-1">
            {nombre}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-medium text-(--color-grey-2) pt-1">
            {descripcion}
          </p>
        </figcaption>
      </figure>
    </article>
  );
}

export default Card;
