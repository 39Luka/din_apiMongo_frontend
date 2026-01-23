import { useParams, useLocation } from "react-router-dom";
import ProductDetail from "../components/products/ProductDetail.jsx";
import useProduct from "@/hooks/useProduct.js";
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

  const productFromState = location.state?.product;

  const { product: productFromAPI, loading, error } = useProduct(id);

  const product = productFromState || productFromAPI;

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error al cargar producto: {error}</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return <ProductDetail {...product} />;
}


export default DetailProductPage;
