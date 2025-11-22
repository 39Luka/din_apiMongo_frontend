import { Link } from "react-router-dom";
import Card from "./Card";

/**
 * RenderCards component
 *
 * Componente que renderiza una lista de tarjetas (`Card`) a partir de un array de elementos.
 * Permite:
 * - Limitar la cantidad de elementos renderizados (`maxItems`).
 * - Ordenar los elementos mediante una función de comparación (`order`).
 * - Enlazar cada tarjeta a su detalle usando React Router `Link`.
 *
 * @component
 * @param {Object} props
 * @param {Array<Object>} props.elementos - Array de objetos con datos para cada tarjeta. Cada objeto debe tener al menos `id` y `nombre`.
 * @param {Object} [props.options] - Opciones adicionales.
 * @param {number} [props.options.maxItems] - Número máximo de elementos a renderizar.
 * @param {Function} [props.options.order] - Función de comparación para ordenar los elementos.
 * @returns {JSX.Element[]} Lista de elementos `<li>` con tarjetas enlazadas.
 */
function RenderCards({ elementos, options = {} }) {
  const { maxItems, order } = options;

  let items = [...elementos];

  // Ordena los elementos si se pasa función order
  if (order) {
    items.sort(order);
  }

  // Limita la cantidad de elementos si se especifica maxItems
  if (maxItems) {
    items = items.slice(0, maxItems);
  }

  // Renderiza cada tarjeta dentro de un <li>, enlazada al detalle del producto
  return items.map((item) => (
    <li key={item.id} className="w-full">
      <Link
        to={`/productos/${item.id}`}
        aria-label={`Ver detalles de ${item.nombre}`} // Accesibilidad para lectores de pantalla
      >
        <Card {...item} />
      </Link>
    </li>
  ));
}

export default RenderCards;
