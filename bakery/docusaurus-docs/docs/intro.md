# Welcome to Bakery++ Documentation

**Bakery++** is a modern, accessible React application for managing a bakery product catalog. Built with best practices in mind, it showcases a clean architecture, comprehensive documentation, and a focus on user experience.

## 📚 Documentation Tools

This project uses **two complementary documentation systems**:

### 🎨 Storybook (Component Documentation)
**Use Storybook for**: Component APIs, visual examples, interactive testing

- 🔗 **[Open Storybook](http://localhost:6006)**
- Interactive component playground
- Auto-generated API docs from JSDoc
- Live prop controls and examples
- Visual regression testing

### 📖 Docusaurus (Architecture & Guides)
**Use Docusaurus for**: System architecture, workflows, guides

- Architecture and design patterns
- Development workflows
- Styling conventions
- Project overview

> 💡 **Quick Tip**: For component details → use **Storybook**. For system understanding → use **Docusaurus**.

## 🎯 Project Overview

This application demonstrates:
- **Component-based architecture** with React
- **Responsive design** using BEM methodology
- **Accessibility-first** approach (ARIA labels, semantic HTML)
- **Type safety** with PropTypes
- **Interactive documentation** via Storybook
- **Technical documentation** via Docusaurus

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server (http://localhost:5173)
npm run dev

# Run Storybook (http://localhost:6006)
npm run storybook

# Run Docusaurus (http://localhost:3000)
cd docusaurus-docs && npm start
```

## 📁 Project Structure

```
bakery/
├── src/
│   ├── components/       # Organized by category
│   │   ├── layout/      # Header, Footer, Nav, etc.
│   │   ├── ui/          # Card, Banner, SearchBar
│   │   ├── products/    # Product-specific components
│   │   └── forms/       # Form components
│   ├── pages/           # Route components
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
