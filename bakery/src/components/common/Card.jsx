import { CardPropTypes } from './Card.propTypes';

/**
 * Card Component
 * 
 * Displays a product preview including an image, title, and short description.
 * Primarily used within product grids (ProductGrid).
 * 
 * @component
 */
function Card({ title, description, image }) {
  return (
    <article className="card">
      <figure>
        <img
          src={image}
          alt={title}
          className="card__image"
        />
        <figcaption className="card__content">
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
        </figcaption>
      </figure>
    </article>
  );
}


export default Card;
