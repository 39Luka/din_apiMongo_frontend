// ProductsPage.jsx
import Seccion from "../components/Seccion.jsx";
import { productos } from "../data/productos.js";
import RenderCards from "../components/RenderCards.jsx";

/**
 * ProductsPage component
 *
 * Página con catálogo completo de productos.
 *
 * @component
 * @returns {JSX.Element}
 */
function ProductsPage() {
  return (
    <Seccion titulo="Nuestros Productos">
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-stretch items-stretch"
        aria-label="Catálogo de productos"
      >
        <RenderCards elementos={productos} />
      </ul>
    </Seccion>
  );
}

export default ProductsPage;
