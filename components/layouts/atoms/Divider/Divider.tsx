import React from 'react';

import { StyledDivider } from './Divider.style';
import type { DividerProps } from './Divider.types';

export const Divider: React.FC<DividerProps> = ({
  variant,
  children,
  textAlign,
  orientation,
  dividerStyles,
  customText,
  ...props
}) => {
  return (
    <StyledDivider sx={dividerStyles} variant={variant} orientation={orientation} textAlign={textAlign} {...props}>
      {customText && <span className="customText">{customText}</span>}
      {children}
    </StyledDivider>
  );
};
