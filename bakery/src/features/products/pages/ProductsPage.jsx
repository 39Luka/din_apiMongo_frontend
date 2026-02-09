import { useProductSearch } from "../hooks/useProductSearch.js";
import Section from "../../../shared/components/layout/Section.jsx";
import RenderCards from "../components/RenderCards.jsx";
import SearchBar from "../../../shared/components/common/SearchBar.jsx";
import useProducts from "../hooks/useProducts.js";
import StatusView from "../../../shared/components/ui/StatusView.jsx";

/**
 * Products Page
 * 
 * Displays the full product catalog with filtering capabilities.
 */
function ProductsPage() {
  const { products, loading, error } = useProducts();
  const { searchTerm, setSearchTerm, filteredProducts } = useProductSearch(products);

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

      <StatusView
        loading={loading}
        error={error}
        isEmpty={products.length > 0 && filteredProducts.length === 0}
        emptyMessage="No se encontraron productos que coincidan con tu búsqueda."
        loadingMessage="Cargando catálogo..."
      >
        <ul className="product-grid" aria-label="Catálogo de productos">
          <RenderCards items={filteredProducts} />
        </ul>
      </StatusView>
    </Section>
  );
}

export default ProductsPage;
