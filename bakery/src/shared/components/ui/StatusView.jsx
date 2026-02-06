import React from 'react';
import Spinner from './Spinner';

/**
 * StatusView Component
 * 
 * A unified wrapper for handling asynchronous UI states across the application.
 * Consolidates loading, error, and empty states to ensure visual consistency and DRY code.
 * 
 * @component
 * @param {Object} props
 * @param {boolean} props.loading - Indicates if data is currently being fetched.
 * @param {string|null} [props.error] - Error message to display if the operation failed.
 * @param {boolean} [props.isEmpty] - Indicates if the data collection is empty.
 * @param {string} [props.emptyMessage="No hay datos disponibles."] - Text to show when isEmpty is true.
 * @param {string} [props.loadingMessage="Cargando..."] - Text to show during loading state.
 * @param {React.ReactNode} props.children - Content to render on success.
 */
const StatusView = ({
    loading,
    error,
    isEmpty,
    emptyMessage = "No hay datos disponibles.",
    loadingMessage = "Cargando...",
    inline = false,
    children
}) => {
    if (loading) {
        return (
            <div className={`status-view status-view--loading ${inline ? 'status-view--inline' : ''}`} aria-busy="true">
                <Spinner />
                <p className="status-view__message status-view__message--funny">{loadingMessage}</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="status-view status-view--error" role="alert">
                <div className="status-message status-message--error">
                    <span className="status-message__icon">⚠️</span>
                    <p className="status-message__text">{error}</p>
                </div>
            </div>
        );
    }

    if (isEmpty) {
        return (
            <div className="status-view status-view--empty">
                <div className="status-message status-message--empty">
                    <span className="status-message__icon">🔍</span>
                    <p className="status-message__text">{emptyMessage}</p>
                </div>
            </div>
        );
    }

    return <>{children}</>;
};

export default StatusView;
