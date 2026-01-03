// Home.jsx
import Section from "../components/layout/Section.jsx";
import { productos } from "../data/productos.js";
import RenderCards from "../components/products/RenderCards.jsx";
import Banner from "../components/ui/Banner.jsx";

/**
 * Home Component
 *
 * Home page featuring a banner and top-selling products.
 *
 * @component
 * @returns {JSX.Element}
 */
function Home() {
  return (
    <>
      {/* Banner de bienvenida */}
      <Banner
        image="https://i.ibb.co/BHkPNrcv/pan-rustico.jpg"
        title="Bienvenido a Bakery++"
        content="Descubre nuestros productos frescos y artesanales cada día"
      />

      {/* Sección Top Ventas */}
      <Section title="Top Ventas">
        <ul
          className="product-grid"
          aria-label="Productos más vendidos"
        >
          <RenderCards
            items={productos}
            options={{
              maxItems: 8,
              order: (a, b) => b.totalVentas - a.totalVentas,
            }}
          />
        </ul>
      </Section>
    </>
  );
}

export default Home;
