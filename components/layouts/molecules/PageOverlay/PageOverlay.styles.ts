import { styled } from '@mui/material';

import { theme } from '#styles/styles';

export const StyledOverlayOuterContainer = styled('div')`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledOverlayInnerContainer = styled('div')`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.softPeach};
  position: absolute;
  z-index: -1;
`;
