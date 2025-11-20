import "./assets/styles/index.css";
import MainContent from "./components/MainContent";
import { Route, Routes } from "react-router-dom";
import ProductosPage from "./pages/ProductosPage.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<MainContent />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="productos" element={<ProductosPage />} />

      </Route>
    </Routes>
    </>
  );
}

export default App;
