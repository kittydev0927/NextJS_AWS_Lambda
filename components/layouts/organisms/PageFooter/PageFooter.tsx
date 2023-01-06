import React from 'react';

import { StyledPageFooter, StyledPageFooterText } from './PageFooter.styles';
import type { PageFooterProps } from './PageFooter.types';

export const PageFooter: React.FC<PageFooterProps> = ({ infoText, ...props }) => (
  <StyledPageFooter data-testid="page-footer" {...props}>
    <StyledPageFooterText>{infoText}</StyledPageFooterText>
  </StyledPageFooter>
);
