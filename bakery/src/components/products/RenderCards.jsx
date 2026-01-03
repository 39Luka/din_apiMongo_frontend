import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Card from "../ui/Card.jsx";

/**
 * Renders a list of products using the Card component.
 * 
 * This component handles sorting and limiting filters before mapping
 * the items to the Card component. It wraps each card in a Link for navigation.
 * 
 * @component
 * @param {Object} props
 * @param {Array<Object>} props.items - List of products to render. Each item should have id, nombre, descripcion, and imagen.
 * @param {Object} [props.options] - Configuration options for filtering and sorting.
 * @param {number} [props.options.maxItems] - Maximum number of items to display.
 * @param {Function} [props.options.order] - Sorting function to apply to items.
 */
function RenderCards({ items: itemsProp, options = {} }) {
  const { maxItems, order } = options;
  let items = [...itemsProp];

  if (order) items.sort(order);
  if (maxItems) items = items.slice(0, maxItems);

  return items.map((item) => (
    <li key={item.id}>
      <Link
        to={`/productos/${item.id}`}
        aria-label={`Detalles de ${item.nombre}`}
      >
        <Card
          title={item.nombre}
          description={item.descripcion}
          image={item.imagen}
        />
      </Link>
    </li>
  ));
}

RenderCards.propTypes = {
  /** Array of product items to render. */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      descripcion: PropTypes.string,
      imagen: PropTypes.string,
    })
  ).isRequired,
  /** Optional configuration for sorting and limiting. */
  options: PropTypes.shape({
    maxItems: PropTypes.number,
    order: PropTypes.func,
  }),
};

export default RenderCards;
