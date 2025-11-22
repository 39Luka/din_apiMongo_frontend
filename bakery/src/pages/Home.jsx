import Seccion from "../components/Seccion";
import { productos } from "../data/productos";
import RenderCards from "../components/RenderCards.jsx";
import Banner from "../components/Banner.jsx";

/**
 * Home component
 *
 * Componente de la página de inicio.
 * - Muestra un banner de bienvenida.
 * - Muestra la sección "Top Ventas" con las tarjetas de productos más vendidos.
 * - Ordena los productos por `totalVentas` y limita la cantidad a 8.
 * - Utiliza los componentes `Banner`, `Seccion` y `RenderCards`.
 *
 * @component
 * @returns {JSX.Element} Página de inicio con banner y sección de productos destacados.
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
          aria-label="Productos más vendidos" // Accesibilidad para lectores de pantalla
        >
          {/* Renderiza tarjetas de productos usando RenderCards */}
          <RenderCards
            elementos={productos}
            options={{
              maxItems: 8, // Limita a los 8 productos más vendidos
              order: (a, b) => b.totalVentas - a.totalVentas, // Ordena por totalVentas descendente
            }}
          />
        </ul>
      </Seccion>
    </>
  );
}

export default Home;
