import React from 'react';

import { ProfileBuilderWrapper } from '#components/forms/molecules/ProfileBuilderWrapper/ProfileBuilderWrapper';
import { Card } from '#components/layouts/molecules/Card/Card';

import {
  StyledGrid,
  StyledGridContainer,
  StyledHeader1,
  StyledHeader2,
  StyledInnerGridContainer,
  StyledPBCompletePageWrapper,
} from './PBCompletePage.styles';
import type { IPBLocationsPageProps } from './PBCompletePage.types';
import { imageContent } from './ustils/constants';

export const PBCompletePageComponent: React.FC<IPBLocationsPageProps> = ({
  maxwidth = 340,
  mediaImgHeight = 189,
  mediaElevation = 5,
  headingStyles = { mb: 1 },
  buttonVariant = 'primary',
  buttonSize,
  ...props
}) => {
  return (
    <ProfileBuilderWrapper step={5} isShowIllustration={false} {...props}>
      <StyledPBCompletePageWrapper>
        <div>
          <StyledHeader1 variant="h5" align="left">
            Profile Complete
          </StyledHeader1>
          <StyledHeader2 variant="h5" align="left">
            Yay! Your profile is complete, and you&apos;re now ready to search for “the one!”
          </StyledHeader2>
        </div>

        <StyledGridContainer container spacing={2} direction="row">
          {imageContent.map((content, i) => (
            <StyledInnerGridContainer item index={i} key={content.id}>
              <StyledGrid container alignItems="center" justifyContent="center">
                <Card
                  key={i}
                  body={content.body}
                  buttonPosition="start"
                  buttonSize={buttonSize}
                  buttonText={content.buttonText}
                  buttonVariant={buttonVariant}
                  buttonWidth="auto"
                  heading={content.heading}
                  headingStyles={headingStyles}
                  iconPosition="right"
                  isButtonFullWidth
                  isFullWidth
                  maxwidth={maxwidth}
                  mediaElevation={mediaElevation}
                  mediaImg={content.mediaImg}
                  mediaimgcolor={content.mediaImgColor}
                  mediaimgheight={mediaImgHeight}
                  url={content.url}
                />
              </StyledGrid>
            </StyledInnerGridContainer>
          ))}
        </StyledGridContainer>
      </StyledPBCompletePageWrapper>
    </ProfileBuilderWrapper>
  );
};
