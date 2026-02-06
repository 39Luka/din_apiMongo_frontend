import { Link } from "react-router-dom";
import Card from "../../../shared/components/common/Card.jsx";

/**
 * RenderCards Component
 * 
 * Iterates over a product collection and renders a grid of accessible cards.
 * Handles empty results with an informative state.
 * 
 * @component
 * @param {Object} props
 * @param {Array<Object>} props.items - Collection of product objects.
 */
function RenderCards({ items = [] }) {
  if (!items.length) {
    return (
      <div className="status-message status-message--info">
        <span className="status-message__icon">🫙</span>
        <p className="status-message__text">No hay productos para mostrar en este momento.</p>
      </div>
    );
  }
  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          <Link
            to={`/products/${item.id}`}
            state={{ product: item }}
            aria-label={`Ver detalles de ${item.name}`}
          >
            <Card
              title={item.name}
              description={item.description}
              image={item.image}
            />
          </Link>
        </li>
      ))}
    </>
  );
}


export default RenderCards;
