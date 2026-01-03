import { Routes, Route } from "react-router-dom";
import MainContent from "../components/layout/MainContent.jsx";
import Home from "../pages/Home.jsx";
import ProductosPage from "../pages/ProductsPage.jsx";
import DetailProductPage from "../pages/DetailProductPage.jsx";
import AdminPage from "../pages/AdminPage.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainContent />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="productos" element={<ProductosPage />} />
                <Route path="productos/:id" element={<DetailProductPage />} />
                <Route path="anadir-producto" element={<AdminPage />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
