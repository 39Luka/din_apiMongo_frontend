// App.jsx
import "../assets/styles/index.css";
import AppRouter from "./Router.jsx";
import Header from "../shared/components/layout/Header.jsx";
import Footer from "../shared/components/layout/Footer.jsx";
import SkipLink from "../shared/components/ui/SkipLink.jsx";
import ErrorBoundary from "../shared/components/ui/ErrorBoundary.jsx";

import { UserProvider } from "../features/auth/context/UserContext.jsx";

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
    <ErrorBoundary>
      <UserProvider>
        <div className="app-layout">
          <SkipLink />
          <Header />
          <AppRouter />
          <Footer />
        </div>
      </UserProvider>
    </ErrorBoundary>
  );
}

export default App;
