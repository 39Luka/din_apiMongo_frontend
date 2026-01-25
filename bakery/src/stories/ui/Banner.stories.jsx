import Banner from '../../components/common/Banner.jsx';

export default {
    title: 'Components/Banner',
    component: Banner,
    tags: ['autodocs'],
    argTypes: {
        image: { control: 'text' },
    },
};

export const Default = {
    args: {
        image: 'https://i.ibb.co/BHkPNrcv/pan-rustico.jpg',
        title: 'Nuestros Productos',
        content: 'Filiación directa con el productor, calidad garantizada.',
    },
};

export const Welcome = {
    args: {
        image: 'https://i.ibb.co/3ykSBMhC/bakery-hero.jpg',
        title: 'Bienvenido a Bakery++',
        content: 'Artesanía en cada trozo de pan.',
    },
};
