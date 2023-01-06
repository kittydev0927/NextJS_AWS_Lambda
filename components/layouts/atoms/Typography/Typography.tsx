import MUITypography from '@mui/material/Typography';
import React from 'react';

import type { TypographyProps } from './Typography.types';

export const Typography: React.FC<TypographyProps> = ({ color, textAlign, textVariant, children, sx, ...props }) => {
  return (
    <MUITypography color={color} align={textAlign} variant={textVariant} sx={sx} {...props}>
      {children}
    </MUITypography>
  );
};
