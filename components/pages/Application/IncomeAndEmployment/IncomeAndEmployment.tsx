import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

import { ToolTip } from '#components/forms/atoms/ToolTip/ToolTip';
import { ApplicationPageWrapper } from '#components/forms/molecules/ApplicationPageWrapper/ApplicationPageWrapper';
import { TipsInnerContent } from '#components/layouts/molecules/TipsSideBar/InnerContent/TipsInnerContent';
import { PageLayoutApplication } from '#components/layouts/organisms/PageLayoutApplication/PageLayoutApplication';
import {
  StyledHeader,
  StyledHeaderHousing,
  StyledMonthlyText,
  StyledMonthlyTextCon,
  StyledPerMonthText,
  StyledText,
  StyledTextHousing,
  StyledToolTipContainer,
} from '#components/pages/Application/IncomeAndEmployment/IncomeAndEmployment.styles';
import { StyledOccupants } from '#styles/application/occupants.styles';
import { theme } from '#styles/styles';

import type { IncomeAndEmploymentPageProps } from './IncomeAndEmployment.types';

export const IncomeAndEmployment: React.FC<IncomeAndEmploymentPageProps> = ({ housingChoice = false, pageData }) => {
  const appTips = pageData.cPPApplicationTipsList.items[0];

  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const [recommendedIncome] = useState<number>(1000);
  const [tips, setTips] = useState<boolean>(false);

  const router = useRouter();
  const prevPage = useCallback(async () => {
    void router.push('/application/vehicles');
  }, [router]);
  const nextPage = useCallback(async () => {
    void router.push('/application/payment');
  }, [router]);

  //justification: Will this housing choice come from the profile? (if so will use a useEffect hook to render the correct content)
  const [housingChoiceState, setHousingChoiceState] = useState<boolean>();
  useEffect(() => {
    setHousingChoiceState(housingChoice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledOccupants data-testid="income-and-employment-page">
      <PageLayoutApplication infoText="2022. All Rights Reserved Progress Residential ®">
        <ApplicationPageWrapper
          prevPage={prevPage}
          nextPage={nextPage}
          step={9}
          innerTheme={smallBreakpoint ? 'gradient' : 'plain'}
          outerTheme="plain"
          tipsContent={<TipsInnerContent appTips={appTips} />}
          textUnderButtons="Following your application, you'll need to pay a security deposit to reserve the home, which
                    can be 1-3x the monthly rent, depending on your screening results."
        >
          {!housingChoiceState ? (
            <div data-testid="income-page-no-housing-choice">
              <StyledHeader variant="h6" textAlign="center">
                To qualify to rent this home, we recommend a gross household income of at least:
              </StyledHeader>
              <StyledMonthlyTextCon>
                <StyledMonthlyText data-testid="styled-monthly-text">${recommendedIncome}</StyledMonthlyText>
                <StyledPerMonthText>/Mo</StyledPerMonthText>
                <StyledToolTipContainer>
                  {/* Tool Tip text not shown in designs */}
                  <ToolTip open={tips} content={[{ value: 'Example Text Here' }]} setOpen={setTips} />
                </StyledToolTipContainer>
              </StyledMonthlyTextCon>
              <StyledText>The next step is to verify your individual income.</StyledText>
            </div>
          ) : (
            <div data-testid="income-page-housing-choice">
              <StyledHeaderHousing variant="h6" textAlign="center">
                It looks like you have a Housing Choice voucher.
              </StyledHeaderHousing>
              <StyledTextHousing>
                In addition to the housing Choice voucher, we would like to verify any additional income you may have
                that could help qualify you for this home.
              </StyledTextHousing>
            </div>
          )}
        </ApplicationPageWrapper>
      </PageLayoutApplication>
    </StyledOccupants>
  );
};
