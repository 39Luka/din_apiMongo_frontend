// App.jsx
import "./assets/styles/index.css";
import MainContent from "./components/MainContent.jsx"; 
import { Route, Routes } from "react-router-dom";
import ProductosPage from "./pages/ProductsPage.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import DetailProductPage from "./pages/DetailProductPage.jsx";

/**
 * App component
 *
 * Contenedor raíz con rutas y layout principal.
 *
 * @component
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<MainContent />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="productos" element={<ProductosPage />} />
          <Route path="productos/:id" element={<DetailProductPage />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
