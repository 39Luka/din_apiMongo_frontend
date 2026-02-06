import { useNavigate } from "react-router-dom";
import { useContext, useMemo } from "react";
import { UserContext } from "../../features/auth/context/UserContext";

/**
 * Specialized hook for centralized Header UI logic and navigation.
 * 
 * @returns {Object} Header controller.
 * @property {boolean} userLogged - Current authentication status.
 * @property {Object|null} userData - Logged-in user profile info.
 * @property {Array<Object>} navLinks - Filtered navigation links.
 * @property {Function} handleAuthAction - Global login/logout trigger.
 */
export const useHeader = () => {
    const { userLogged, userData, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleAuthAction = () => {
        if (userLogged) {
            logout();
            navigate("/home");
        } else {
            navigate("/login");
        }
    };

    const navLinks = useMemo(() => [
        { to: "/home", label: "Inicio" },
        { to: "/products", label: "Productos" },
        ...(userLogged ? [{ to: "/admin", label: "Admin" }] : []),
    ], [userLogged]);

    return {
        userLogged,
        userData,
        navLinks,
        handleAuthAction
    };
};
