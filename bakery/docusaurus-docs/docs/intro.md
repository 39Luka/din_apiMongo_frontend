# Welcome to Bakery++ Documentation

**Bakery++** is a React application built as a learning project for managing a bakery's product catalog. This documentation is designed to help you understand not just the code, but the professional tools used to document it.

## 📚 Documentation Systems

In a professional project, documentation is split into two parts. We've mirrored that here:

### 🎨 Storybook (The "Laboratory")
Think of Storybook as a laboratory where we test UI components in isolation.
- **Purpose**: To see how individual pieces (buttons, cards, banners) look and behave without loading the whole app.
- **Link**: 🔗 **[Open Storybook](http://localhost:6006)**

### 📖 Docusaurus (The "Blueprint")
This site is the blueprint of the entire house.
- **Purpose**: To understand the overall structure, the architecture, the data flow, and the coding standards.
- **Link**: You are currently reading it!

## 🚀 Quick Start

1. **Install**: Run `npm install` in the root folder.
2. **Launch App**: Run `npm run dev` and open `http://localhost:5173`.
3. **Launch Docs**: Run `npm run storybook` for component testing.

## 📁 Project Structure

```
bakery/
├── src/
│   ├── components/       # Organized by category
│   │   ├── layout/      # Header, Footer, Nav, etc.
│   │   ├── ui/          # Card, Banner, SearchBar
│   │   ├── products/    # Product-specific components
│   │   └── forms/       # Form components
│   ├── pages/           # Route components (pages)
│   ├── assets/          # Styles and static files
│   └── data/            # Mock data
├── stories/             # Storybook stories (mirrors components/)
└── docusaurus-docs/     # This documentation
```

## 🛠️ Tech Stack

- **React** 18+ with Hooks
- **React Router** for navigation
- **Vite** for fast development
- **Storybook** for component development
- **Docusaurus** for documentation
- **PropTypes** for runtime type checking

## 📖 Documentation Sections

- **[Architecture](architecture)** - System design and structure
- **[Components](components)** - Component organization overview
- **[Styling Guide](styling-guide)** - CSS architecture and conventions
- **[Development](development)** - Workflow and best practices
- **[User Manual](user-manual)** - How to use the application
- **[Pages](pages)** - Routing and page structure

## 📚 Next Steps

1. **Explore Components** → [Open Storybook](http://localhost:6006)
2. **Understand Architecture** → [Read Architecture Guide](architecture)
3. **Learn CSS Patterns** → [Check Styling Guide](styling-guide)
4. **Start Developing** → [Review Development Workflow](development)
