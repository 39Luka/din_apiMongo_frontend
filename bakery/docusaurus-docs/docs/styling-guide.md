# Styling Guide

Bakery++ uses a **modular CSS architecture** based on BEM methodology with CSS nesting for clean, maintainable styles.

## CSS Architecture

### File Structure
```
assets/styles/
├── index.css              # Main entry point
├── theme.css              # Design tokens (colors, typography)
├── reset.css              # CSS reset
├── base.css               # Base styles
├── utilities.css          # Utility classes
├── components/            # Component-specific styles
│   ├── header.css
│   ├── nav.css
│   ├── card.css
│   └── ...
└── pages/                 # Page-specific styles
    ├── product-detail.css
    └── admin-page.css
```

## BEM Methodology

### Naming Convention
```css
.block {}
.block__element {}
.block--modifier {}
```

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

## Component Patterns

### Card Pattern
```css
.card {
    background: var(--color-white);
    border-radius: 0.5rem;
    overflow: hidden;
    transition: transform 0.2s;
    
    &:hover {
        transform: translateY(-4px);
    }
    
    &__image {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }
}
```

### Button Pattern
```css
.button {
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: var(--fw-bold);
    cursor: pointer;
    transition: all 0.2s;
    
    &--primary {
        background: var(--color-primary);
        color: var(--color-white);
        
        &:hover {
            background: rgba(92, 41, 5, 0.9);
        }
    }
    
    &--secondary {
        background: var(--color-secondary);
        color: var(--color-black-1);
    }
}
```

## Accessibility in CSS

### Focus States
```css
.nav__link:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}
```

### Skip Link
```css
.skip-link {
    position: absolute;
    top: -100px;
    left: 0;
    
    &:focus {
        top: 0;
        z-index: 1000;
    }
}
```

## Best Practices

1. **Use design tokens** - Never hardcode colors or sizes
2. **Follow BEM** - Consistent naming prevents conflicts
3. **Mobile-first** - Start with mobile, enhance for desktop
4. **Semantic classes** - `.card__title` not `.text-large`
5. **Avoid !important** - Indicates architecture problems
6. **Use CSS nesting** - Keeps related styles together
7. **Modular files** - One file per component
8. **Document complex styles** - Add comments for non-obvious code

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
