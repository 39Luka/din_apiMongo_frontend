import Section from "../components/layout/Section.jsx";
import RenderCards from "../components/features/products/RenderCards.jsx";
import Banner from "../components/common/Banner.jsx";
import useProducts from "@/hooks/useProducts.js";
import Spinner from "@/components/ui/Spinner.jsx";

function Home() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <Section title="Cargando...">
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
    <>
      {/* Welcome Banner */}
      <Banner
        image="https://i.ibb.co/BHkPNrcv/pan-rustico.jpg"
        title="Bienvenido a Bakery++"
        content="Descubre nuestros productos frescos y artesanales cada día"
      />

      {/* Products Section */}
      <Section title="Productos Destacados">
        <ul className="product-grid" aria-label="Productos destacados">
          <RenderCards
            items={[...(products || [])].slice(0, 8)}
          />
        </ul>
      </Section>
    </>
  );
}

export default Home;
