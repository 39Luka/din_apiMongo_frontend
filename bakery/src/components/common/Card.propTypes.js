import PropTypes from 'prop-types';

export const CardPropTypes = {
    /** The title of the card. */
    title: PropTypes.string.isRequired,
    /** A brief description or summary. */
    description: PropTypes.string,
    /** URL of the card's image. */
    image: PropTypes.string,
};
