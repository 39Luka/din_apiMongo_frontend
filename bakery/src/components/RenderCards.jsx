// RenderCards.jsx
import { Link } from "react-router-dom";
import Card from "./Card";

/**
 * RenderCards component
 *
 * Renderiza una lista de tarjetas de productos.
 * Permite limitar la cantidad de elementos y ordenarlos.
 * Cada tarjeta enlaza a su detalle.
 *
 * @component
 * @param {Object} props
 * @param {Array<Object>} props.elementos - Array de productos con al menos id y nombre.
 * @param {Object} [props.options] - Opciones: maxItems y order.
 * @returns {JSX.Element[]} Lista de tarjetas con enlaces accesibles.
 */
function RenderCards({ elementos, options = {} }) {
  const { maxItems, order } = options;
  let items = [...elementos];

  if (order) items.sort(order);
  if (maxItems) items = items.slice(0, maxItems);

  return items.map((item) => (
    <li key={item.id} className="w-full">
      <Link
        to={`/productos/${item.id}`}
        aria-label={`Ver detalles de ${item.nombre}`}
      >
        <Card {...item} />
      </Link>
    </li>
  ));
}

export default RenderCards;
