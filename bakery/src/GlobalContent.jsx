// GlobalContent.jsx

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <a
      href="#main-content"
      className="skip-link"
      aria-label="Saltar al contenido principal"
    >
      Contenido principal de la página
    </a>

    <App />
  </BrowserRouter>
);
