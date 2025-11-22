import Seccion from "../components/Seccion.jsx";
import { productos } from "../data/productos.js";
import RenderCards from "../components/RenderCards.jsx";

/**
 * ProductsPage component
 *
 * Componente de la página de productos.
 * - Muestra la sección "Nuestros Productos" con todas las tarjetas de productos.
 * - Utiliza los componentes `Seccion` y `RenderCards`.
 * - Accesibilidad mediante `aria-label` en la lista de productos.
 *
 * @component
 * @returns {JSX.Element} Página con catálogo completo de productos.
 */
function ProductsPage() {
  return (
    <>
      {/* Sección de productos */}
      <Seccion titulo="Nuestros Productos">
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-stretch items-stretch"
          aria-label="Catálogo de productos" // Describe la lista de productos para lectores de pantalla
        >
          {/* Renderiza tarjetas de productos */}
          <RenderCards elementos={productos} />
        </ul>
      </Seccion>
    </>
  );
}

export default ProductsPage;
