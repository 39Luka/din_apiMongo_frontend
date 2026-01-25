import { useState, useMemo } from 'react';

/**
 * Custom hook for searching products.
 * Abstract the logic of filtering the product list based on a search term.
 * 
 * @returns {Object} { searchTerm, setSearchTerm, filteredProducts }
 */
const useProductSearch = (products = []) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = useMemo(() => {
        if (!searchTerm) return products;
        return products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, products]);

    return {
        searchTerm,
        setSearchTerm,
        filteredProducts
    };
};

export { useProductSearch };
