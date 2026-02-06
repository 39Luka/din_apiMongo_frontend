import React from 'react';
import StatCard from './StatCard';

/**
 * StatsOverview Component
 * 
 * Renders the top-level KPI cards for the administration dashboard.
 * 
 * @component
 * @param {Object} props
 * @param {Object} props.stats - Calculated inventory statistics.
 */
const StatsOverview = ({ stats }) => {
    return (
        <div className="product-reports__grid">
            <StatCard label="Total Productos" value={stats.total} icon="📦" variant="primary" />
            <StatCard label="Valor Inventario" value={`${stats.inventoryValue}€`} icon="💰" variant="secondary" />
            <StatCard label="Precio Medio" value={`${stats.averagePrice}€`} icon="🏷️" variant="accent" />
        </div>
    );
};

export default StatsOverview;
