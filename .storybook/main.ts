import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-actions",
    "@storybook/addon-controls",
    "@storybook/addon-backgrounds",
    "@storybook/addon-viewport",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
    "@storybook/addon-highlight"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "docs": {
    "autodocs": false
  }
};
export default config;