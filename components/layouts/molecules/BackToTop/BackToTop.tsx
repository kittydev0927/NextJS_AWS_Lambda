import React from 'react';

import { StyledBackToTopButton, StyledBackToTopCon, StyledText } from './BackToTop.styles';
import type { BackToTopProps } from './BackToTop.types';

export const BackToTop: React.FC<BackToTopProps> = ({ children, ...props }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledBackToTopCon className="back-to-top-button-con">
      <StyledBackToTopButton onClick={handleClick} data-testid="BackToTop" {...props} className="back-to-top-button">
        <StyledText>Back To Top</StyledText>
        {children}
      </StyledBackToTopButton>
    </StyledBackToTopCon>
  );
};
