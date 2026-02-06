import apiClient from "./apiClient";
import { ENDPOINTS } from "../constants";

/**
 * User Service
 * 
 * Handles user-related API requests using the unified axios client.
 */

/**
 * Fetches all registered users from the database.
 * Requires an active authentication token.
 * 
 * @returns {Promise<import('axios').AxiosResponse>}
 */
const getUsers = () => apiClient.get(ENDPOINTS.USERS);

export { getUsers };
