import { LinearProgress, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { PortalUser } from '#auth/PortalUser';
import { UserContext } from '#auth/UserContext';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { theme as defaultTheme } from '#styles/styles';

import { HeaderApplication } from '../HeaderApplication/HeaderApplication';
import { PageFooter } from '../PageFooter/PageFooter';
import { StyledPageWrapper } from './PageLayoutApplication.styles';
import type { IPageLayoutApplication } from './PageLayoutApplication.types';

export const PageLayoutApplication: React.FC<IPageLayoutApplication> = ({ theme, children, infoText, ...props }) => {
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
          <StyledPageWrapper>
            <div {...props} className="page-layout">
              <HeaderApplication />
              <div>{children}</div>
              <PageFooter infoText={infoText} />
            </div>
          </StyledPageWrapper>
        )}
      </ThemeProvider>
    </UserContext.Provider>
  );
};
