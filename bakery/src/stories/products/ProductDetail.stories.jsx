import ProductDetail from "../../components/features/products/ProductDetail.jsx";

export default {
    title: "Components/ProductDetail",
    component: ProductDetail,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        name: { control: 'text' },
        price: { control: { type: 'number', step: 0.1 } },
        category: {
            control: { type: 'select' },
            options: ['Pan', 'Bollería', 'Pasteles', 'Galletas'],
        },
        description: { control: 'text' },
        image: { control: 'text' },
    }
};

/**
 * Default state: Product with all its information.
 */
export const Default = {
    args: {
        name: "Pan Rústico",
        price: 2.50,
        category: "Pan",
        description: "Pan artesano cocinado en horno de leña con masa madre y larga fermentación.",
        image: "https://i.ibb.co/BHkPNrcv/pan-rustico.jpg"
    }
};

/**
 * Variant: Pastry (Croissant)
 */
export const Pastry = {
    args: {
        name: "Croissant de Mantequilla",
        price: 1.80,
        category: "Bollería",
        description: "Crujiente hojaldre francés elaborado con mantequilla pura al 100%.",
        image: "https://i.ibb.co/688p57Yp/croissant.jpg"
    }
};

/**
 * Variant: No Image (Placeholder layout)
 */
export const NoImage = {
    args: {
        name: "Producto Personalizado",
        price: 0.00,
        category: "Otros",
        description: "Prueba a cambiar cada uno de estos valores en los controles de la derecha.",
        image: ""
    }
};
