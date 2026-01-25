import { Link } from "react-router-dom";
import Card from "../../common/Card.jsx";
import { RenderCardsPropTypes } from './RenderCards.propTypes';

/**
 * Renders a list of products using the Card component.
 * 
 * @component
 * @param {Object} props
 * @param {Array<Object>} props.items - List of products to render. Each item should have id, name, description, and image.
 */
function RenderCards({ items = [] }) {
  if (!items.length) return <p>No hay productos para mostrar.</p>;
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

RenderCards.propTypes = RenderCardsPropTypes;

export default RenderCards;
