/**
 * Product Statistics Utilities
 */

/**
 * Calculates overview statistics for a provided collection of products.
 * Handles aggregation for total counts, inventory valuation, and category distribution.
 * 
 * @param {Array<Object>} [products=[]] - The list of products to analyze.
 * @returns {Object} {
 *   total: number,
 *   inventoryValue: string,
 *   averagePrice: string,
 *   chartData: Array<{name: string, value: number}>
 * }
 */
export const calculateProductStats = (products = []) => {
    const total = products.length;
    if (total === 0) return { total: 0, inventoryValue: "0.00", averagePrice: "0.00", chartData: [] };

    const inventoryValue = products.reduce((acc, p) => acc + (Number(p.price) || 0), 0);
    const averagePrice = inventoryValue / total;

    const categoryMap = products.reduce((acc, p) => {
        const cat = p.category || 'Sin categoría';
        acc[cat] = (acc[cat] || 0) + 1;
        return acc;
    }, {});

    const chartData = Object.entries(categoryMap).map(([name, value]) => ({ name, value }));

    return {
        total,
        inventoryValue: inventoryValue.toFixed(2),
        averagePrice: averagePrice.toFixed(2),
        chartData
    };
};
