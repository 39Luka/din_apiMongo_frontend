import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { formatCurrency } from '../../../utils/formatters.js';
import useRemoveProduct from "@/hooks/useRemoveProduct";
import Spinner from "../../ui/Spinner.jsx";

/**
 * ProductDetail Component
 * 
 * It visualizes comprehensive product information, organizing the visual hierarchy to help users 
 * quickly identify the name, price, and features.
 * 
 * @component
 * @param {Object} props
 * @param {string|number} props.id - Unique identifier.
 * @param {string} props.name - Product name.
 * @param {number} props.price - Currency value.
 * @param {string} props.category - Classification.
 * @param {string} props.description - Long text content.
 * @param {string} props.image - URL for the photo.
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
            <nav className="product-detail__navigation">
                <button
                    className="button button--secondary"
                    onClick={() => navigate(-1)}
                    aria-label="Volver a la página anterior"
                >
                    ← Volver
                </button>
                {userLogged && (
                    <button
                        className="button button--danger"
                        onClick={handleDelete}
                        disabled={loading}
                        aria-label="Eliminar este producto"
                    >
                        {loading ? <Spinner size="small" /> : "Eliminar"}
                    </button>
                )}
            </nav>

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
                    <p className="form-error" role="alert">
                        <strong>Error al eliminar:</strong> {removeError}
                    </p>
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


export default ProductDetail;
