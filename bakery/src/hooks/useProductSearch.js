import { useState, useMemo } from 'react';
import { productos } from '../data/productos.js';

/**
 * Custom hook for searching products.
 * Abstract the logic of filtering the product list based on a search term.
 * 
 * @returns {Object} { searchTerm, setSearchTerm, filteredProducts }
 */
const useProductSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = useMemo(() => {
        if (!searchTerm) return productos;
        return productos.filter((product) =>
            product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        filteredProducts
    };
};

export { useProductSearch };
