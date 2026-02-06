import { getOneProduct } from "../../../shared/services/productService";
import { useEffect } from "react";
import { useApi } from "../../../shared/hooks/useApi";
import { mapProductFromAPI } from "../../../shared/utils/mappers";

/**
 * Custom hook to fetch and manage a single product's state and lifecycle.
 * Implements a cache-first strategy using optional initialProduct data.
 * 
 * @param {string|number} id - Product unique identifier.
 * @param {Object} [initialProduct=null] - Optional pre-loaded product data.
 * 
 * @returns {Object} Product detail controller.
 * @property {Object|null} product - The individual product model.
 * @property {boolean} loading - True while fetching from the API.
 * @property {string|null} error - Error message if retrieval fails.
 */
function useProduct(id, initialProduct = null) {
  const { data: product, loading, error, execute, setData } = useApi(
    () => getOneProduct(id),
    {
      immediate: !initialProduct,
      dependencies: [id],
      mapper: mapProductFromAPI
    }
  );

  useEffect(() => {
    if (initialProduct) {
      setData(initialProduct);
    } else {
      execute();
    }
  }, [id, initialProduct, setData, execute]);

  return { product, loading, error };
}

export default useProduct;
