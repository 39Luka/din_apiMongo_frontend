/**
 * Validates product form data against commercial and technical rules.
 * 
 * @param {Object} formData - The current state of the product form.
 * @param {string} formData.name - Commercial name.
 * @param {number|string} formData.price - Unit price.
 * @param {string} formData.category - Classification.
 * @param {string} formData.description - Detail text.
 * @param {string} formData.image - Visual asset URL.
 * 
 * @returns {Object} A map of field names to error messages (empty if valid).
 */
export const validateProduct = (formData) => {
    const newErrors = {};

    if (!formData.name?.trim()) {
        newErrors.name = "El nombre del producto es obligatorio para identificarlo en el catálogo.";
    }

    if (!formData.price || Number(formData.price) <= 0) {
        newErrors.price = "El precio debe ser un número mayor que 0.00 €.";
    }

    if (!formData.category) {
        newErrors.category = "Debes seleccionar una categoría para organizar el producto.";
    }

    if (!formData.description?.trim() || formData.description.length < 10) {
        newErrors.description = "La descripción debe tener al menos 10 caracteres para informar al cliente.";
    }

    if (formData.image?.trim()) {
        const isUrl = /^https?:\/\//.test(formData.image);
        const isDataUri = /^data:image\/[a-zA-Z]*;base64,/.test(formData.image);

        if (!isUrl && !isDataUri) {
            newErrors.image = "La imagen debe ser una URL válida o una foto subida localmente.";
        }
    }

    return newErrors;
};
