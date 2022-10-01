const { viteFinalFactory } = require('storybook-design-token');

/** @type {import('@storybook/react/types').StorybookConfig} */
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', 'storybook-design-token'],
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: viteFinalFactory(),
};
