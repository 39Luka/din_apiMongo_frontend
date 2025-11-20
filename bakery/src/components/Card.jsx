/**
 * Componente Card que muestra un artículo con imagen, nombre y descripción.
 * 
 * @param {string} nombre - Nombre del producto.
 * @param {string} descripcion - Descripción del producto.
 * @param {string} imagen - URL de la imagen del producto.
 * @returns {JSX.Element} Elemento JSX que representa un producto.
 */

function Card({ nombre, descripcion, imagen }) {
  return (
    <article 
    tabIndex={0} //Para seleccionar con Tab
    aria-label={nombre}
    className="w-[286px] bg-white rounded-xl shadow-lg flex flex-col h-full">
      <figure>
        {/* === Imagen === */}
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-[170px] object-cover rounded-t-xl"
        />
        <figcaption className="p-4">
          {/* === Título === */}
          <h3 className="text-base heading-base heading-h3 mb-1">
            {nombre}
          </h3>
          {/* === Descripción === */}
          <p className="text-base text-small text-(--color-grey-2) leading-tight">
            {descripcion}
          </p>
        </figcaption>
      </figure>
    </article>
  );
}

export default Card;
