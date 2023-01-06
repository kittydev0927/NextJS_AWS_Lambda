import React from 'react';

import { StyledButton, StyledChildrenWrapper, StyledHeader, StyledTitle, StyledWrapper } from './ToursCard.styles';

export const ToursCard: React.FC = ({ children }) => (
  <StyledWrapper data-testid="tours-card">
    <StyledHeader>
      <StyledTitle>Upcoming Tours</StyledTitle>
      <StyledButton size="medium">View All</StyledButton>
    </StyledHeader>
    <StyledChildrenWrapper>{children}</StyledChildrenWrapper>
  </StyledWrapper>
);
