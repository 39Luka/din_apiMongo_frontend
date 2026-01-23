import { Link } from "react-router-dom";
import Card from "../ui/Card.jsx";
import { RenderCardsPropTypes } from './RenderCards.propTypes';

/**
 * Renders a list of products using the Card component.
 * 
 * @component
 * @param {Object} props
 * @param {Array<Object>} props.items - List of products to render. Each item should have id, nombre, descripcion, and imagen.
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
            aria-label={`Ver detalles de ${item.nombre}`}
          >
            <Card
              title={item.nombre}
              description={item.descripcion}
              image={item.imagen}
            />
          </Link>
        </li>
      ))}
    </>
  );
}

RenderCards.propTypes = RenderCardsPropTypes;

export default RenderCards;
