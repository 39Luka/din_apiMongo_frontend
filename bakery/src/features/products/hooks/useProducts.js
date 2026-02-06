import { getAllProducts } from "../../../shared/services/productService";
import { useApi } from "../../../shared/hooks/useApi";
import { mapProductsFromAPI } from "../../../shared/utils/mappers";

/**
 * Custom hook to fetch and manage the complete product catalog.
 * Automates product retrieval and applies standardized mappers.
 * 
 * @returns {Object} Product catalog controller.
 * @property {Array<Object>} products - List of transformed product models.
 * @property {boolean} loading - State of the background network request.
 * @property {string|null} error - Error message if the catalog fails.
 */
function useProducts() {
  const { data: products, loading, error } = useApi(getAllProducts, {
    immediate: true,
    mapper: (data) => mapProductsFromAPI(data) || []
  });

  return { products: products || [], loading, error };
}

export default useProducts;
