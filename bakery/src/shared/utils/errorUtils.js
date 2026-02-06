/**
 * Utility to extract user-friendly error messages from API responses.
 * Maps technical codes (401, 403, 500) to actionable human messages.
 * 
 * @param {Error|Object} error - The error object from catch block or API response.
 * @param {string} fallback - Message to show if extraction fails.
 * @returns {string} Human-readable error message.
 */
export const extractErrorMessage = (error, fallback = "Ocurrió un error inesperado. Inténtalo de nuevo.") => {
    if (typeof error === 'string') return error;

    const status = error.response?.status;
    const dataMessage = error.response?.data?.message || error.data?.message;

    // Mapping by status code for better context
    if (status === 401) return "Sesión caducada o no autorizada. Por favor, identifícate.";
    if (status === 403) return "No tienes permisos suficientes para realizar esta acción.";
    if (status === 404) return "El recurso solicitado no existe.";
    if (status >= 500) return "Error en el servidor. Estamos trabajando para solucionarlo.";

    return dataMessage || error.message || fallback;
};
