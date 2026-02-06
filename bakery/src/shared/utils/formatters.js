/**
 * Formats a numeric value into a localized Euro currency string.
 * Handles non-numeric inputs gracefully by falling back to a zero value.
 * 
 * @param {number|string} amount - The numeric value to format.
 * @returns {string} Formatted string in the format "0.00€".
 */
const formatCurrency = (amount) => {
    const numericAmount = Number(amount);
    if (isNaN(numericAmount)) return '0.00€';
    return `${numericAmount.toFixed(2)}€`;
};

export { formatCurrency };
