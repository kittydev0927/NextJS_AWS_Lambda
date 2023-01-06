import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

import { createApplicationData } from '#api/aem/application/sendApplicationData/creatApplicationData';
import { useProfile } from '#auth/UseProfile';
import { ApplicationPageWrapper } from '#components/forms/molecules/ApplicationPageWrapper/ApplicationPageWrapper';
import { MultiSelect } from '#components/forms/molecules/MultiSelect/MultiSelect';
import type { MultiSelectOptionProps } from '#components/forms/molecules/MultiSelect/MultiSelect.types';
import { TipsInnerContent } from '#components/layouts/molecules/TipsSideBar/InnerContent/TipsInnerContent';
import { theme } from '#styles/styles';

import {
  StyledBackground,
  StyledContainer,
  StyledHeader,
  StyledMultiSelectCon,
  StyledPageLayoutApplication,
} from './Background.styles';
import type { BackgroundProps } from './Background.types';

export const Background: React.FC<BackgroundProps> = ({ primaryApplicant = true, pageData }) => {
  const user = useProfile();
  const userName = user ? user.firstName : '';

  const appTips = pageData.cPPApplicationTipsList.items[0];
  const headerContent = pageData.backgroundContent.items[0].cfHeading.json[0].content[0].value || '';
  const backgroundOptions = pageData.backgroundContent.items[0].cfContent.json[0].content as MultiSelectOptionProps[];

  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  const [value, setValue] = useState<MultiSelectOptionProps[]>([]);
  const [nextPath, setNextPath] = useState('/application/lease-details');
  const valid = value.length > 0;
  const router = useRouter();
  const prevPage = useCallback(async () => {
    void router.push(`${primaryApplicant ? '/' : '/application/applicants'}`);
  }, [primaryApplicant, router]);
  const nextPage = useCallback(async () => {
    const data: unknown = createApplicationData(userName);
    console.warn(data);
    void router.push(nextPath);
  }, [nextPath, router, userName]);

  useEffect(() => {
    if (value.length > 0) {
      const isNoneofAbove = value.some(item => item.content[0].value === 'None of the Above');
      if (!isNoneofAbove) {
        setNextPath('/application/background-failure');
      }
    }
  }, [value]);

  return (
    <StyledBackground data-testid="background-page">
      <StyledPageLayoutApplication infoText="2022. All Rights Reserved Progress Residential ®">
        <ApplicationPageWrapper
          innerTheme={smallBreakpoint ? 'gradient' : 'plain'}
          isNextButtonDisabled={!valid}
          nextPage={nextPage}
          outerTheme="plain"
          prevPage={prevPage}
          step={primaryApplicant ? 1 : 2}
          tipsContent={<TipsInnerContent appTips={appTips} />}
        >
          <Content setValue={setValue} headerContent={headerContent} options={backgroundOptions} />
        </ApplicationPageWrapper>
      </StyledPageLayoutApplication>
    </StyledBackground>
  );
};

const Content = ({
  setValue,
  headerContent,
  options,
}: {
  setValue: (newValue: MultiSelectOptionProps[]) => void;
  headerContent: string | undefined;
  options: MultiSelectOptionProps[];
}) => {
  const onSelectedOptions = (selectedOptions: MultiSelectOptionProps[]) => {
    setValue(selectedOptions);
  };

  return (
    <StyledContainer data-testid="background-page">
      <StyledHeader variant="h6" data-testid="background-header">
        {headerContent}
      </StyledHeader>
      <StyledMultiSelectCon>
        <MultiSelect options={options} onSelectedOptions={onSelectedOptions} />
      </StyledMultiSelectCon>
    </StyledContainer>
  );
};
