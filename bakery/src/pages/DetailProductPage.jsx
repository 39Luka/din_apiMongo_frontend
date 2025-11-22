import { useParams } from "react-router-dom";
import { productos } from "../data/productos.js";

/**
 * DetailProductPage component
 *
 * Componente que muestra el detalle de un producto específico.
 * - Obtiene el ID del producto desde la URL usando `useParams`.
 * - Busca el producto en la lista `productos`.
 * - Muestra un mensaje de "Producto no encontrado" si no existe.
 * - Muestra nombre, categoría, precio, descripción e imagen del producto.
 * - Incluye botón de "Añadir al carrito".
 * - Accesibilidad mediante `aria-label`, `role`, `tabIndex` y `figcaption`.
 *
 * @component
 * @returns {JSX.Element} Detalle del producto o mensaje de error si no se encuentra.
 */
function DetailProductPage() {
  const { id } = useParams();
  const producto = productos.find((prod) => prod.id === parseInt(id));

  // Caso cuando el producto no existe
  if (!producto) {
    return (
      <section
        aria-label="Producto no encontrado"
        className="max-w-6xl mx-auto px-4 py-12"
      >
        <h1 className="heading-base heading-h1 text-(--color-error)">
          Producto no encontrado
        </h1>

        <p className="text-base text-normal text-(--color-grey-2) mt-4">
          Lo sentimos, el producto que buscas no existe.
        </p>
      </section>
    );
  }

  // Renderizado del detalle del producto
  return (
    <article
      className="max-w-6xl mx-auto px-4 py-12"
      aria-label={`Detalle del producto: ${producto.nombre}`} // Describe la sección para lectores de pantalla
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        role="presentation" // Contenedor visual, no semántico
      >
        {/* Información textual del producto */}
        <section className="flex flex-col gap-6 order-2 md:order-1">
          <header>
            <h2 className="heading-base heading-h2 text-(--color-primary) mb-1 text-lg md:text-2xl lg:text-3xl">
              {producto.nombre}
            </h2>

            <h3 className="heading-base heading-h3 text-(--color-grey-2) text-sm md:text-base">
              {producto.categoria}
            </h3>
          </header>

          {/* Precio del producto */}
          <p
            className="text-base md:text-lg lg:text-xl text-(--color-primary) font-semibold"
            aria-label="Información de precio"
          >
            {Number(producto.precio).toFixed(2)}€
          </p>

          {/* Descripción del producto */}
          <p className="text-sm md:text-base text-normal text-(--color-grey-1) leading-relaxed">
            {producto.descripcion}
          </p>

          {/* Botón de acción */}
          <div className="flex gap-4 pt-4" role="presentation">
            <button
              className="px-6 py-3 bg-(--color-primary) text-white rounded-lg font-semibold hover:bg-(--color-secondary) hover:text-(--color-primary) transition-colors duration-300"
              aria-label={`Añadir ${producto.nombre} al carrito`}
              tabIndex={0}
            >
              Añadir al carrito
            </button>
          </div>
        </section>

        {/* Imagen del producto */}
        <figure className="flex justify-center order-1 md:order-2">
          <img
            src={producto.imagen}
            alt={`Imagen del producto ${producto.nombre}`}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
            tabIndex={0} // Permite foco para accesibilidad
          />

          {/* Texto alternativo oculto */}
          <figcaption className="sr-only">
            Imagen principal del producto {producto.nombre}
          </figcaption>
        </figure>
      </div>
    </article>
  );
}

export default DetailProductPage;
