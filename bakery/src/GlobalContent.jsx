// GlobalContent.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
                   bg-(--color-primary) text-white px-4 py-2 rounded z-200
                      "
        aria-label="Saltar al contenido principal"
      >
        Contenido principal de la página
      </a>

      <App />
    </StrictMode>
  </BrowserRouter>
);
