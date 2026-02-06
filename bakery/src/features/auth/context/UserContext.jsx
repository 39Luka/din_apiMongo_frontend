import { createContext, useState } from "react";
import { loginRequest } from "../../../shared/services/authService";
import { storageService } from "../../../shared/services/storageService";

/**
 * UserContext
 * 
 * Global context to manage user authentication state through JWT.
 */
export const UserContext = createContext();

/**
 * UserProvider
 * 
 * Manages token persistence, user profile data, and auth operations.
 */
export const UserProvider = ({ children }) => {
    // Initial state from storageService
    const [userLogged, setUserLogged] = useState(() => storageService.hasToken());
    const [userData, setUserData] = useState(() => storageService.getUserData());

    /**
     * Authenticates the user and persists the session.
     * Maps frontend mixed identity (email / username) to backend expectations.
     * 
     * @param {Object} credentials - User credentials.
     * @param {string} credentials.email - Email or Username.
     * @param {string} credentials.password - Plain text password.
     * @returns {Promise<{success: boolean, message?: string}>}
     */
    const login = async (credentials) => {
        try {
            // Frontend 'email' field maps to backend 'username' for mixed identity
            const payload = {
                username: credentials.email,
                password: credentials.password
            };

            const response = await loginRequest(payload);

            if (response.status === 200 && response.data?.token) {
                const { token, data: user } = response.data;

                // Persistence via centralized service
                storageService.saveSession(token, user);

                // State update
                setUserData(user);
                setUserLogged(true);

                return { success: true };
            }
            return { success: false, message: "Respuesta inesperada del servidor" };
        } catch (error) {
            const message = error.response?.data?.message || error.message || "Error al iniciar sesión";
            return { success: false, message };
        }
    };

    /**
     * Clears the current session data and resets global auth state.
     * Effectively logs out the user.
     * @returns {void}
     */
    const logout = () => {
        storageService.clearSession();
        setUserData(null);
        setUserLogged(false);
    };

    return (
        <UserContext.Provider value={{ userLogged, userData, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
