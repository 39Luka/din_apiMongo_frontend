import ProductForm from "../components/products/ProductForm.jsx";
import Section from "../components/layout/Section.jsx";

/**
 * AddProductPage Component
 *
 * Specialized view for adding a single new product to the collection.
 * 
 * @component
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
