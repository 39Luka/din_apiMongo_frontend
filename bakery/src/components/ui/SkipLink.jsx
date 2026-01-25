/**
 * SkipLink Component
 * 
 * Accessible link that allows keyboard users to skip navigation
 * and jump directly to the main content area.
 * 
 * @component
 */
function SkipLink() {
    return (
        <a href="#main-content" className="skip-link">
            Saltar al contenido principal
        </a>
    );
}

export default SkipLink;
