import PropTypes from 'prop-types';

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
          <h1 className="banner__title">{title}</h1>
          <p className="banner__text">{content}</p>
        </figcaption>
      </figure>
    </section>
  );
}

Banner.propTypes = {
  /** URL for the banner's background image. */
  image: PropTypes.string.isRequired,
  /** Prominent main title. */
  title: PropTypes.string.isRequired,
  /** Additional text or tagline. */
  content: PropTypes.string,
};

export default Banner;
