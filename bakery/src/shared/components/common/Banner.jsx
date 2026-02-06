
/**
 * Banner Component
 * 
 * Hero section displaying a background image, a main title, and descriptive content.
 * Typically used at the top of main pages.
 * 
 * @component
 */
function Banner({ image, title, content }) {
  return (
    <section className="banner">
      <figure className="banner__figure">
        <img
          src={image}
          alt={title}
          className="banner__image"
        />
        <div className="banner__overlay" aria-hidden="true" />
        <figcaption className="banner__content">
          <h2 className="banner__title">{title}</h2>
          <p className="banner__text">{content}</p>
        </figcaption>
      </figure>
    </section>
  );
}



export default Banner;
