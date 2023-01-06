import { Tooltip } from '@mui/material';
import React from 'react';

import { ICON_LIST } from '#styles/styles';

import {
  IconContainer,
  IconDescription,
  InnerIconContainer,
  OuterIconContainer,
  StyledMainContainer,
  StyledSocialMediaContainer,
  StyledSocialMediaIconsContainer,
  StyledToolTipContainer,
  StyledToolTipContainerIcons,
  StyledWebsiteContainer,
  StyledWebsiteInnerContainer,
} from './Iconography.styles';

export const IconographyComponent = React.forwardRef<HTMLElement>(() => {
  return (
    <StyledMainContainer data-testid="Iconography-Container">
      <h3>Brand Iconography</h3>

      <h5>SOCIAL MEDIA</h5>
      <StyledSocialMediaContainer>
        {ICON_LIST.filter(icon => icon.type === 'SM').map(i => (
          <Tooltip
            key={i.id}
            title={
              <React.Fragment>
                <em>{i.description}</em>
              </React.Fragment>
            }
          >
            <StyledSocialMediaIconsContainer>
              <OuterIconContainer>
                <InnerIconContainer>
                  <IconContainer>
                    <i.icon />
                  </IconContainer>
                  <IconDescription>
                    <span>{i.name}</span>
                  </IconDescription>
                </InnerIconContainer>
              </OuterIconContainer>
            </StyledSocialMediaIconsContainer>
          </Tooltip>
        ))}
      </StyledSocialMediaContainer>
      <h5>FAIR HOUSING & ADA</h5>
      <StyledToolTipContainer>
        {ICON_LIST.filter(icon => icon.type === 'ADA').map(i => (
          <Tooltip
            key={i.id}
            title={
              <React.Fragment>
                <em>{i.description}</em>
              </React.Fragment>
            }
          >
            <StyledToolTipContainerIcons>
              <OuterIconContainer>
                <InnerIconContainer>
                  <IconContainer>
                    <i.icon />
                  </IconContainer>
                  <IconDescription>
                    <span>{i.name}</span>
                  </IconDescription>
                </InnerIconContainer>
              </OuterIconContainer>
            </StyledToolTipContainerIcons>
          </Tooltip>
        ))}
      </StyledToolTipContainer>
      <h5>WEBSITE & COLLATERAL</h5>
      <StyledWebsiteContainer>
        {ICON_LIST.filter(icon => icon.type === 'WC').map(i => (
          <Tooltip
            key={i.id}
            title={
              <React.Fragment>
                <em>{i.description}</em>
              </React.Fragment>
            }
          >
            <StyledWebsiteInnerContainer>
              <OuterIconContainer>
                <InnerIconContainer>
                  <IconContainer>
                    <i.icon />
                  </IconContainer>
                  <IconDescription>
                    <span>{i.name}</span>
                  </IconDescription>
                </InnerIconContainer>
              </OuterIconContainer>
            </StyledWebsiteInnerContainer>
          </Tooltip>
        ))}
      </StyledWebsiteContainer>
    </StyledMainContainer>
  );
});

IconographyComponent.displayName = 'Iconography';
