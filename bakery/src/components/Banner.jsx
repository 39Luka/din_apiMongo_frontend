// Banner.jsx
/**
 * Banner component
 *
 * Muestra un banner con imagen de fondo, gradiente y texto.
 * Mejor accesibilidad usando aria-label y figuras correctamente.
 *
 * @component
 * @param {Object} props
 * @param {string} props.imagen - URL de la imagen de fondo.
 * @param {string} props.titulo - Título principal.
 * @param {string} props.contenido - Texto descriptivo.
 * @returns {JSX.Element}
 */
function Banner({ imagen, titulo, contenido }) {
  return (
    <section
      className="relative w-full mx-auto my-8 px-4 sm:px-6 md:px-8"
      aria-label={`Banner: ${titulo} - ${contenido}`}
    >
      <figure className="relative rounded-lg shadow-lg overflow-hidden aspect-video sm:aspect-auto sm:h-80 md:h-96">
        {/* Imagen de fondo */}
        <img
          src={imagen}
          alt={`${titulo} - ${contenido}`} // lectura garantizada
          className="w-full h-full object-cover"
        />

        {/* Gradiente decorativo */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 rounded-lg"
          role="presentation"
        />

        {/* Texto visible sobre el banner */}
        <header className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 sm:px-8">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl heading-base heading-h1 font-bold mb-2 drop-shadow-2xl">
            {titulo}
          </h1>
          <p className="text-sm sm:text-base md:text-lg drop-shadow-2xl">
            {contenido}
          </p>
        </header>
      </figure>
    </section>
  );
}

export default Banner;
