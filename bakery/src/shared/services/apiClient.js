import axios from "axios";
import { API_BASE_URL } from "../constants";

/**
 * apiClient
 * 
 * Centralized Axios instance with base URL and JWT interceptor.
 */
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: { "Content-Type": "application/json" }
});

// Automatic inject JWT token into requests
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Handle global authentication failures (401 Unauthorized)
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const isAuthRequest = error.config?.url?.includes('/login') || error.config?.url?.includes('/register');

        if (error.response?.status === 401 && !isAuthRequest) {
            console.warn("Session expired or invalid. Clearing tokens.");
            localStorage.removeItem("token");
            localStorage.removeItem("userData");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default apiClient;
