/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unnecessary-type-arguments */
// The two lines above are required for LaunchDarkly to function correctly.
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '../styles/globals.scss';

import { StyledEngineProvider } from '@mui/styled-engine';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { ComponentType } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

export default withLDProvider({
  clientSideID: process.env.LAUNCHDARKLY_SDK_CLIENT_SIDE_ID!,
})(MyApp as ComponentType<{}>);
