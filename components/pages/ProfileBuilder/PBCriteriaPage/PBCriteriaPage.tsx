import React from 'react';

import { CriteriaSelector } from '#components/forms/atoms/CriteriaSelectorOption/CriteriaSelectorOption';
import { ProfileBuilderWrapper } from '#components/forms/molecules/ProfileBuilderWrapper/ProfileBuilderWrapper';
import { NavButtons } from '#components/navigation/organisms/NavButtons/NavButtons';
import { sampleSteps } from '#utils/sampleFormData';

import { StyledProfileBuilderHeader } from '../PBPages.styles';
import { StyledCriteriaSelector, StyledMainRight, StyledTopRight } from './PBCriteriaPage.styles';
import type { PBCriteriaPageProps } from './PBCriteriaPage.types';

const criterias: string[] = [
  'Pending Bankruptcy',
  'Pending or Prior Eviction',
  'Felony Conviction in the Last 6 Years',
  'None of the above',
];

export const PBCriteriaPageComponent: React.FC<PBCriteriaPageProps> = ({
  innerTheme = 'gradient',
  outerTheme,
  step = 6,
  steps = sampleSteps,
  ...props
}) => {
  return (
    <ProfileBuilderWrapper
      innerTheme={innerTheme}
      isShowIllustration={false}
      outerTheme={outerTheme}
      step={step}
      steps={steps}
      {...props}
    >
      <StyledMainRight>
        <StyledTopRight>
          <StyledProfileBuilderHeader variant="h5">
            Please select all that apply to you from the list below.
          </StyledProfileBuilderHeader>
          <StyledCriteriaSelector>
            {criterias.map((criteria, id) => (
              <CriteriaSelector key={`criteria_${id}`} text={criteria} startingState={false} />
            ))}
          </StyledCriteriaSelector>
        </StyledTopRight>
        <NavButtons contextType="profile" />
      </StyledMainRight>
    </ProfileBuilderWrapper>
  );
};
