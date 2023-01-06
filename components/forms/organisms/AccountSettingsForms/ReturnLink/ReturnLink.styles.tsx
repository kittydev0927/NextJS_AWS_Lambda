import { styled } from '@mui/material';

import { theme } from '#styles/styles';

export const StyledContainer = styled('div')`
  display: flex;
  background-color: ${theme.colors.accessibleGreen};
  border-top: solid 1px rgba(255, 255, 255, 0.3);
  padding-top: 16.5px;
  padding-bottom: 16.5px;
`;
export const StyledContent = styled('div')`
  display: flex;
  align-items: center;
  font-weight: ${theme.fontWeight.bold};
  cursor: pointer;
  padding-left: 20px;
  span {
    font-size: 16px;
    color: ${theme.colors.white};
    padding-left: 9px;
  }
  img {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(323deg) brightness(102%) contrast(101%);
  }
`;
