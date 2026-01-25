// App.jsx
import "./assets/styles/index.css";
import AppRouter from "./routes/AppRouter.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import SkipLink from "./components/ui/SkipLink.jsx";

import { UserProvider } from "./context/UserContext.jsx";

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
    <UserProvider>
      <div className="app-layout">
        <SkipLink />
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
