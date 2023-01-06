import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const SelectIcon: React.FC<SvgIconProps> = props => {
  return (
    <SvgIcon
      data-testid="select-icon"
      width="16"
      height="10"
      viewBox="0 0 16 10"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 2 8 8 2 2"
        stroke="#136069"
        strokeWidth="2.55"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
