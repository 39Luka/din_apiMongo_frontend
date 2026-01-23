import PropTypes from 'prop-types';

const RenderCardsPropTypes = {
    /** Array of product items to render. */
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            nombre: PropTypes.string.isRequired,
            descripcion: PropTypes.string,
            imagen: PropTypes.string,
        })
    ).isRequired,
};

export { RenderCardsPropTypes };
