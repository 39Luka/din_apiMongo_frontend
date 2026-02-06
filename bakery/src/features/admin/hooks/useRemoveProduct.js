import { deleteOneProduct } from "../../../shared/services/productService";
import { useApi } from "../../../shared/hooks/useApi";

/**
 * Custom hook for orchestrating product deletion operations.
 * 
 * @returns {Object} Deletion controller.
 * @property {Function} removeProduct - function(id): Promise. Triggers the DELETE request.
 * @property {boolean} loading - True while deletion is in progress.
 * @property {string|null} error - Error message if deletion fails.
 */
function useRemoveProduct() {
  const { loading, error, execute } = useApi(deleteOneProduct);

  const removeProduct = async (id) => {
    try {
      return await execute(id);
    } catch (err) {
      throw err;
    }
  };

  return { removeProduct, loading, error };
}

export default useRemoveProduct;
