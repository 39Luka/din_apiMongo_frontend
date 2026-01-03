import Section from '../../components/layout/Section';

export default {
    title: 'Layout/Section',
    component: Section,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        title: 'Sección de Ejemplo',
        children: <p style={{ padding: '1rem', border: '1px dashed #ccc' }}>Contenido de la sección aquí.</p>,
    },
};
