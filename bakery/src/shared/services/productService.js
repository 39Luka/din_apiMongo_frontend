import apiClient from "./apiClient";
import { ENDPOINTS } from "../constants";

const P = ENDPOINTS.PRODUCTS;

/**
 * Product Service
 * 
 * Handles product-related API operations using the unified client.
 */
const getAllProducts = () => apiClient.get(P);
const getOneProduct = (id) => apiClient.get(`${P}/${id}`);
const postOneProduct = (data) => apiClient.post(P, data);
const deleteOneProduct = (id) => apiClient.delete(`${P}/${id}`);

export {
    getAllProducts,
    getOneProduct,
    postOneProduct,
    deleteOneProduct
};