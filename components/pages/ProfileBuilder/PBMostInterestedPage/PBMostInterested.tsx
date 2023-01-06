import React from 'react';

import { MostInterestedSection } from '#components/forms/molecules/PBSections/MostInterestedComponent/MostInterestedSection';
import { StyledMainRight } from '#components/forms/molecules/PBSections/MostInterestedComponent/MostInterestedSection.styles';
import { ProfileBuilderWrapper } from '#components/forms/molecules/ProfileBuilderWrapper/ProfileBuilderWrapper';
import { NavButtons } from '#components/navigation/organisms/NavButtons/NavButtons';
import { extendedSteps } from '#utils/sampleFormData';
import { sampleMostInterestedData } from '#utils/sampleMostInterestedData';

import type { PBMostInterestedProps } from './PBMostInterested.types';

export const PBMostInterested: React.FC<PBMostInterestedProps> = ({
  innerTheme = 'gradient',
  outerTheme,
  step = 1,
  steps = extendedSteps,
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
        <MostInterestedSection options={sampleMostInterestedData} />
        <NavButtons contextType="profile" />
      </StyledMainRight>
    </ProfileBuilderWrapper>
  );
};
