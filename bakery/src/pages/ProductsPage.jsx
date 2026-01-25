import { useProductSearch } from "../hooks/useProductSearch.js";
import Section from "../components/layout/Section.jsx";
import RenderCards from "../components/features/products/RenderCards.jsx";
import SearchBar from "../components/common/SearchBar.jsx";
import useProducts from "@/hooks/useProducts.js";
import Spinner from "@/components/ui/Spinner.jsx";
/**
 * Products Page
 * 
 * Displays the full product catalog with filtering capabilities.
 */
function ProductsPage() {
  const { products, loading, error } = useProducts();
  const { searchTerm, setSearchTerm, filteredProducts } = useProductSearch(products);

  if (loading) {
    return (
      <Section title="Cargando catálogo...">
        <Spinner />
      </Section>
    );
  }

  if (error) {
    return (
      <Section title="Error">
        <p className="error-message">Error al cargar los productos: {error}</p>
      </Section>
    );
  }


  return (
    <Section title="Nuestros Productos">
      <header className="products-page__header">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <p className="sr-only" aria-live="polite" role="status">
          {filteredProducts.length === 0
            ? "No se encontraron productos que coincidan con tu búsqueda."
            : `Mostrando ${filteredProducts.length} productos.`}
        </p>
      </header>

      {filteredProducts.length > 0 ? (
        <ul className="product-grid" aria-label="Catálogo de productos">
          <RenderCards items={filteredProducts} />
        </ul>
      ) : (
        <p className="no-results">
          No se encontraron productos que coincidan con tu búsqueda.
        </p>
      )}
    </Section>
  );
}

export default ProductsPage;
