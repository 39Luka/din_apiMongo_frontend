import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../auth/context/UserContext";
import { formatCurrency } from '../../../shared/utils/formatters.js';
import useRemoveProduct from "../../admin/hooks/useRemoveProduct";
import Spinner from "../../../shared/components/ui/Spinner.jsx";

/**
 * ProductDetail Component
 * 
 * Renders the full view of a specific product.
 * Includes category identification, price formatting, and administrative actions if authorized.
 * 
 * @component
 * @param {Object} props
 * @param {string|number} props.id - Product ID.
 * @param {string} props.name - Product commercial name.
 * @param {number} props.price - Price in euros.
 * @param {string} props.category - Product category.
 * @param {string} props.description - Detailed ingredients or notes.
 * @param {string} props.image - Product visual asset URL.
 */
function ProductDetail({ id, name, price, category, description, image }) {
    const navigate = useNavigate();
    const { userLogged } = useContext(UserContext);
    const { removeProduct, loading, error: removeError } = useRemoveProduct();

    if (!name) return null;

    const handleDelete = () => {
        if (window.confirm(`¿Estás seguro de que deseas eliminar "${name}"?`)) {
            removeProduct(id)
                .then(() => {
                    navigate("/products");
                })
                .catch((err) => {
                    console.error("Error deleting product:", err);
                });
        }
    };

    return (
        <article className="product-detail">
            <ProductDetailNav
                userLogged={userLogged}
                loading={loading}
                onDelete={handleDelete}
                onBack={() => navigate(-1)}
            />

            <section className="product-detail__info">
                <header className="product-detail__header">
                    <h1 className="product-detail__title">{name}</h1>
                    <p className="product-detail__category">{category}</p>
                </header>

                <p className="product-detail__price" aria-label={`Precio: ${price} euros`}>
                    {formatCurrency(price)}
                </p>

                <p className="product-detail__description">
                    {description}
                </p>

                <footer className="product-detail__actions">
                    <button className="button button--primary">
                        Añadir al carrito
                    </button>
                </footer>

                {removeError && (
                    <div className="status-message status-message--error" style={{ padding: '1rem', margin: '1rem 0' }}>
                        <p className="status-message__text">
                            <strong>Error al eliminar:</strong> {removeError}
                        </p>
                    </div>
                )}
            </section>

            <figure className="product-detail__figure">
                <img
                    src={image}
                    alt=""
                    className="product-detail__image"
                    aria-hidden="true"
                />
                <figcaption className="sr-only">Imagen de {name}</figcaption>
            </figure>
        </article>
    );
}


/**
 * Internal navigation for ProductDetail
 */
function ProductDetailNav({ userLogged, loading, onDelete, onBack }) {
    return (
        <nav className="product-detail__navigation">
            <button
                className="button button--secondary"
                onClick={onBack}
                aria-label="Volver a la página anterior"
            >
                ← Volver
            </button>
            {userLogged && (
                <button
                    className="button button--danger"
                    onClick={onDelete}
                    disabled={loading}
                    aria-label="Eliminar este producto"
                >
                    {loading ? <Spinner size="small" /> : "Eliminar"}
                </button>
            )}
        </nav>
    );
}

export default ProductDetail;
