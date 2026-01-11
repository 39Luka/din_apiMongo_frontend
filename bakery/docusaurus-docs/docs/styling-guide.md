# Styling Guide

Bakery++ uses **Modern Vanilla CSS**. We don't use heavy frameworks like Tailwind or Bootstrap because we want to learn how the browser actually works.

## 🧱 Why BEM and Nesting?

We use the **BEM (Block Element Modifier)** methodology for one reason: **Predictability**.

- **B**lock: The whole component (`.card`).
- **E**lement: A part of it (`.card__image`).
- **M**odifier: A variation (`.card--large`).

**The Benefit**: You can change the styles of a "Card" without accidentally breaking the "Header". It keeps your styles isolated.

## 🎨 Why CSS Variables?

In `theme.css`, we define variables for colors and sizes:
```css
:root {
  --color-primary: #5c2905;
}
```
**The Benefit**: If you want to change the "Theme" of the bakery from brown to blue, you only change **one line of code** instead of searching through 20 files.

### Example: Card Component
```css
/* Block */
.card {
    background: white;
    border-radius: 0.5rem;
}

/* Element */
.card__image {
    width: 100%;
    height: auto;
}

.card__title {
    font-size: 1.25rem;
    font-weight: bold;
}

/* Modifier */
.card--featured {
    border: 2px solid var(--color-primary);
}
```

## Design Tokens

All design values are centralized in `theme.css`:

### Colors
```css
:root {
    /* Brand Colors */
    --color-primary: rgba(92, 41, 5, 1);      /* Brown */
    --color-secondary: rgba(224, 187, 228, 1); /* Lavender */
    
    /* Grayscale */
    --color-black-1: rgba(0, 0, 0, 1);
    --color-grey-3: rgba(130, 130, 130, 1);
    --color-white: rgba(255, 255, 255, 1);
    
    /* Feedback Colors */
    --color-error: rgba(235, 87, 87, 1);
    --color-success: rgba(39, 174, 96, 1);
    --color-warning: rgba(226, 185, 59, 1);
}
```

### Typography
```css
:root {
    /* Font Family */
    --font-family-base: "Inter", Helvetica, sans-serif;
    
    /* Headings */
    --heading-h1-size: 2.5rem;
    --heading-h2-size: 2rem;
    --heading-h3-size: 1.75rem;
    
    /* Body Text */
    --text-normal-size: 1rem;
    --text-small-size: 0.875rem;
}
```

### Spacing
```css
:root {
    --header-height: 8.25rem;
    --container-width: 72rem;
    --dropshadow: 0px 4px 24px 0px rgba(9, 44, 76, 0.4);
}
```

## CSS Nesting

We use modern CSS nesting for cleaner code:

```css
.nav {
    position: relative;
    
    &__toggle {
        font-size: 1.5rem;
        cursor: pointer;
    }
    
    &__link {
        padding: 0.5rem 0.75rem;
        
        &:hover,
        &--active {
            color: var(--color-primary);
        }
    }
}
```

## Responsive Design

### Mobile-First Approach
```css
/* Base styles (mobile) */
.nav__menu--desktop {
    display: none;
}

/* Tablet and up */
@media (min-width: 769px) {
    .nav__menu--desktop {
        display: flex;
    }
    
    .nav__toggle {
        display: none;
    }
}
```

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 769px - 1024px
- **Desktop**: > 1024px

## Accessibility in CSS

We use CSS to ensure the site is accessible:
- **Focus States**: All interactive elements have high-visibility focus rings.
- **Skip Link**: Allows keyboard users to jump straight to the main content.
- **Reduced Motion**: Respects users who prefer less animation.

## Styling Best Practices

1. **Use Variables**: Always use `theme.css` for colors and sizes.
2. **BEM Naming**: Keep names consistent to avoid style "pollution".
3. **Mobile First**: Design for mobile first, then add bigger screens.
4. **Simple Selectors**: Avoid deep nesting or complex selectors.

## Animation Guidelines

### Subtle Transitions
```css
.card {
    transition: transform 0.2s ease-out;
}

.button {
    transition: all 0.2s ease-in-out;
}
```

### Respect User Preferences
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```
