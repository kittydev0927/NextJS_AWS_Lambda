import { ThemeProvider } from '@mui/material';
import { useFlags } from 'launchdarkly-react-client-sdk';
import React, { useEffect, useState } from 'react';

import { PortalUser } from '#auth/PortalUser';
import { UserContext } from '#auth/UserContext';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { theme as defaultTheme } from '#styles/styles';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { StyledPageLayout, StyledPageLayoutInner } from '../PageLayout/PageLayout.styles';
import type { PageLayoutProps } from '../PageLayout/PageLayout.types';

export const PageLayoutNoAuth: React.FC<PageLayoutProps> = ({
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
  const { footerComponentDemo } = useFlags();

  return (
    <UserContext.Provider value={portalUser}>
      <ThemeProvider theme={appliedTheme}>
        <StyledPageLayout {...props} className="page-layout" data-testid="page-layout">
          <Header pageName={pageName} userAuthContent={userAuthContent} />
          <StyledPageLayoutInner>{children}</StyledPageLayoutInner>
          {footerComponentDemo ? (
            <Typography>Footer Component Off</Typography>
          ) : (
            <Footer
              links={footerLinks}
              showBackToTop={showBackToTop}
              companyInfoLinkColor={defaultTheme.colors.white}
            />
          )}
        </StyledPageLayout>
      </ThemeProvider>
    </UserContext.Provider>
  );
};
