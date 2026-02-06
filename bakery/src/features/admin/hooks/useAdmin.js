import { useState } from 'react';
import useProducts from "../../products/hooks/useProducts";

export const useAdmin = () => {
    const { products, loading, error } = useProducts();
    const [activeTab, setActiveTab] = useState('reports');

    const ADMIN_TABS = [
        { id: 'reports', label: 'Ver Reportes', icon: '📊' },
        { id: 'add', label: 'Añadir Producto', icon: '➕' },
        { id: 'users', label: 'Gestión Usuarios', icon: '👥' }
    ];

    return {
        products,
        loading,
        error,
        activeTab,
        setActiveTab,
        ADMIN_TABS
    };
};
