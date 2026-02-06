import apiClient from "./apiClient";
import { ENDPOINTS } from "../constants";

/**
 * Auth Service
 * 
 * Handles authentication requests to the API using the unified client.
 */

/**
 * Attempts to log in with the provided credentials.
 * 
 * @param {Object} credentials - User credentials.
 * @param {string} credentials.username - Username or Email.
 * @param {string} credentials.password - Plain text password.
 * @returns {Promise<import('axios').AxiosResponse>}
 */
const loginRequest = (credentials) => apiClient.post(ENDPOINTS.LOGIN, credentials);

/**
 * Attempts to register a new user in the system.
 * 
 * @param {Object} userData - New user data.
 * @param {string} userData.username - Chosen username.
 * @param {string} userData.email - Valid email address.
 * @param {string} userData.password - Plain text password.
 * @param {string} [userData.avatar] - Optional image URL or Base64.
 * @returns {Promise<import('axios').AxiosResponse>}
 */
const registerRequest = (userData) => apiClient.post(ENDPOINTS.REGISTER, userData);

export { loginRequest, registerRequest };
