import { create } from '@storybook/theming';
import progressLogo from '../public/progress-logo-old.png';
import progressLogoDark from '../public/progress-logo.svg';
const theme = {
  primary: '#115E67',
  secondary: '#279989',
  tertiary: '#EBAD08',
  primaryText: '#FFFFFF',
  secondaryText: '#414042',
};

// Light Mode
export const progressLight = create({
  brandTitle: 'Progress Residential',
  brandImage: progressLogo,
  appBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,
  appContentBg: '#FFFFFF',
  barBg: '#FFFFFF',
  barSelectedColor: theme.secondary,
  barTextColor: theme.primary,
  base: 'light',
  colorPrimary: theme.primary,
  colorSecondary: theme.secondary,
  fontBase:
    '"Nunito Sans", -apple-system, ".SFNSText - Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode:
    '"Operator Mono", "Fira Code Retina", "Fira Code", "FiraCode - Retina", "Andale Mono", "Lucida Console", Consolas, Monaco, monospace',
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.1)',
  inputBorderRadius: 4,
  inputTextColor: '#333333',
  textColor: '#333333',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#666666',
  //   brandUrl: 'https://example.com',
});

// Dark Mode
export const progressDark = create({
  appBg: '#2f2f2f',
  appBorderColor: 'rgba(255,255,255,.1)',
  appBorderRadius: 4,
  appContentBg: '#333333',
  barBg: '#333333',
  barSelectedColor: theme.secondary,
  barTextColor: '#999999',
  base: 'dark',
  colorPrimary: theme.primary,
  colorSecondary: theme.secondary,
  fontBase:
    '"Nunito Sans", -apple-system, ".SFNSText - Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode:
    '"Operator Mono", "Fira Code Retina", "Fira Code", "FiraCode - Retina", "Andale Mono", "Lucida Console", Consolas, Monaco, monospace',
  inputBg: '#3f3f3f',
  inputBorder: 'rgba(0,0,0,.3)',
  inputBorderRadius: 4,
  inputTextColor: '#FFFFFF',
  textColor: '#FFFFFF',
  textInverseColor: '#333333',
  textMutedColor: '#999999',
  brandTitle: 'Progress Residential',
  brandImage: progressLogoDark,
  //   brandUrl: 'https://example.com',
});
