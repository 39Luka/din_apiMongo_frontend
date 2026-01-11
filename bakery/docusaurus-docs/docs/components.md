# Component Library

> 💡 **For interactive component documentation, visit [Storybook](http://localhost:6006)**  
> Storybook provides live examples, interactive controls, and auto-generated API docs from JSDoc.

## Component Organization

Bakery++ components are organized into **4 categories**. Choosing the right one helps keep the project clean:

### 🏗️ Layout (`components/layout/`)
**When to use**: These are the "bones" of the app. Use these for things that stay on the screen across different pages or wrap the entire view.
- **Header/Footer**: Permanent top and bottom bars.
- **Nav**: The main menu.
- **Section**: Use this to wrap every new content block on a page.

### 🎨 UI (`components/ui/`)
**When to use**: These are "dumb" components. They only care about how things look. Use these for reusable pieces that don't know anything about "Products" or "Bakery" logic.
- **Card**: A generic box with an image and text.
- **Banner**: A big hero section.
- **SearchBar**: Just an input field with an icon.

### 🛍️ Products (`components/products/`)
**When to use**: These are "smart" components. They are specific to our bakery. Use these when you need to handle product data, prices, or categories.
- **ProductDetail**: Shows all data for one specific bread/pastry.
- **RenderCards**: Takes a list of products and turns them into a grid of cards.

### 📝 Forms (`components/forms/`)
**When to use**: Use these to build forms. They handle labels, error messages, and validation.

## Design Principles

- **Composition**: Components are designed to work together hierarchically.
- **Props Validation**: Every component has `PropTypes` defined to prevent bugs.
- **Accessibility**: Built-in support for ARIA labels and semantic HTML.

---

**📚 For detailed component APIs and examples → [Open Storybook](http://localhost:6006)**
