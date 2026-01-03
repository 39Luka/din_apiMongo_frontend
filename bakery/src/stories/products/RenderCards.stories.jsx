import { MemoryRouter } from 'react-router-dom';
import RenderCards from '../../components/products/RenderCards';

export default {
    title: 'Components/RenderCards',
    component: RenderCards,
    tags: ['autodocs'],
    decorators: [
        (StoryFn) => (
            <MemoryRouter>
                <ul className="product-grid">
                    <StoryFn />
                </ul>
            </MemoryRouter>
        ),
    ],
};

const mockProducts = [
    { id: 1, nombre: 'Baguette Tradicional', descripcion: 'Pan francés crujiente', imagen: 'https://i.ibb.co/BHkPNrcv/pan-rustico.jpg', totalVentas: 150 },
    { id: 2, nombre: 'Croissant de Mantequilla', descripcion: 'Hojaldre artesanal', imagen: 'https://i.ibb.co/3ykSBMhC/bakery-hero.jpg', totalVentas: 200 },
    { id: 3, nombre: 'Pan de Centeno', descripcion: 'Con semillas', imagen: 'https://i.ibb.co/BHkPNrcv/pan-rustico.jpg', totalVentas: 80 },
    { id: 4, nombre: 'Brioche', descripcion: 'Suave y esponjoso', imagen: 'https://i.ibb.co/3ykSBMhC/bakery-hero.jpg', totalVentas: 120 },
];

export const Default = {
    args: {
        items: mockProducts,
    },
};

export const Limited = {
    args: {
        items: mockProducts,
        options: {
            maxItems: 2,
        },
    },
};

export const SortedByBestSellers = {
    args: {
        items: mockProducts,
        options: {
            maxItems: 3,
            order: (a, b) => b.totalVentas - a.totalVentas,
        },
    },
};
