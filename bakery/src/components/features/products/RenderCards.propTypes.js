import PropTypes from 'prop-types';

const RenderCardsPropTypes = {
    /** Array of product items to render. */
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            image: PropTypes.string,
        })
    ).isRequired,
};

export { RenderCardsPropTypes };
