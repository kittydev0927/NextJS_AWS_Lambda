import { UserContext } from '#auth/UserContext';
import StoryRouter from '#stories/context/StoryRouter';
import StoryUser from '#stories/context/StoryUser';
import { theme } from '#styles/styles';
import { loadFontsForStorybook } from '#utils/loadFontsForStorybook';
import { ThemeProvider } from '@mui/material';
import { addons } from '@storybook/addons';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';
import React from 'react';
import './favicon.ico';
import { progressDark, progressLight } from './progressTheme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});

addons.setConfig({
  panelPosition: 'right',
});

// set the global MUI custom theme, user context, and a fake router.
const storyRouter = new StoryRouter();
const storyUser = new StoryUser();
export const decorators = [
  Story => (
    <RouterContext.Provider value={storyRouter}>
      <UserContext.Provider value={storyUser}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </UserContext.Provider>
    </RouterContext.Provider>
  ),
];

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  layout: 'fullscreen',
  viewMode: 'docs', // default to Docs view
  layout: 'fullscreen',
  addons: { panelPosition: 'right' },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...progressDark },
    // Override the default light theme
    light: { ...progressLight },
    stylePreview: true,
    classTarget: 'html',
  },
  // backgrounds addon customizations
  backgrounds: {
    grid: {
      cellSize: 100,
      opacity: 0.5,
      cellAmount: 5,
      offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY: 16,
    },
    values: [
      {
        name: 'light',
        value: 'rgb(251,244,244)',
      },
      {
        name: 'dark',
        value: theme.palette.primary,
      },
      {
        name: 'green',
        value: 'rgb(70,154,143)',
      },
      {
        name: 'yellow',
        value: 'rgb(240,183,64)',
      },
      {
        name: 'gradient',
        value: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
      },
    ],
  },
};

loadFontsForStorybook();
