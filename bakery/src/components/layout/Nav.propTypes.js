import PropTypes from 'prop-types';

export const NavPropTypes = {
    /**
     * List of navigation links.
     * Each object must contain 'to' (route) and 'label' (display text).
     */
    links: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
};
