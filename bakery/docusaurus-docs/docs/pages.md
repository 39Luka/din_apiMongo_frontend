# Pages and Routing

Bakery++ is a Single Page Application (SPA) built with `react-router-dom`.

## 🛣️ Application Routes

| Path | Component | Description |
| :--- | :--- | :--- |
| `/home` | `Home` | Landing page with the hero banner and top sellers. |
| `/productos` | `ProductsPage` | Full catalog with search and filtering. |
| `/productos/:id` | `DetailProductPage` | Dynamic route for individual product details. |
| `/anadir-producto` | `AdminPage` | Protected area (simulated) for product management. |

## 📐 Page Structure

All pages are wrapped by the `MainContent` component, which provides a standard padding and layout constraint.

### Home Page
Displays the `Banner` and a `Section` containing a `RenderCards` list filtered by top sales.

### Products Page
Combines the `SearchBar` with a filtered list of `Card` components. It uses the `useMemo` hook to optimize search performance.

### Admin Page
Uses a local state `isAuthenticated` to toggle between:
1.  **Login View**: A centered card (`admin-login-card`) to prompt for simulated credentials.
2.  **Dashboard View**: The `ProductForm` for operational tasks.
