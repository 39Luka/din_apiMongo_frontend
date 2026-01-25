import { createContext, useState, useEffect } from "react";

/**
 * UserContext
 * 
 * Global context to manage user authentication state.
 */
const UserContext = createContext();

/**
 * UserProvider
 * 
 * Provider component that wraps the application and provides auth state.
 */
export const UserProvider = ({ children }) => {
    // Authentication state
    const [userLogged, setUserLogged] = useState(false);

    // Check localStorage on mount to persist session
    useEffect(() => {
        const stored = localStorage.getItem("userLogged");
        if (stored === "true") {
            setUserLogged(true);
        }
    }, []);

    /**
     * Simulates a login process.
     */
    const login = () => {
        setUserLogged(true);
        localStorage.setItem("userLogged", "true");
    };

    /**
     * Simulates a logout process.
     */
    const logout = () => {
        setUserLogged(false);
        localStorage.removeItem("userLogged");
    };

    return (
        <UserContext.Provider value={{ userLogged, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext };
