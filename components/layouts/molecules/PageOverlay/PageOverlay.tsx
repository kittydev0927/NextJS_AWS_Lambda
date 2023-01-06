import React from 'react';

import { StyledOverlayInnerContainer, StyledOverlayOuterContainer } from './PageOverlay.styles';
import type { PageOverlayProps } from './PageOverlay.types';

export const PageOverlay: React.FC<PageOverlayProps> = ({ children, ...props }) => (
  <StyledOverlayOuterContainer {...props}>
    <StyledOverlayInnerContainer />
    {children}
  </StyledOverlayOuterContainer>
);
