import { MemoryRouter } from 'react-router-dom';
import Nav from '../../components/layout/Nav';

export default {
    title: 'Components/Nav',
    component: Nav,
    tags: ['autodocs'],
    decorators: [
        (StoryFn) => (
            <MemoryRouter>
                <div style={{ padding: '3rem', backgroundColor: '#f5f5f5' }}>
                    <StoryFn />
                </div>
            </MemoryRouter>
        ),
    ],
};

const mockLinks = [
    { to: '/home', label: 'Inicio' },
    { to: '/products', label: 'Productos' },
    { to: '/add-product', label: 'Administración' },
];

export const Desktop = {
    args: {
        links: mockLinks,
    },
};

export const MobileViewport = {
    args: {
        links: mockLinks,
    },
    parameters: {
        viewport: {
            defaultViewport: 'iphone6',
        },
    },
};
