import { useParams, useLocation } from "react-router-dom";
import ProductDetail from "../components/features/products/ProductDetail.jsx";
import useProduct from "@/hooks/useProduct.js";
import Spinner from "@/components/ui/Spinner.jsx";
import Section from "../components/layout/Section.jsx";

/**
 * Product Detail Page
 * 
 * Displays complete information for a specific product selected from the catalog.
 * 
 * @component
 * @returns {JSX.Element}
 */
function DetailProductPage() {
  const { id } = useParams();
  const location = useLocation();

  // Try to get data from navigation state first to avoid loading flickering
  const initialProduct = location.state?.product;
  const { product, loading, error } = useProduct(id, initialProduct);

  if (loading && !product) {
    return (
      <Section title="Cargando...">
        <Spinner />
      </Section>
    );
  }

  if (error) {
    return (
      <Section title="Error">
        <p className="error-message">Error al cargar el producto: {error}</p>
      </Section>
    );
  }

  if (!product) {
    return (
      <Section title="No encontrado">
        <p>El producto que buscas no existe o ha sido retirado.</p>
      </Section>
    );
  }

  return <ProductDetail {...product} />;
}


export default DetailProductPage;
