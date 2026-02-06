import React, { Component } from 'react';

/**
 * ErrorBoundary
 * 
 * Catches JavaScript errors anywhere in their child component tree,
 * logs those errors, and displays a fallback UI instead of the component tree that crashed.
 */
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="status-message status-message--error" style={{ margin: '2rem auto', maxWidth: '600px' }}>
                    <span className="status-message__icon">💥</span>
                    <h2 className="status-message__title">Algo salió mal</h2>
                    <p className="status-message__text">
                        Lo sentimos, ha ocurrido un error inesperado en esta sección.
                        Intenta recargar la página o volver al inicio.
                    </p>
                    <button
                        className="button button--primary status-message__action"
                        onClick={() => window.location.reload()}
                    >
                        Recargar Aplicación
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
