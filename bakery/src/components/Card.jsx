/**
 * Card component
 *
 * Componente que muestra un producto en formato tarjeta con:
 * - Imagen del producto
 * - Nombre del producto
 * - Descripción
 * 
 * Incluye accesibilidad mediante `aria-label` y `alt`.
 *
 * @component
 * @param {Object} props
 * @param {string} props.nombre - Nombre del producto.
 * @param {string} props.descripcion - Descripción del producto.
 * @param {string} props.imagen - URL de la imagen del producto.
 * @returns {JSX.Element} Tarjeta renderizada con imagen, nombre y descripción.
 */
function Card({ nombre, descripcion, imagen }) {
  return (
    <article
      tabIndex={0} // Permite enfocar la tarjeta con teclado
      aria-label={`Producto: ${nombre}`} // Describe el artículo para lectores de pantalla
      className="w-full bg-white rounded-xl shadow-lg flex flex-col h-full"
    >
      <figure>
        {/* Imagen del producto */}
        <img
          src={imagen}
          alt={nombre} // Texto alternativo para accesibilidad
          className="w-full h-32 sm:h-36 md:h-40 lg:h-44 object-cover rounded-t-xl"
        />

        {/* Información del producto */}
        <figcaption className="p-4">
          <h3
            className="text-sm sm:text-base md:text-lg heading-base heading-h3 text-(--color-primary) mb-1"
          >
            {nombre} {/* Nombre del producto */}
          </h3>
          <p
            id={nombre}
            className="text-xs sm:text-sm md:text-base text-medium text-(--color-grey-2) pt-1"
          >
            {descripcion} {/* Descripción del producto */}
          </p>
        </figcaption>
      </figure>
    </article>
  );
}

export default Card;
