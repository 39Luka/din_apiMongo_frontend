import { useParams, useLocation } from "react-router-dom";
import ProductDetail from "../components/ProductDetail.jsx";
import useProduct from "../hooks/useProduct.js";
import Section from "../../../shared/components/layout/Section.jsx";
import StatusView from "../../../shared/components/ui/StatusView.jsx";

/**
 * Product Detail Page
 * 
 * Displays complete information for a specific product selected from the catalog.
 */
function DetailProductPage() {
  const { id } = useParams();
  const location = useLocation();

  // Try to get data from navigation state first to avoid loading flickering
  const initialProduct = location.state?.product;
  const { product, loading, error } = useProduct(id, initialProduct);

  return (
    <Section>
      <StatusView
        loading={loading && !product}
        error={error}
        isEmpty={!loading && !product}
        emptyMessage="El producto que buscas no existe o ha sido retirado."
        loadingMessage="Cargando información del producto..."
      >
        <ProductDetail {...product} />
      </StatusView>
    </Section>
  );
}


export default DetailProductPage;
