// DetailProductPage.jsx
import { useParams } from "react-router-dom";
import { productos } from "../data/productos.js";

/**
 * DetailProductPage component
 *
 * Muestra información completa de un producto.
 * Incluye nombre, categoría, precio, descripción e imagen.
 *
 * @component
 * @returns {JSX.Element} Detalle del producto o mensaje de error.
 */
function DetailProductPage() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));

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

  return (
    <article
      className="max-w-6xl mx-auto px-4 py-12"
      aria-label={`Detalle del producto: ${producto.nombre}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Información textual */}
        <section className="flex flex-col gap-6 order-2 md:order-1">
          <header>
            <h2 className="heading-base heading-h2 text-(--color-primary) mb-1 text-lg md:text-2xl lg:text-3xl">
              {producto.nombre}
            </h2>
            <h3 className="heading-base heading-h3 text-(--color-grey-2) text-sm md:text-base">
              {producto.categoria}
            </h3>
          </header>

          <p
            className="text-base md:text-lg lg:text-xl text-(--color-primary) font-semibold"
            aria-label="Información de precio"
          >
            {Number(producto.precio).toFixed(2)}€
          </p>

          <p className="text-sm md:text-base text-normal text-(--color-grey-1) leading-relaxed">
            {producto.descripcion}
          </p>

          <div className="flex gap-4 pt-4">
            <button
              className="px-6 py-3 bg-(--color-primary) text-white rounded-lg font-semibold hover:bg-(--color-secondary) hover:text-(--color-primary) transition-colors duration-300"
              aria-label={`Añadir ${producto.nombre} al carrito`}
              tabIndex={0}
            >
              Añadir al carrito
            </button>
          </div>
        </section>

        {/* Imagen */}
        <figure className="flex justify-center order-1 md:order-2">
          <img
            src={producto.imagen}
            alt={`Imagen del producto ${producto.nombre}`}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
          />
        </figure>
      </div>
    </article>
  );
}

export default DetailProductPage;
