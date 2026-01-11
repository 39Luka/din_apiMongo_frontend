import PropTypes from 'prop-types';

const ProductDetailPropTypes = {
    /** The name of the product. */
    nombre: PropTypes.string.isRequired,
    /** The price of the product in Euros. */
    precio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The category the product belongs to. */
    categoria: PropTypes.string,
    /** A detailed description of the product. */
    descripcion: PropTypes.string,
    /** The URL of the product image. */
    imagen: PropTypes.string,
};

export { ProductDetailPropTypes };
