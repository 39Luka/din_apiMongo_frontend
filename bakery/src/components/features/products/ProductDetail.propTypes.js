import PropTypes from 'prop-types';

const ProductDetailPropTypes = {
    /** The unique ID of the product. */
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /** The name of the product. */
    name: PropTypes.string.isRequired,
    /** The price of the product in Euros. */
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The category the product belongs to. */
    category: PropTypes.string,
    /** A detailed description of the product. */
    description: PropTypes.string,
    /** The URL of the product image. */
    image: PropTypes.string,
};

export { ProductDetailPropTypes };
