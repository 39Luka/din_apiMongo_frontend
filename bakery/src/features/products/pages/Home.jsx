import Banner from "../../../shared/components/common/Banner.jsx";
import Section from "../../../shared/components/layout/Section.jsx";
import RenderCards from "../components/RenderCards.jsx";
import useProducts from "../hooks/useProducts.js";
import StatusView from "../../../shared/components/ui/StatusView.jsx";

function Home() {
  const { products, loading, error } = useProducts();

  return (
    <StatusView
      loading={loading}
      error={error}
      loadingMessage="Cargando productos destacados..."
    >
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
    </StatusView>
  );
}

export default Home;
