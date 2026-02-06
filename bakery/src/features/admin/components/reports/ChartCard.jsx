import React from 'react';
import { ResponsiveContainer } from 'recharts';

/**
 * ChartCard Component
 * 
 * Provides a standardized container for report visualizations.
 * Ensures consistent aspect ratios and accessibility headers for charts.
 * 
 * @component
 * @param {Object} props
 * @param {string} props.title - Descriptive title for the chart.
 * @param {React.ReactNode} props.children - The actual chart components.
 */
const ChartCard = ({ title, children }) => (
    <section className="product-reports__chart-container">
        <h4 className="product-reports__chart-title">{title}</h4>
        <div className="product-reports__chart-content">
            <ResponsiveContainer width="100%" height={350}>
                {children}
            </ResponsiveContainer>
        </div>
    </section>
);

export default ChartCard;
