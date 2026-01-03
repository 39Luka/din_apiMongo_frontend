// App.jsx
import "./assets/styles/index.css";
import AppRouter from "./routes/AppRouter.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

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
    <div className="app-layout">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
