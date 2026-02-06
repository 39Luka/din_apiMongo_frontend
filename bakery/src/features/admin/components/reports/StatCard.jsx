import React from 'react';

/**
 * StatCard Component
 * 
 * Displays a single numerical or commercial metric in a high-visibility card.
 * 
 * @component
 * @param {Object} props
 * @param {string} props.label - Human-readable label.
 * @param {string|number} props.value - Formatted metric value.
 * @param {string} props.icon - Descriptive emoji or icon.
 * @param {'primary'|'secondary'|'accent'} [props.variant='primary'] - Visual style variant.
 */
const StatCard = ({ label, value, icon, variant = 'primary' }) => (
    <article className={`product-reports__card product-reports__card--${variant}`}>
        <span className="product-reports__icon">{icon}</span>
        <div className="product-reports__info">
            <h4 className="product-reports__label">{label}</h4>
            <p className="product-reports__value">{value}</p>
        </div>
    </article>
);

export default StatCard;
