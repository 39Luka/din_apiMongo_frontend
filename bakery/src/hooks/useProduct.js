import { getOneProduct } from "@/services/productosService";
import { useEffect, useState } from "react";
import { mapProductDTO } from "@/utils/mappers";

function useProduct(id) {
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getOneProduct(id)
      .then(res => setProduct(mapProductDTO(res.data.data))) 
      .catch(err => setError(err?.message || String(err)))
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading, error };
}

export default useProduct;
