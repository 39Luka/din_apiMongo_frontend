import { getAllProducts } from "@/services/productService";
import { useEffect, useState } from "react";
import { mapProductsFromAPI } from "@/utils/mappers";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getAllProducts()
      .then(res => setProducts(mapProductsFromAPI(res.data.data) || []))
      .catch(err => setError(err?.message || String(err)))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}

export default useProducts;
