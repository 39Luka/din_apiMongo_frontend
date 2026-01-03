import { useState } from "react";
import ProductForm from "../components/products/ProductForm.jsx";
import Section from "../components/layout/Section.jsx";

/**
 * Admin Page
 * 
 * Manages access to the product form through a mock authentication.
 * 
 * @component
 */
function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => setIsAuthenticated(true);
    const handleLogout = () => setIsAuthenticated(false);

    if (!isAuthenticated) {
        return (
            <Section title="Acceso de Administración">
                <div className="admin-page__login-container">
                    <article className="admin-login-card">
                        <span className="admin-login-card__icon" aria-hidden="true">🔒</span>
                        <p className="admin-login-card__text">
                            Debes estar autenticado para gestionar el catálogo de productos.
                        </p>
                        <button onClick={handleLogin} className="button button--primary">
                            Iniciar Sesión de Administrador
                        </button>
                    </article>
                </div>
            </Section>
        );
    }

    return (
        <Section title="Panel de Control">
            <header className="admin-header">
                <h2 className="admin-header__title">Añadir Nuevo Producto</h2>
                <div className="admin-header__controls">
                    <button onClick={handleLogout} className="button button--secondary">
                        Cerrar Sesión
                    </button>
                </div>
            </header>

            <div className="add-product-page__container">
                <ProductForm />
            </div>
        </Section>
    );
}

export default AdminPage;
