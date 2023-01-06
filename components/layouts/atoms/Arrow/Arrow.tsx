import React from 'react';

import { theme } from '#styles/styles';

import type { ArrowProps } from './Arrow.types';

export const Arrow: React.FC<ArrowProps> = ({ color = '#279989', width = 14, height = 12 }) => (
  <svg data-testid="arrow-icon" width={width} height={height} viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 0 5.939 1.061l4.189 4.189H1v1.5h9.128l-4.189 4.189L7 12l6-6z"
      fill={color === 'primary' ? theme.colors.accessibleGreen : color}
      fillRule="nonzero"
      stroke={color === 'primary' ? theme.colors.accessibleGreen : color}
    />
  </svg>
);
