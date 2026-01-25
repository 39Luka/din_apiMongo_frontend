import { MemoryRouter } from 'react-router-dom';
import RenderCards from '../../components/features/products/RenderCards';

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
    { id: 1, name: 'Baguette Tradicional', description: 'Pan francés crujiente', image: 'https://i.ibb.co/BHkPNrcv/pan-rustico.jpg', totalSales: 150 },
    { id: 2, name: 'Croissant de Mantequilla', description: 'Hojaldre artesanal', image: 'https://i.ibb.co/3ykSBMhC/bakery-hero.jpg', totalSales: 200 },
    { id: 3, name: 'Pan de Centeno', description: 'Con semillas', image: 'https://i.ibb.co/BHkPNrcv/pan-rustico.jpg', totalSales: 80 },
    { id: 4, name: 'Brioche', description: 'Suave y esponjoso', image: 'https://i.ibb.co/3ykSBMhC/bakery-hero.jpg', totalSales: 120 },
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
            order: (a, b) => b.totalSales - a.totalSales,
        },
    },
};
