import type { OktaSignInExternalIdentityProvider } from '@okta/okta-signin-widget';

export interface OktaWidgetConfig {
  authParams?: Record<string, unknown>;
  i18n?: {
    en: {
      needhelp: string;
      'primaryauth.title': string;
      'primaryauth.username.placeholder': string;
      'primaryauth.submit': string;
      remember: string;
    };
  };
  idpDisplay?: 'PRIMARY' | 'SECONDARY';
  idps?: OktaSignInExternalIdentityProvider[];
  redirectUri?: string;
  scopes?: readonly string[];
  flow?: string;
}

export interface OktaWidgetProps {
  readonly onSuccess?: () => unknown;
  readonly onError?: () => unknown;
  flow?: string;
}
