# Development Workflow

This guide covers the development workflow, best practices, and common tasks for working on Bakery++.

## Guide: Adding a New Feature

If you want to add something new (like a "Sales" page), follow these steps:

1. **Plan the Data**: Decide if you need new data in `src/data/products.js`.
2. **Create the Page**: Create a new file in `src/pages/SalesPage.jsx`.
3. **Register the Route**: Add the new path in `src/routes/AppRouter.jsx`.
4. **Add to Navigation**: Update `Header.jsx` so users can find your page.
5. **Build Components**: If the page needs new UI, create components in `src/components/common/`.
6. **Style it**: Create a CSS file in `assets/styles/pages/` and import it in `index.css`.

## Development Servers

### Main Application
```bash
npm run dev
```
- Runs on: http://localhost:5173
- Hot Module Replacement (HMR) enabled
- Fast refresh for instant updates

### Storybook
```bash
npm run storybook
```
- Runs on: http://localhost:6006
- Interactive component development
- Automatic JSDoc extraction

### Docusaurus
```bash
cd docusaurus-docs
npm start
```
- Runs on: http://localhost:3000
- Live documentation preview

## Creating New Components

### 1. Choose the Right Category
Place your component in the appropriate folder:
- `components/layout/` - Structural components
- `components/ui/` - Atomic UI elements (Spinner, SkipLink)
- `components/common/` - Resuable base components (Card, SearchBar)
- `components/features/products/` - Product-specific logic
- `components/forms/` - Form-related components

### 2. Component Template
```javascript
/**
 * ComponentName
 * 
 * Brief description of what this component does.
 * 
 * @component
 * @param {Object} props
 * @param {string} props.propName - Description of prop
 */
function ComponentName({ propName }) {
    return (
        <div className="component-name">
            {/* Component content */}
        </div>
    );
}

ComponentName.propTypes = {
    propName: PropTypes.string.isRequired,
};

export default ComponentName;
```

### 3. Create Styles
Create a corresponding CSS file in `assets/styles/components/`:

```css
/* component-name.css */
.component-name {
    /* Base styles */
    
    &__element {
        /* Element styles */
    }
    
    &--modifier {
        /* Modifier styles */
    }
}
```

### 4. Create Storybook Story
Create a story file in the appropriate `stories/` subfolder:

```javascript
import ComponentName from '../../components/category/ComponentName.jsx';

export default {
    title: 'Category/ComponentName',
    component: ComponentName,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        propName: 'value',
    },
};
```

## Code Style Guidelines

- **Functional components**: Use hooks like `useState` and `useEffect`.
- **Props**: Always use destructuring and define `PropTypes`.
- **CSS**: Use BEM methodology and design tokens.
- **Naming**: Use clear, descriptive names for variables and components.

## Common Tasks

### Adding a New Page
1. Create a component in `src/pages/`.
2. Add the route in `src/routes/AppRouter.jsx`.
3. Link it in the `Header.jsx` menu.

### Working with Data
- Update `src/data/products.js` to add or modify products.

## Debugging

- **React DevTools**: Use it to inspect props and state.
- **Console**: Use `console.log()` to check data values.
- **Storybook**: Use it to test components in isolation.

## Build for Production

To create a final build:
```bash
npm run build
```
The output will be in the `dist/` folder.
