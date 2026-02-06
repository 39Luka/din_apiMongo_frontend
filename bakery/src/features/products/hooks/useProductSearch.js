import { useState, useMemo } from 'react';

/**
 * Custom hook for advanced client-side product filtering.
 * Manages search term state and provides a memoized subset of products.
 * 
 * @param {Array<Object>} [products=[]] - Source product collection.
 * 
 * @returns {Object} Search controller.
 * @property {string} searchTerm - The current value of the search filter.
 * @property {Function} setSearchTerm - State setter to update the keyword.
 * @property {Array<Object>} filteredProducts - Products matching the search criteria.
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
