import ProductForm from "../components/features/products/ProductForm.jsx";
import Section from "../components/layout/Section.jsx";

/**
 * Admin Page
 * 
 * Protected area for adding products.
 * This page is now wrapped by PrivateRoute in AppRouter.
 * 
 * @component
 */
function AdminPage() {
    return (
        <Section title="Panel de Administración">
            <div className="admin-page__container">
                <header className="admin-header">
                    <h3 className="admin-header__title">Añadir Nuevo Producto</h3>
                </header>

                <ProductForm />
            </div>
        </Section>
    );
}

export default AdminPage;
