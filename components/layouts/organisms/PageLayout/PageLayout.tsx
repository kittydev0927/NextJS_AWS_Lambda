import { LinearProgress, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { PortalUser } from '#auth/PortalUser';
import { UserContext } from '#auth/UserContext';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { theme as defaultTheme } from '#styles/styles';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { StyledPageLayout, StyledPageLayoutInner } from './PageLayout.styles';
import type { PageLayoutProps } from './PageLayout.types';

export const PageLayout: React.FC<PageLayoutProps> = ({
  theme,
  children,
  footerLinks,
  pageName,
  showBackToTop = false,
  userAuthContent,
  ...props
}) => {
  const appliedTheme = theme || defaultTheme;
  const [portalUser, setPortalUser] = useState<PortalUser | undefined>(undefined);
  useEffect(() => setPortalUser(new PortalUser()), []);

  const loaded = useRouteUnauthenticated(portalUser);
  return (
    <UserContext.Provider value={portalUser}>
      <ThemeProvider theme={appliedTheme}>
        {!loaded ? (
          <LinearProgress data-testid="loading" />
        ) : (
          <StyledPageLayout {...props} className="page-layout">
            <Header pageName={pageName} userAuthContent={userAuthContent} />
            <StyledPageLayoutInner>{children}</StyledPageLayoutInner>
            <Footer
              links={footerLinks}
              showBackToTop={showBackToTop}
              companyInfoLinkColor={defaultTheme.colors.white}
            />
          </StyledPageLayout>
        )}
      </ThemeProvider>
    </UserContext.Provider>
  );
};
