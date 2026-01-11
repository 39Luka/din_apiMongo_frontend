import PropTypes from 'prop-types';

const BannerPropTypes = {
    /** URL for the banner's background image. */
    image: PropTypes.string.isRequired,
    /** Prominent main title. */
    title: PropTypes.string.isRequired,
    /** Additional text or tagline. */
    content: PropTypes.string,
};

export { BannerPropTypes };
