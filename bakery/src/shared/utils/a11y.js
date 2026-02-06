/**
 * Helper to generate aria-describedby string for accessibility.
 * Concatenates help text and error IDs if they exist.
 * 
 * @param {string} id - The base ID of the element.
 * @param {string} [helpText] - Help text content (implies existence of {id}-help).
 * @param {string} [error] - Error message content (implies existence of {id}-error).
 * @returns {string|undefined} Space-separated list of IDs or undefined.
 */
const getDescribedBy = (id, helpText, error) => {
    const ids = [];
    if (helpText) ids.push(`${id}-help`);
    if (error) ids.push(`${id}-error`);
    return ids.length > 0 ? ids.join(" ") : undefined;
};

export { getDescribedBy };
