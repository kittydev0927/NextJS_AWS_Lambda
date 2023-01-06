const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-dark-mode/register',
    '@storybook/addon-a11y',
    'storybook-addon-designs/register',
    '@storybook/addon-storysource/register',
  ],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  staticDirs: ['../public'],
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@mui/styled-engine': '@mui/styled-engine-sc',
          '#auth': path.resolve(__dirname, '../auth'),
          '#components': path.resolve(__dirname, '../components'),
          '#api': path.resolve(__dirname, '../api'),
          '#constants': path.resolve(__dirname, '../constants'),
          '#public': path.resolve(__dirname, '../public'),
          '#stories': path.resolve(__dirname, '../stories'),
          '#styles': path.resolve(__dirname, '../styles'),
          '#utils': path.resolve(__dirname, '../utils'),
        },
      },
    };
  },
};
