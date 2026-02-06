import React, { useMemo } from 'react';
import { calculateProductStats } from '../../../../shared/utils/stats';
import { CHART_COLORS } from '../../../../shared/constants';
import StatsOverview from './StatsOverview';
import DistributionCharts from './DistributionCharts';

/**
 * ProductReports Component
 * 
 * Renders an analytical dashboard for site administrators.
 * 
 * @param {Object} props
 * @param {Array} props.products - List of products to analyze.
 */
const ProductReports = ({ products = [] }) => {
    const stats = useMemo(() => {
        if (!products || products.length === 0) return null;
        try {
            const calculated = calculateProductStats(products);
            return {
                ...calculated,
                chartData: calculated.chartData.map((item, index) => ({
                    ...item,
                    fill: CHART_COLORS[index % CHART_COLORS.length]
                }))
            };
        } catch (e) {
            console.error("Error calculating reports:", e);
            return null;
        }
    }, [products]);

    if (!stats) {
        return (
            <div className="product-reports product-reports--empty">
                <p className="product-reports__no-results">No hay datos suficientes para generar reportes.</p>
            </div>
        );
    }

    return (
        <div className="product-reports">
            <StatsOverview stats={stats} />
            <DistributionCharts data={stats.chartData} />
        </div>
    );
};

export default ProductReports;
