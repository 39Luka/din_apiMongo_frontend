# Pages and Routing

Bakery++ works as a Single Page Application (SPA). This means it never reloads the entire browser; instead, it swaps the "center" of the page depending on the URL.

## 🛣️ Where can you go?

| Path | Component | The Page's Role |
| :--- | :--- | :--- |
| `/home` | `Home` | Shows a warm welcome with the main banner and popular products. |
| `/productos` | `ProductsPage` | The main shop window where you can search through everything. |
| `/productos/:id` | `DetailProductPage` | A focused view for one specific item. |
| `/anadir-producto` | `AdminPage` | A management area where new products are added. |

## 📐 The Page "Container"

Every page you visit is automatically placed inside `MainContent`. This component is like a frame that ensures:
1.  **Consistent Spacing**: Content never touches the screen edges.
2.  **Layout Logic**: The Header and Footer always stay where they belong.
3.  **Smooth Transitions**: Using the `Outlet` from React Router to swap content cleanly.
