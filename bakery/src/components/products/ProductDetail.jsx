import { formatCurrency } from '../../utils/formatters.js';
import { ProductDetailPropTypes } from './ProductDetail.propTypes';

/**
 * ProductDetail Component
 * 
 * The `ProductDetail` component is the visual cornerstone for detailed product display in **Bakery++**.
 * It visualizes comprehensive product information, organizing the visual hierarchy to help users 
 * quickly identify the name, price, and features.
 * 
 * ### Purpose and Context
 * Designed for the product detail page, its responsive layout adapts image and text for an 
 * optimal experience across mobile and desktop devices. It is a critical piece of the end-user shopping experience.
 * 
 * ### Key Features:
 * - Image rendering with soft shadows.
 * - Price display with currency formatting.
 * - Integration of action buttons for the sales flow.
 * 
 * ### Accessibility
 * - **Contrast:** Dark text on a light background (Ratio > 4.5:1).
 * - **Semantics:** Proper use of HTML5 structural tags.
 * - **Screen Readers:** Dynamic `alt` attributes based on the product name.
 * 
 * @component
 */
function ProductDetail({ nombre, precio, categoria, descripcion, imagen }) {
    if (!nombre) return null;

    return (
        <article className="product-detail">
            <div className="product-detail__grid">
                <section className="product-detail__info">
                    <header>
                        <hgroup>
                            <h1 className="product-detail__title">{nombre}</h1>
                            <h2 className="product-detail__category">{categoria}</h2>
                        </hgroup>
                    </header>

                    <p className="product-detail__price">
                        {formatCurrency(precio)}
                    </p>

                    <p className="product-detail__description">
                        {descripcion}
                    </p>

                    <footer className="product-detail__actions">
                        <button className="button">
                            Añadir al carrito
                        </button>
                    </footer>
                </section>

                <figure className="product-detail__figure">
                    <img
                        src={imagen}
                        alt={nombre}
                        className="product-detail__image"
                    />
                </figure>
            </div>
        </article>
    );
}

ProductDetail.propTypes = ProductDetailPropTypes;

export default ProductDetail;
