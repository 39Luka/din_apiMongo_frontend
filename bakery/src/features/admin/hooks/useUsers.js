import { useApi } from "../../../shared/hooks/useApi";
import { getUsers } from "../../../shared/services/userService";

/**
 * Custom hook to manage user administration listing and data synchronization.
 * Handles the secure retrieval of user data using the standardized useApi infrastructure.
 * 
 * @returns {Object} User management controller.
 * @property {Array<Object>} users - List of system users.
 * @property {boolean} loading - State of the data retrieval process.
 * @property {string|null} error - Human-readable error message.
 * @property {Function} refresh - Manual trigger to re-poll the server.
 */
export const useUsers = () => {
    const { data: users, loading, error, execute: refresh } = useApi(getUsers, {
        immediate: true,
        mapper: (data) => Array.isArray(data) ? data : []
    });

    return {
        users: users || [],
        loading,
        error,
        refresh
    };
};
