import { useParams } from "react-router-dom";
import { productos } from "../data/productos.js";
import ProductDetail from "../components/products/ProductDetail.jsx";

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
  const product = productos.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <section className="product-error">
        <h1>Producto no encontrado</h1>
        <p>Lo sentimos, el producto que buscas no existe.</p>
      </section>
    );
  }

  return <ProductDetail {...product} />;
}

export default DetailProductPage;
