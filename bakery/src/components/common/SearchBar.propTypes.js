import PropTypes from 'prop-types';

const SearchBarPropTypes = {
    /** Current value of the search term. */
    searchTerm: PropTypes.string.isRequired,
    /** Callback function triggered when the search text changes. */
    onSearchChange: PropTypes.func.isRequired,
};

export { SearchBarPropTypes };
