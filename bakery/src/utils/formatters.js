/**
 * Format a number as Euro currency.
 * @param {number|string} amount - The amount to format.
 * @returns {string} Formatted string (e.g., "12.50€").
 */
const formatCurrency = (amount) => {
    const numericAmount = Number(amount);
    if (isNaN(numericAmount)) return '0.00€';
    return `${numericAmount.toFixed(2)}€`;
};

export { formatCurrency };
