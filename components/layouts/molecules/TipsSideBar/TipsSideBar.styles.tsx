import { styled } from '@mui/material';
import Drawer from '@mui/material/Drawer';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

import type { StyledContainerProps } from './TipsSideBar.types';

export const StyledContainer = styled('div')<StyledContainerProps>`
  display: flex;
  justify-content: end;
  height: 100%;
  background-color: transparent;
  .MuiDrawer-docked {
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
  grid-area: ${({ customPlacement }) => (customPlacement ? '1 / 5 / 1 / 7' : 'none')};
`;

export const StyledDrawer = styled(Drawer)`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: relative;
  z-index: 5;

  .MuiBackdrop-root {
    background-color: transparent;
  }

  .MuiPaper-root {
    border: none;
    box-sizing: content-box;
    display: grid;
    grid-template-columns: repeat(25, 1fr);
    grid-template-rows: repeat(1, 1fr);
    padding: 0px;
    position: absolute;
    top: -32px;
    right: -32px;
    height: calc(100% + 64px);
    width: 377px;
  }
`;

export const StyledInnerDrawer = styled('div')`
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 4;
  grid-column-end: 26;
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) => theme.colors.isabelline};
  width: 345px;
}`;

export const StyledInformationContainer = styled('div')`
  width: 250px;
  margin-left: 62px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledOpenButtonWrapper = styled('div')`
  grid-area: 1 / 1 / 1 / 4;
  z-index: 1;
  padding-top: 31px;
`;

export const StyledHeader = styled(Typography)`
  margin: 43px 0px 22px 0px;
`;
