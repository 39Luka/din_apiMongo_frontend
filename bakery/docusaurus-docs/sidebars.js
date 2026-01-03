// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['user-manual', 'development'],
    },
    {
      type: 'category',
      label: 'Architecture & Design',
      items: ['architecture', 'styling-guide'],
    },
    {
      type: 'category',
      label: 'Component Reference',
      items: [
        'components',
        'pages',
      ],
    },
  ],
};

export default sidebars;
