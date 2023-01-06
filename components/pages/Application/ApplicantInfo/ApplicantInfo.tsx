import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';

import { ApplicationPageWrapper } from '#components/forms/molecules/ApplicationPageWrapper/ApplicationPageWrapper';
import { ApplicantFields } from '#components/forms/organisms/ApplicantFields/ApplicantFields';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { TipsInnerContent } from '#components/layouts/molecules/TipsSideBar/InnerContent/TipsInnerContent';
import { PageLayoutApplication } from '#components/layouts/organisms/PageLayoutApplication/PageLayoutApplication';
import { theme } from '#styles/styles';
import { usePage } from '#utils/usePage';

import { StyledBottomContainer, StyledContainer, StyledHeader, StyledHyperLink } from './ApplicantInfo.styles';
import type { ApplicantInfoProps } from './ApplicantInfo.types';

export const ApplicantInfo: React.FC<ApplicantInfoProps> = ({ pageData }) => {
  const appTips = pageData.cPPApplicationTipsList.items[0];

  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const [nextDisabled, setNextDisabled] = useState(true);
  const { nextPage, prevPage } = usePage();

  // const router = useRouter();
  // const prevPage = useCallback(async () => {
  //   void router.push('/application/lease-details');
  // }, [router]);
  // const nextPage = useCallback(async () => {
  //   void router.push('/application/current-residence');
  // }, [router]);

  return (
    <PageLayoutApplication infoText="2022. All Rights Reserved Progress Residential ®">
      <ApplicationPageWrapper
        prevPage={async () => prevPage('/application/lease-details')}
        nextPage={async () => nextPage('/application/current-residence')}
        step={4}
        innerTheme={smallBreakpoint ? 'gradient' : 'plain'}
        outerTheme="plain"
        tipsContent={<TipsInnerContent appTips={appTips} />}
        isNextButtonDisabled={nextDisabled}
        textUnderButtons={
          <StyledBottomContainer>
            <Typography variant="body1">
              A credit and background screening will be completed for all applicants. Active duty military status will
              be verified. For more information about this, please
              <StyledHyperLink href="">click here.</StyledHyperLink>
            </Typography>
          </StyledBottomContainer>
        }
      >
        <StyledContainer data-testid="applicant-info-page">
          <StyledHeader variant="h6">Your Information</StyledHeader>
          <ApplicantFields setNextDisabled={setNextDisabled} />
        </StyledContainer>
      </ApplicationPageWrapper>
    </PageLayoutApplication>
  );
};
