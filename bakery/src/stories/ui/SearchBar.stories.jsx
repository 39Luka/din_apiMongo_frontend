import SearchBar from '../../components/ui/SearchBar.jsx';

export default {
    title: 'Components/SearchBar',
    component: SearchBar,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        searchTerm: '',
        onSearchChange: (value) => console.log('Search:', value),
    },
};

export const WithValue = {
    args: {
        searchTerm: 'Baguette',
        onSearchChange: (value) => console.log('Search:', value),
    },
};
