import Card from "../../components/ui/Card.jsx";

export default {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: 'text',
        },
        description: {
            control: 'text',
        },
        image: {
            control: 'text',
        }
    }
};

/**
 * Tarjeta por defecto (Pan)
 */
export const Default = {
    args: {
        title: "Pan Integral",
        description: "Rico en fibra y elaborado con granos seleccionados.",
        image: "https://i.ibb.co/BHkPNrcv/pan-rustico.jpg"
    }
};

/**
 * Tarjeta de Bollería
 */
export const Bolleria = {
    args: {
        title: "Napolitana de Chocolate",
        description: "Rellena de crema de cacao y cobertura crujiente.",
        image: "https://i.ibb.co/688p57Yp/croissant.jpg"
    }
};

/**
 * Tarjeta sin descripción larga
 */
export const Corta = {
    args: {
        title: "Pan de molde",
        description: "Ideal para tus desayunos.",
        image: "https://i.ibb.co/BHkPNrcv/pan-rustico.jpg"
    }
};
