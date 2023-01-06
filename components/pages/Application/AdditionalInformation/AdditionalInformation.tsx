import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';

import { ApplicationPageWrapper } from '#components/forms/molecules/ApplicationPageWrapper/ApplicationPageWrapper';
import { ApplicationAdditionalInfo } from '#components/forms/organisms/ApplicationForms/ApplicationAdditionalInfo/ApplicationAdditionalInfo';
import { TipsInnerContent } from '#components/layouts/molecules/TipsSideBar/InnerContent/TipsInnerContent';
import { PageLayoutApplication } from '#components/layouts/organisms/PageLayoutApplication/PageLayoutApplication';
import { theme } from '#styles/styles';
import { usePage } from '#utils/usePage';

import { StyledContainer } from './AdditionalInformation.styles';
import type { IAdditionalInformation } from './AdditionalInformation.types';

export const AdditionalInformation: React.FC<IAdditionalInformation> = ({ pageData }) => {
  const appTips = pageData.cPPApplicationTipsList.items[0];
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const [nextDisabled, setNextDisabled] = useState(true);
  const { prevPage, nextPage } = usePage();

  return (
    <PageLayoutApplication infoText="2022. All Rights Reserved Progress Residential ®">
      <ApplicationPageWrapper
        prevPage={async () => prevPage('/application/animals')}
        nextPage={async () => nextPage('/application/income-and-employment')}
        step={8}
        innerTheme={smallBreakpoint ? 'gradient' : 'plain'}
        outerTheme="plain"
        tipsContent={<TipsInnerContent appTips={appTips} />}
        isNextButtonDisabled={nextDisabled}
      >
        <StyledContainer data-testid="additional-information-page">
          <ApplicationAdditionalInfo setNextDisabled={setNextDisabled} />
        </StyledContainer>
      </ApplicationPageWrapper>
    </PageLayoutApplication>
  );
};
