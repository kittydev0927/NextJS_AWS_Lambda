import { useMediaQuery } from '@mui/material';
import React from 'react';

import { PageLayoutApplication } from '#components/layouts/organisms/PageLayoutApplication/PageLayoutApplication';
import { theme } from '#styles/styles';

import { ApplicationStatusContent } from '../../../layouts/organisms/ApplicationStatusContent/ApplicationStatusContent';
import { StyledPaper, StyledSolidBackground } from './ApplicationStatusPage.styles';
import type { IApplicationStatusPage } from './ApplicationStatusPage.types';

export const ApplicationStatusPage: React.FC<IApplicationStatusPage> = ({ currentAppStatus = 'processing' }) => {
  const breakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <PageLayoutApplication
      pageName="Application Status"
      data-testid="application-status-page"
      infoText={'2022. All Rights Reserved Progress Residential ®'}
    >
      <StyledSolidBackground>
        <StyledPaper
          innerElevation={0}
          outerElevation={10}
          showOuterPaper
          innerTheme={breakpoint ? 'gradient' : 'plain'}
          outerTheme="plain"
          className={`outer-paper ${currentAppStatus}`}
        >
          <ApplicationStatusContent currentAppStatus={currentAppStatus} />
        </StyledPaper>
      </StyledSolidBackground>
    </PageLayoutApplication>
  );
};
