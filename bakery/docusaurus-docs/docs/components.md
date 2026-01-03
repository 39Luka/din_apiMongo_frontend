# Component Library

> 💡 **For interactive component documentation, visit [Storybook](http://localhost:6006)**  
> Storybook provides live examples, interactive controls, and auto-generated API docs from JSDoc.

## Component Organization

Bakery++ components are organized into **4 categories** for better maintainability:

### 🏗️ Layout (`components/layout/`)
Structural components that define the application's layout.

- **Header** - Top navigation with logo and menu
- **Footer** - Page footer with copyright
- **Nav** - Responsive navigation menu
- **MainContent** - Main content wrapper (React Router Outlet)
- **Section** - Page section container

### 🎨 UI (`components/ui/`)
Reusable presentational components.

- **Card** - Product preview card
- **Banner** - Hero banner with image
- **SearchBar** - Search input with filtering

### 🛍️ Products (`components/products/`)
Product-specific business logic components.

- **ProductDetail** - Full product display
- **ProductForm** - Add product form with validation
- **RenderCards** - Smart component for product grids

### 📝 Forms (`components/forms/`)
Reusable form components.

- **Field** - InputField, TextareaField, SelectField

## Quick Links

| Component | Storybook | Source Code |
|-----------|-----------|-------------|
| Card | [View](http://localhost:6006/?path=/docs/components-card--docs) | [Card.jsx](file:///c:/Users/Usuario/Documents/Bakery2/Bakery2/bakery/src/components/ui/Card.jsx) |
| Banner | [View](http://localhost:6006/?path=/docs/components-banner--docs) | [Banner.jsx](file:///c:/Users/Usuario/Documents/Bakery2/Bakery2/bakery/src/components/ui/Banner.jsx) |
| SearchBar | [View](http://localhost:6006/?path=/docs/components-searchbar--docs) | [SearchBar.jsx](file:///c:/Users/Usuario/Documents/Bakery2/Bakery2/bakery/src/components/ui/SearchBar.jsx) |
| Nav | [View](http://localhost:6006/?path=/docs/components-nav--docs) | [Nav.jsx](file:///c:/Users/Usuario/Documents/Bakery2/Bakery2/bakery/src/components/layout/Nav.jsx) |
| Header | [View](http://localhost:6006/?path=/docs/components-header--docs) | [Header.jsx](file:///c:/Users/Usuario/Documents/Bakery2/Bakery2/bakery/src/components/layout/Header.jsx) |
| Footer | [View](http://localhost:6006/?path=/docs/components-footer--docs) | [Footer.jsx](file:///c:/Users/Usuario/Documents/Bakery2/Bakery2/bakery/src/components/layout/Footer.jsx) |
| Section | [View](http://localhost:6006/?path=/docs/layout-section--docs) | [Section.jsx](file:///c:/Users/Usuario/Documents/Bakery2/Bakery2/bakery/src/components/layout/Section.jsx) |
| ProductDetail | [View](http://localhost:6006/?path=/docs/components-productdetail--docs) | [ProductDetail.jsx](file:///c:/Users/Usuario/Documents/Bakery2/Bakery2/bakery/src/components/products/ProductDetail.jsx) |
| ProductForm | [View](http://localhost:6006/?path=/docs/components-productform--docs) | [ProductForm.jsx](file:///c:/Users/Usuario/Documents/Bakery2/Bakery2/bakery/src/components/products/ProductForm.jsx) |
| RenderCards | [View](http://localhost:6006/?path=/docs/components-rendercards--docs) | [RenderCards.jsx](file:///c:/Users/Usuario/Documents/Bakery2/Bakery2/bakery/src/components/products/RenderCards.jsx) |
| Fields | [View](http://localhost:6006/?path=/docs/components-fields--docs) | [Field.jsx](file:///c:/Users/Usuario/Documents/Bakery2/Bakery2/bakery/src/components/forms/Field.jsx) |

## Design Principles

### Composition
Components are designed to be composed together:
```jsx
<Section title="Products">
    <SearchBar searchTerm={term} onSearchChange={setTerm} />
    <div className="product-grid">
        <RenderCards items={products} />
    </div>
</Section>
```

### Props Validation
All components use PropTypes - check Storybook for complete API docs.

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management

---

**📚 For detailed component APIs, examples, and interactive demos → [Open Storybook](http://localhost:6006)**
