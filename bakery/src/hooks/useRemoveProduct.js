import { useState } from "react";
import { deleteOneProduct } from "@/services/productService";

function useRemoveProduct() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const removeProduct = (id) => {
    setLoading(true);
    setError(null);

    return deleteOneProduct(id)
      .then(res => {
        return res.data.data;
      })
      .catch(err => {
        setError(err?.message || String(err));
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { removeProduct, loading, error };
}

export default useRemoveProduct;
