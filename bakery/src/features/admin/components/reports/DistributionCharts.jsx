import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    PieChart, Pie, Legend
} from 'recharts';
import {
    CHART_TOOLTIP_CONFIG,
    CHART_AXIS_CONFIG
} from '../../../../shared/constants';
import ChartCard from './ChartCard';

/**
 * DistributionCharts Component
 * 
 * Logic container for Recharts visualization.
 * 
 * @component
 * @param {Object} props
 * @param {Array<Object>} props.data - Chart-ready data with labels and values.
 */
const DistributionCharts = ({ data }) => {
    return (
        <div className="product-reports__charts">
            <ChartCard title="Distribución por Categoría">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-grey-5)" />
                    <XAxis dataKey="name" {...CHART_AXIS_CONFIG} />
                    <YAxis allowDecimals={false} {...CHART_AXIS_CONFIG} />
                    <Tooltip {...CHART_TOOLTIP_CONFIG} />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
            </ChartCard>

            <ChartCard title="Proporción del Catálogo">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="var(--color-white)"
                        strokeWidth={2}
                    />
                    <Tooltip {...CHART_TOOLTIP_CONFIG} />
                    <Legend
                        verticalAlign="bottom"
                        align="center"
                        iconType="circle"
                        iconSize={10}
                        wrapperStyle={{ paddingTop: '20px' }}
                    />
                </PieChart>
            </ChartCard>
        </div>
    );
};

export default DistributionCharts;
