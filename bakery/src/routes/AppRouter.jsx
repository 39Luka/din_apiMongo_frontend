import { Routes, Route } from "react-router-dom";
import MainContent from "../components/layout/MainContent.jsx";
import Home from "../pages/Home.jsx";
import ProductosPage from "../pages/ProductsPage.jsx";
import DetailProductPage from "../pages/DetailProductPage.jsx";
import AdminPage from "../pages/AdminPage.jsx";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainContent />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="products" element={<ProductosPage />} />
                <Route path="products/:id" element={<DetailProductPage />} />
                <Route path="add-product" element={<AdminPage />} />
            </Route>
        </Routes>
    );
}

export default AppRouter;
