import { postOneProduct } from "../../../shared/services/productService";
import { mapProductToAPI } from "../../../shared/utils/mappers";
import { useApi } from "../../../shared/hooks/useApi";

/**
 * specialized hook for orchestrating product creation requests.
 * 
 * @returns {Object} Creation controller.
 * @property {Function} submitProduct - function(data): Promise. Triggers the creation request.
 * @property {Object|null} product - The newly created product returned by the API.
 * @property {boolean} loading - True while the request is processing.
 * @property {string|null} error - Error details if the creation fails.
 */
function useCreateProduct() {
    const { data: product, loading, error, execute } = useApi(postOneProduct);

    const submitProduct = async (productData) => {
        const apiData = mapProductToAPI(productData);
        try {
            return await execute(apiData);
        } catch (err) {
            return null;
        }
    };

    return { submitProduct, product, loading, error };
}

export default useCreateProduct;
