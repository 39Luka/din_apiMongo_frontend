/**
 * storageService
 * 
 * Centralized utility to manage browser persistence (localStorage).
 * Abstracts the keys used and provides safe-parse operations to prevent runtime crashes.
 */

const KEYS = {
    TOKEN: "token",
    USER_DATA: "userData"
};

/**
 * Service to interact with browser storage for session management.
 * @typedef {Object} StorageService
 */
export const storageService = {
    /**
     * Saves the authentication session to localStorage.
     * @param {string} token - JWT authentication token.
     * @param {Object} userData - Public user profile data.
     */
    saveSession(token, userData) {
        localStorage.setItem(KEYS.TOKEN, token);
        localStorage.setItem(KEYS.USER_DATA, JSON.stringify(userData));
    },

    /**
     * Clears all session data from browser storage (Logout).
     */
    clearSession() {
        localStorage.removeItem(KEYS.TOKEN);
        localStorage.removeItem(KEYS.USER_DATA);
    },

    /**
     * Retrieves the current JWT token.
     * @returns {string|null}
     */
    getToken() {
        return localStorage.getItem(KEYS.TOKEN);
    },

    /**
     * Retrieves and parses user data.
     * @returns {Object|null} Parsed user profile or null if empty/invalid.
     */
    getUserData() {
        try {
            const data = localStorage.getItem(KEYS.USER_DATA);
            return data ? JSON.parse(data) : null;
        } catch (err) {
            console.error("Storage Error: Failed to parse user data", err);
            return null;
        }
    },

    /**
     * Checks if a session token exists.
     * @returns {boolean}
     */
    hasToken() {
        return !!localStorage.getItem(KEYS.TOKEN);
    }
};
