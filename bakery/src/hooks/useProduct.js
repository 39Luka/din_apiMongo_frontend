import { getOneProduct } from "@/services/productService";
import { useEffect, useState } from "react";
import { mapProductFromAPI } from "@/utils/mappers";

/**
 * Hook to fetch a single product by ID.
 * 
 * @param {string} id - Product ID.
 * @param {Object} [initialProduct=null] - Optional initial product data.
 */
function useProduct(id, initialProduct = null) {
  const [product, setProduct] = useState(initialProduct);
  const [loading, setLoading] = useState(!initialProduct);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If we already have the product (e.g. from navigation state), 
    // we don't need to fetch it again immediately or show loading.
    if (initialProduct && initialProduct.id === id) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    getOneProduct(id)
      .then(res => setProduct(mapProductFromAPI(res.data.data)))
      .catch(err => setError(err?.message || String(err)))
      .finally(() => setLoading(false));
  }, [id, initialProduct]);

  return { product, loading, error };
}

export default useProduct;
