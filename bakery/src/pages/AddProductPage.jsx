import ProductForm from "../components/products/ProductForm.jsx";
import Section from "../components/layout/Section.jsx";

/**
 * Add Product Page
 *
 * Public page for adding new products to the catalog.
 *
 * @component
 * @returns {JSX.Element}
 */
function AddProductPage() {
    return (
        <Section title="Añadir Nuevo Producto">
            <div className="add-product-page__container">
                <ProductForm />
            </div>
        </Section>
    );
}

export default AddProductPage;
