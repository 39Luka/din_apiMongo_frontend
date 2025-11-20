import Seccion from "../components/Seccion";
import { productos } from "../data/productos";
import RenderCards from "../components/RenderCards.jsx";

function Home() {
  return (
    <>

      <img>


      </img>

      <Seccion titulo="Top Ventas">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-stretch">
          <RenderCards elementos={productos} options={{maxItems: 8}}/>
        </ul>
      </Seccion>
    </>
  );
}

export default Home;