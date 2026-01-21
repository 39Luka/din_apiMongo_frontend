import { useState, useMemo } from 'react';

/**
 * Custom hook for searching products.
 * Abstract the logic of filtering the product list based on a search term.
 * 
 * @returns {Object} { searchTerm, setSearchTerm, filteredProducts }
 */
const useProductSearch = (productos = []) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = useMemo(() => {
        if (!searchTerm) return productos;
        return productos.filter((product) =>
            product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, productos]);

    return {
        searchTerm,
        setSearchTerm,
        filteredProducts
    };
};

export { useProductSearch };
