import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, lazy, Suspense } from "react";
import { UserContext } from "../features/auth/context/UserContext";

import MainContent from "../shared/components/layout/MainContent.jsx";
import Spinner from "../shared/components/ui/Spinner.jsx";

// Lazy loading of page components for bundle optimization
const Home = lazy(() => import("../features/products/pages/Home.jsx"));
const ProductsPage = lazy(() => import("../features/products/pages/ProductsPage.jsx"));
const DetailProductPage = lazy(() => import("../features/products/pages/DetailProductPage.jsx"));
const AdminPage = lazy(() => import("../features/admin/pages/AdminPage.jsx"));
const LoginPage = lazy(() => import("../features/auth/pages/LoginPage.jsx"));
const RegisterPage = lazy(() => import("../features/auth/pages/RegisterPage.jsx"));
const ProfilePage = lazy(() => import("../features/auth/pages/ProfilePage.jsx"));
const NotFound = lazy(() => import("../shared/components/common/NotFound.jsx"));

// Admin Sub-components
const ProductReports = lazy(() => import("../features/admin/components/reports/ProductReports.jsx"));
const ProductForm = lazy(() => import("../features/admin/components/ProductForm.jsx"));
const UserList = lazy(() => import("../features/admin/components/UserList.jsx"));

/**
 * Guard Component
 * 
 * High-order component that restricts access to protected routes.
 * Redirects unauthenticated users to the login page.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Target component.
 * @param {boolean} props.protected - Whether the route requires auth.
 */
const Guard = ({ children, protected: isPrivate }) => {
    const { userLogged } = useContext(UserContext);
    return isPrivate && !userLogged ? <Navigate to="/login" replace /> : children;
};

/**
 * Route Configuration
 * 
 * Centralized list of application routes.
 * Supports public access, guarded access, and index-based routing.
 */
const ROUTES = [
    { path: "/", element: <Home />, index: true },
    { path: "/home", element: <Home /> },
    { path: "/products", element: <ProductsPage /> },
    { path: "/products/:id", element: <DetailProductPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/profile", element: <ProfilePage />, protected: true },
    { path: "/admin", element: <AdminPage />, protected: true },
    { path: "/add-product", element: <Navigate to="/admin" replace /> }
];

/**
 * AppRouter Component
 * 
 * Orchestrates the application's navigation tree.
 */
const AppRouter = () => (
    <Suspense fallback={
        <div className="status-view status-view--loading">
            <Spinner />
            <p className="status-view__message status-view__message--funny">Cargando aplicación...</p>
        </div>
    }>
        <Routes>
            <Route path="/" element={<MainContent />}>
                {ROUTES.map((r, i) => (
                    <Route
                        key={i}
                        index={r.index}
                        path={r.index ? undefined : r.path}
                        element={<Guard protected={r.protected}>{r.element}</Guard>}
                    />
                ))}
                <Route path="*" element={<Guard><NotFound /></Guard>} />
            </Route>
        </Routes>
    </Suspense>
);

export default AppRouter;
