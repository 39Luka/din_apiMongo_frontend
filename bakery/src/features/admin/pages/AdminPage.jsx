import React from 'react';
import ProductForm from "../components/ProductForm.jsx";
import ProductReports from "../components/reports/ProductReports.jsx";
import UserList from "../components/UserList.jsx";
import Section from "../../../shared/components/layout/Section.jsx";
import Tabs from "../../../shared/components/ui/Tabs.jsx";
import StatusView from "../../../shared/components/ui/StatusView.jsx";
import { useAdmin } from "../hooks/useAdmin";

/**
 * AdminPage Component
 * 
 * The main administrative dashboard.
 * Coordinates navigation between reports, product creation, and user management.
 */
function AdminPage() {
    const {
        products,
        loading,
        error,
        activeTab,
        setActiveTab,
        ADMIN_TABS
    } = useAdmin();

    return (
        <Section title="Panel de Gestión Administrativa">
            <div className="admin-page__container">
                <Tabs
                    tabs={ADMIN_TABS}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    className="admin-page__tabs"
                />

                <div className="admin-page__content">
                    {activeTab === 'reports' ? (
                        <div className="admin-page__reports">
                            <header className="admin-page__header-internal">
                                <h3 className="admin-page__title-internal">Resumen de Inventario</h3>
                            </header>
                            <StatusView
                                loading={loading}
                                error={error}
                                loadingMessage="Calculando métricas de inventario..."
                            >
                                <ProductReports products={products} />
                            </StatusView>
                        </div>
                    ) : activeTab === 'add' ? (
                        <div className="admin-page__form">
                            <header className="admin-page__header-internal">
                                <h3 className="admin-page__title-internal">Añadir Nuevo Producto</h3>
                            </header>
                            <ProductForm />
                        </div>
                    ) : (
                        <div className="admin-page__users">
                            <header className="admin-page__header-internal">
                                <h3 className="admin-page__title-internal">Lista de Usuarios</h3>
                            </header>
                            <UserList />
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
}

export default AdminPage;
