import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import MainContent from "../components/layout/MainContent.jsx";
import Home from "../pages/Home.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
import DetailProductPage from "../pages/DetailProductPage.jsx";
import AdminPage from "../pages/AdminPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";

/**
 * PrivateRoute Component
 * 
 * Protects routes by checking the global authentication state.
 * Redirects to /login if not authenticated.
 */
const PrivateRoute = ({ children }) => {
    const { userLogged } = useContext(UserContext);

    if (!userLogged) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

/**
 * AppRouter
 * 
 * Central routing configuration with public and protected routes.
 */
function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainContent />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="products/:id" element={<DetailProductPage />} />
                <Route path="login" element={<LoginPage />} />

                {/* Protected Admin Section */}
                <Route
                    path="admin"
                    element={
                        <PrivateRoute>
                            <AdminPage />
                        </PrivateRoute>
                    }
                />

                {/* Redirect old path if necessary or just use new one */}
                <Route path="add-product" element={<Navigate to="/admin" replace />} />
            </Route>
        </Routes>
    );
}

export default AppRouter;
