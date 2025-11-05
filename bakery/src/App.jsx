import Producto from "./Producto";
import SeccionProducto from "./SeccionProducto";
import { productos } from "./data/productos";

function App() {
  return (
    <SeccionProducto>
      {/*Estilo responsive*/}
      <ul className= "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {productos.map((p, index) => (
          <li key={index}>
            <Producto nombre={p.nombre} imagen={p.imagen}>
              {p.descripcion}
            </Producto>
          </li>
        ))}
      </ul>
    </SeccionProducto>
  );
}

export default App;
