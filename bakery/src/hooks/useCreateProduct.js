import { useState } from "react";
import { postOneProduct } from "@/services/productosService";
import { mapProductToAPI } from "@/utils/mappers";

function useCreateProduct() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [product, setProduct] = useState(null);

    const submitProduct = (productData) => {
        setLoading(true);
        setError(null);

        const apiData = mapProductToAPI(productData);

        return postOneProduct(apiData)
            .then(res => {
                setProduct(res.data);
                return res.data;
            })
            .catch(err => {
                setError(err?.response?.data || new Error("Error al crear producto"));
                return null;
            })
            .finally(() => setLoading(false));
    };

    return { submitProduct, product, loading, error };
}

export default useCreateProduct;
