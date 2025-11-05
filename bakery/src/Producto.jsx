function Producto(props) {
  const { nombre, children, imagen } = props;

  return (
    <article className="relative w-[286px] bg-white rounded-xl shadow-lg">
      <figure>
        <img
          src={imagen}
          alt={nombre}
           className="w-full h-[170px] object-cover rounded-t-xl"
        />

        {/* La sobra decorativa que no se muestra al lector de pantallas*/}
        <div 
        className="absolute w-[90%] h-[50%] top-[52%] left-[5%] bg-gray-300/60 rounded-lg blur-xl" 
        aria-hidden="true" 
        role="presentation">
        </div>

        <figcaption className="relative p-4 z-10">
        <h2 className="text-lg font-bold text-primary mb-1">{nombre}</h2>
        <p className="text-sm text-gray-600 leading-tight">{children}</p>
        </figcaption>

      </figure>
    </article>
  );
}

export default Producto;
