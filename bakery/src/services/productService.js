import axios from "axios";
import { API_BASE_URL, ENDPOINTS } from "@/constants";

const productsApi = axios.create({
    baseURL: `${API_BASE_URL}${ENDPOINTS.PRODUCTS}`,
    headers: {
        "Content-Type": "application/json"
    }
});

export function getAllProducts() {
    return productsApi.get("");
}

export function getOneProduct(id) {
    return productsApi.get(`/${id}`);
}

export function postOneProduct(data) {
    return productsApi.post("/", data);
}

export function deleteOneProduct(id) {
    return productsApi.delete(`/${id}`);
}