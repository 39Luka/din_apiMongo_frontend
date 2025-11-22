import "./assets/styles/index.css"; // Estilos globales
import MainContent from "./components/MainContent"; 
import { Route, Routes } from "react-router-dom"; // Rutas SPA
import ProductosPage from "./pages/ProductsPage.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import DetailProductPage from "./pages/DetailProductPage.jsx";

function App() {
  return (
    <>
      {/* Contenedor principal con altura mínima de pantalla */}
      <div className="flex flex-col min-h-screen" role="application">
        
        {/* Cabecera visible en todas las páginas */}
        <Header />

        {/* Rutas de la aplicación */}
        <Routes>
          {/* Ruta principal que envuelve sub-rutas */}
          <Route path="/" element={<MainContent />}>
            <Route index element={<Home />} />           {/* Página de inicio por defecto */}
            <Route path="home" element={<Home />} />     {/* Alias para home */}
            <Route path="productos" element={<ProductosPage />} /> {/* Página de productos */}
            <Route path="productos/:id" element={<DetailProductPage />} /> {/* Detalle de producto */}
          </Route>
        </Routes>

        {/* Pie de página visible en todas las páginas */}
        <Footer />
      </div>
    </>
  );
}

export default App;
