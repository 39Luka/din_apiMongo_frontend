# Development Workflow

This guide covers the development workflow, best practices, and common tasks for working on Bakery++.

## Getting Started

### Initial Setup
```bash
# Clone the repository
git clone <repository-url>
cd bakery

# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook (in another terminal)
npm run storybook
```

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
- `components/ui/` - Reusable UI elements
- `components/products/` - Product-specific components
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

### JavaScript/JSX
- Use **functional components** with hooks
- Use **destructuring** for props
- Use **arrow functions** for event handlers
- Keep components **small and focused**
- Extract complex logic into **custom hooks**

### CSS
- Follow **BEM methodology**
- Use **design tokens** from `theme.css`
- Write **mobile-first** media queries
- Keep selectors **low specificity**
- One component = one CSS file

### Documentation
- Write **JSDoc** in English for all components
- Document **all props** with types and descriptions
- Add **usage examples** in Storybook
- Keep **UI text** in Spanish

## Git Workflow

### Branch Naming
```
feature/component-name
fix/bug-description
docs/documentation-update
refactor/code-improvement
```

### Commit Messages
```
feat: add ProductCard component
fix: resolve navigation menu overflow
docs: update component API reference
style: improve button hover states
refactor: extract form validation logic
```

## Testing Checklist

Before committing:
- [ ] Component renders without errors
- [ ] PropTypes validation works
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Accessibility checked (keyboard navigation, screen readers)
- [ ] Storybook story created and working
- [ ] JSDoc documentation complete
- [ ] No console errors or warnings
- [ ] Code follows style guidelines

## Common Tasks

### Adding a New Page
1. Create page component in `src/pages/`
2. Add route in `src/routes/AppRouter.jsx`
3. Add navigation link in `Header.jsx` (if needed)
4. Create page-specific styles if needed

### Updating Styles
1. Modify component CSS file
2. Check all breakpoints
3. Verify no regressions in other components
4. Update Storybook if visual changes

### Adding New Data
1. Update `src/data/productos.js`
2. Ensure data structure matches PropTypes
3. Test with new data in development

## Performance Tips

- Use `useMemo` for expensive computations
- Use `useCallback` for event handlers passed as props
- Lazy load images with `loading="lazy"`
- Code split routes with React.lazy()
- Optimize images before adding to project

## Debugging

### React DevTools
- Install React DevTools browser extension
- Inspect component tree
- Check props and state
- Profile performance

### Console Debugging
```javascript
console.log('Debug:', { prop1, prop2 });
console.table(arrayData);
console.error('Error:', errorMessage);
```

### Storybook Debugging
- Isolate component in Storybook
- Test different prop combinations
- Check console for PropTypes warnings
- Use Controls panel to test edge cases

## Build and Deploy

### Production Build
```bash
npm run build
```
- Creates optimized build in `dist/`
- Minifies and bundles code
- Ready for deployment

### Preview Production Build
```bash
npm run preview
```
- Test production build locally
- Verify all features work

## Resources

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Storybook Docs](https://storybook.js.org/docs)
- [BEM Methodology](http://getbem.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
