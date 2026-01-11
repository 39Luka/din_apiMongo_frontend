import { useProductSearch } from "../hooks/useProductSearch.js";
import Section from "../components/layout/Section.jsx";
import RenderCards from "../components/products/RenderCards.jsx";
import SearchBar from "../components/ui/SearchBar.jsx";

/**
 * Products Page
 * 
 * Displays the full product catalog with filtering capabilities.
 */
function ProductsPage() {
  const { searchTerm, setSearchTerm, filteredProducts } = useProductSearch();

  return (
    <Section title="Nuestros Productos">
      <header className="products-page__header">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
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
