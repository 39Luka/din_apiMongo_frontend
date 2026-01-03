import { MemoryRouter } from 'react-router-dom';
import Header from '../../components/layout/Header';

export default {
    title: 'Components/Header',
    component: Header,
    tags: ['autodocs'],
    decorators: [
        (StoryFn) => (
            <MemoryRouter>
                <StoryFn />
            </MemoryRouter>
        ),
    ],
};

export const Default = {};
