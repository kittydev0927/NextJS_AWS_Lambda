import type { OktaWidgetConfig } from '#components/forms/molecules/OktaWidget/OktaWidget.types';

export const OktaDomain = process.env.NEXT_PUBLIC_OKTA_DOMAIN || process.env.STORYBOOK_OKTA_DOMAIN;
export const OktaClientId = process.env.NEXT_PUBLIC_OKTA_CLIENT_ID || process.env.STORYBOOK_OKTA_CLIENT_ID;

export const DefaultOktaWidgetConfig: OktaWidgetConfig = {
  authParams: {},
  redirectUri: `https://${OktaDomain ?? ''}`,
  idpDisplay: 'SECONDARY',
  // idps: [
  //   {
  //     type: 'FACEBOOK',
  //     id: '0oa2bw4dvjog4Lev01d7',
  //   },
  //   {
  //     type: 'GOOGLE',
  //     id: '0oa2f2qfvpawBjIuY1d7',
  //   },
  // ],
  i18n: {
    en: {
      // Labels
      needhelp: 'Need help signing in?',
      'primaryauth.title': ' ',
      'primaryauth.username.placeholder': 'Email Address',
      'primaryauth.submit': 'Sign In',
      remember: ' ',
    },
  },
  scopes: ['email', 'offline_access', 'openid', 'profile'],
};
