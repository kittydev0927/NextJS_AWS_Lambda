import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import { ApplicationPageWrapper } from '#components/forms/molecules/ApplicationPageWrapper/ApplicationPageWrapper';
import { CurrentAddress } from '#components/forms/organisms/ApplicationForms/CurrentAddress/CurrentAddress';
import type { ICurrentAddressProps } from '#components/forms/organisms/ApplicationForms/CurrentAddress/CurrentAddress.types';
import { TipsInnerContent } from '#components/layouts/molecules/TipsSideBar/InnerContent/TipsInnerContent';
import { PageLayoutApplication } from '#components/layouts/organisms/PageLayoutApplication/PageLayoutApplication';
import { theme } from '#styles/styles';

import { StyledContent, StyledCurrentResidence } from './CurrentResidence.styles';
import type { CurrentResidenceProps } from './CurrentResidence.types';

export const CurrentResidence: React.FC<CurrentResidenceProps> = ({ pageData }) => {
  const appTips = pageData.cPPApplicationTipsList.items[0];

  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState<boolean>(true);

  const router = useRouter();
  const prevPage = useCallback(async () => {
    void router.push('/application/applicant-info');
  }, [router]);
  const nextPage = useCallback(async () => {
    void router.push('/application/occupants');
  }, [router]);

  const isFormValid: ICurrentAddressProps['isFormValid'] = (_values, state) => setIsNextButtonDisabled(!state);

  return (
    <StyledCurrentResidence>
      <PageLayoutApplication infoText="2022. All Rights Reserved Progress Residential ®">
        <ApplicationPageWrapper
          prevPage={prevPage}
          nextPage={nextPage}
          isNextButtonDisabled={isNextButtonDisabled}
          step={5}
          innerTheme={smallBreakpoint ? 'gradient' : 'plain'}
          outerTheme="plain"
          tipsContent={<TipsInnerContent appTips={appTips} />}
        >
          <StyledContent>
            <CurrentAddress isFormValid={isFormValid} />
          </StyledContent>
        </ApplicationPageWrapper>
      </PageLayoutApplication>
    </StyledCurrentResidence>
  );
};
