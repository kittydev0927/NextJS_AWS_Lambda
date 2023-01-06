import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

import type { Tokens } from '@okta/okta-auth-js';
import type OktaSignIn from '@okta/okta-signin-widget';
import type { OktaSignInConfig } from '@okta/okta-signin-widget';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import { useSuccessRegistration } from '#auth/UseSuccessRegistration';
import { DefaultOktaWidgetConfig, OktaClientId, OktaDomain } from '#constants/oktaWidgetConfig';

import { StyledOktaSignInWidget } from './OktaWidget.styles';
import type { OktaWidgetProps } from './OktaWidget.types';

type IOktaWidget = React.FC<OktaWidgetProps> & {
  instance?: Promise<OktaSignIn>;
  instanceRendered?: boolean;
};

export const OktaWidget: IOktaWidget = ({ onSuccess, onError }) => {
  const [authPromise, setAuthPromise] = useState<Promise<Tokens> | null>(null);
  const [widgetPrepared, setWidgetPrepared] = useState(false);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const handleSuccess = useSuccessRegistration(onSuccess);

  const recoveryToken = router.query.token?.toString()?.split('/')?.pop();

  // Load the Okta sign-in widget. We need to do this dynamically because the
  // widget depends on browser APIs that are not available server-side.
  useEffect(() => {
    if ((!OktaDomain && !OktaClientId) || !router.isReady) {
      return;
    }

    const config = {
      ...DefaultOktaWidgetConfig,
      baseUrl: `https://${OktaDomain}`,
      clientId: OktaClientId,
      recoveryToken: recoveryToken ?? undefined,
      flow: recoveryToken ? 'resetPassword' : 'login',
    };

    void (async () => {
      await prepareWidget(config, recoveryToken);
      setWidgetPrepared(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  // Render the widget and wait for the user to do something with it.
  useEffect(() => {
    const { current: container } = widgetRef;
    const { instance } = OktaWidget;
    if (!widgetPrepared || !container || !instance) {
      return;
    }

    let widget: Awaited<typeof instance>;
    let cancelled = false;

    void (async () => {
      widget = await instance;
      if (cancelled) {
        return;
      }

      if (OktaWidget.instanceRendered) {
        widget.remove();
      }

      const { scopes } = DefaultOktaWidgetConfig;

      setAuthPromise(
        widget.showSignInToGetTokens({
          el: container,
          scopes: scopes ? [...scopes] : undefined,
        }),
      );

      OktaWidget.instanceRendered = true;
    })();

    return () => {
      cancelled = true;
      if (OktaWidget.instanceRendered) {
        widget?.remove();
        OktaWidget.instanceRendered = false;
      }
    };
  }, [widgetPrepared, widgetRef]);

  // Respond to the results of the user's interaction.
  useEffect(() => {
    const { instance } = OktaWidget;
    void respondToWidget(authPromise, instance, handleSuccess, onError);
  }, [authPromise, handleSuccess, onError]);

  if (!OktaClientId) {
    console.warn('Okta client id is not available.');
    return <></>;
  }

  return <StyledOktaSignInWidget ref={widgetRef} />;
};

async function prepareWidget(
  config: OktaSignInConfig,
  recoveryToken: string | string[] | undefined,
): Promise<OktaSignIn> {
  // Note for future developers: although the `redirectUri` is required, we
  // are not using it. Our widget is using the "SPA Application" flow (that is
  // Okta's RAS Syndrome name for it). Documentation for this flow can be
  // found here: https://github.com/okta/okta-signin-widget#spa-application
  //
  // Notably, the redirect_uri must be configured in Okta as a valid
  // redirect_uri for this application (in other words, they want to make sure
  // they are redirecting you back to the application you started from).
  const redirectUri = new URL('/', window.location.href).toString();
  const oktaSignInConfig = { ...config, redirectUri };
  return OktaWidget.instance ?? (OktaWidget.instance = loadWidget(oktaSignInConfig, recoveryToken));
}

async function loadWidget(config: OktaSignInConfig, recoveryToken: string | string[] | undefined): Promise<OktaSignIn> {
  const ns = await import('@okta/okta-signin-widget');
  const widget = new ns.default(config);

  if (recoveryToken) {
    config.recoveryToken = recoveryToken;
  }
  // Okta errors are not otherwise surfaced, thanks for a lost two hours >:-(
  widget.on('afterError', (context, error) => {
    console.error('Okta widget error', context, error);
  });

  return widget;
}

async function respondToWidget(
  authPromise: Promise<Tokens> | null,
  instance: Promise<OktaSignIn> | undefined,
  onSuccess: OktaWidgetProps['onSuccess'],
  onError: OktaWidgetProps['onError'],
) {
  let token: Tokens | null;
  try {
    token = await authPromise;
  } catch (ex: unknown) {
    console.warn('Error authenticating', ex);
    onError?.();
    return;
  }

  if (token) {
    const widget = await instance;
    if (widget) {
      widget.authClient.tokenManager.setTokens(token);
    }

    onSuccess?.();
  }
}
