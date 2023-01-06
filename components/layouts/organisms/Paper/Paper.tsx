import MUIPaper from '@mui/material/Paper';
import React from 'react';

import { StyledWrapper } from './Paper.styles';
import type { PaperProps } from './Paper.types';

export const Paper: React.FC<PaperProps> = ({
  innerVariant,
  outerVariant,
  children,
  innerSx,
  outerSx,
  innerElevation,
  outerElevation,
  innerSquare,
  outerSquare,
  outerTheme,
  innerTheme,
  showOuterPaper,
  className,
  ...props
}) => {
  return (
    <div className={className}>
      <Wrapper
        showOuterPaper={showOuterPaper}
        innerTheme={innerTheme}
        outerTheme={outerTheme}
        outerElevation={outerElevation}
        outerVariant={outerVariant}
        outerSquare={outerSquare}
        outerSx={outerSx}
      >
        <MUIPaper
          {...props}
          className="inner-paper"
          data-testid="innerPaper"
          elevation={innerElevation}
          sx={innerSx}
          variant={innerVariant}
          square={innerSquare}
        >
          {children}
        </MUIPaper>
      </Wrapper>
    </div>
  );
};

// conditional Paper wrapper for acheiving the background gradient offset in the current design
const Wrapper: React.FC<PaperProps> = ({
  showOuterPaper,
  outerElevation,
  outerVariant,
  outerSquare,
  children,
  outerSx,
  innerTheme,
  outerTheme,
  ...props
}) => {
  if (showOuterPaper) {
    return (
      <StyledWrapper className="outer-paper" innerTheme={innerTheme} outerTheme={outerTheme} {...props}>
        <MUIPaper
          className="outer-paper"
          data-testid="outerPaper"
          elevation={outerElevation}
          sx={outerSx}
          variant={outerVariant}
          square={outerSquare}
        >
          {children}
        </MUIPaper>
      </StyledWrapper>
    );
  }

  return <>{children}</>;
};
