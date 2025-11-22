// Home.jsx
import Seccion from "../components/Seccion.jsx";
import { productos } from "../data/productos.js";
import RenderCards from "../components/RenderCards.jsx";
import Banner from "../components/Banner.jsx";

/**
 * Home component
 *
 * Página de inicio con banner y top ventas.
 *
 * @component
 * @returns {JSX.Element}
 */
function Home() {
  return (
    <>
      {/* Banner de bienvenida */}
      <Banner
        imagen="https://i.ibb.co/BHkPNrcv/pan-rustico.jpg"
        titulo="Bienvenido a Bakery++"
        contenido="Descubre nuestros productos frescos y artesanales cada día"
      />

      {/* Sección Top Ventas */}
      <Seccion titulo="Top Ventas">
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-stretch items-stretch"
          aria-label="Productos más vendidos"
        >
          <RenderCards
            elementos={productos}
            options={{
              maxItems: 8,
              order: (a, b) => b.totalVentas - a.totalVentas,
            }}
          />
        </ul>
      </Seccion>
    </>
  );
}

export default Home;
