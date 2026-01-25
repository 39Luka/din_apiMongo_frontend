import { SearchBarPropTypes } from './SearchBar.propTypes';

/**
 * SearchBar Component
 * 
 * Allows users to filter the product list through text input.
 * 
 * @component
 */
function SearchBar({ searchTerm, onSearchChange }) {
    return (
        <div className="search-bar">
            <label htmlFor="search-products" className="search-bar__label">
                Buscar productos
            </label>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="search-bar__icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input
                type="search"
                id="search-products"
                className="search-bar__input"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}

SearchBar.propTypes = SearchBarPropTypes;

export default SearchBar;
