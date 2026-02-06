// API Configuration
// En producción (Vercel), usa el proxy /api para evitar CORS
// En desarrollo local, usa la URL directa del backend
export const API_BASE_URL = import.meta.env.PROD
    ? '/api'
    : (import.meta.env.VITE_API_URL || "https://din-25-26-zw82.onrender.com").replace(/\/$/, '');

export const ENDPOINTS = {
    PRODUCTS: "/productos",
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    USERS: "/users",
};

// Product Configuration
export const PRODUCT_CATEGORIES = [
    "Panadería",
    "Bollería",
    "Pastelería",
    "Cafetería",
    "Artesanal"
];

export const CATEGORY_ICONS = {
    "Panadería": "🥖",
    "Bollería": "🥐",
    "Pastelería": "🍰",
    "Cafetería": "☕",
    "Artesanal": "🌾"
};
// Chart Colors (Theme-compliant)
export const CHART_COLORS = ['#5C2905', '#E0BBE4', '#823D0B', '#D291BC', '#A66B3F'];

export const CHART_TOOLTIP_CONFIG = {
    contentStyle: { borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
    cursor: { fill: 'rgba(0,0,0,0.05)' }
};

export const CHART_AXIS_CONFIG = {
    tick: { fill: 'var(--color-grey-1)', fontSize: 12, fontWeight: 600 },
    axisLine: false,
    tickLine: false
};
