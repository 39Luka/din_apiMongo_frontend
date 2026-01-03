import ProductDetail from "../../components/products/ProductDetail.jsx";

export default {
    title: "Components/ProductDetail",
    component: ProductDetail,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        nombre: { control: 'text' },
        precio: { control: { type: 'number', step: 0.1 } },
        categoria: {
            control: { type: 'select' },
            options: ['Pan', 'Bollería', 'Pasteles', 'Galletas'],
        },
        descripcion: { control: 'text' },
        imagen: { control: 'text' },
    }
};

/**
 * Estado por defecto: Producto con toda su información.
 */
export const Default = {
    args: {
        nombre: "Pan Rústico",
        precio: 2.50,
        categoria: "Pan",
        descripcion: "Pan artesano cocinado en horno de leña con masa madre y larga fermentación.",
        imagen: "https://i.ibb.co/BHkPNrcv/pan-rustico.jpg"
    }
};

/**
 * Variante: Bollería (Croissant)
 */
export const Bolleria = {
    args: {
        nombre: "Croissant de Mantequilla",
        precio: 1.80,
        categoria: "Bollería",
        descripcion: "Crujiente hojaldre francés elaborado con mantequilla pura al 100%.",
        imagen: "https://i.ibb.co/688p57Yp/croissant.jpg"
    }
};

/**
 * Variante: Sin Imagen (Layout de reserva)
 */
export const SinImagen = {
    args: {
        nombre: "Producto Personalizado",
        precio: 0.00,
        categoria: "Otros",
        descripcion: "Prueba a cambiar cada uno de estos valores en los controles de la derecha.",
        imagen: ""
    }
};
