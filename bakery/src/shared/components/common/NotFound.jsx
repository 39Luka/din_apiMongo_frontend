import { Link } from "react-router-dom";
import Section from "../../../shared/components/layout/Section.jsx";

/**
 * NotFound Component
 * 
 * Displays a friendly 404 error page when a route is not matched.
 */
function NotFound() {
    return (
        <Section className="not-found-page">
            <div className="status-message status-message--error not-found-page__container">
                <span className="status-message__icon">🥐</span>
                <h1 className="status-message__title">404 - ¡Miga no encontrada!</h1>
                <p className="status-message__text">
                    Parece que esta página se ha quedado en el horno demasiado tiempo o nunca llegó a amasar.
                    Lo sentimos, pero la dirección que buscas no existe.
                </p>
                <div className="not-found-page__actions">
                    <Link to="/" className="button button--primary">
                        Volver al Inicio
                    </Link>
                    <Link to="/products" className="button button--secondary">
                        Ver Productos
                    </Link>
                </div>
            </div>
        </Section>
    );
}

export default NotFound;
