import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { SearchField } from '#components/navigation/molecules/SearchField/SearchField';

export const StyledMenuContainer = styled('div')`
  background: ${({ theme }) => theme.colors.accessibleGreen};
  max-width: fit-content;
`;

export const StyledDrawer = styled(SwipeableDrawer)`
  min-height: calc(100% - 64px);
  top: 64px;

  .MuiDrawer-paper {
    background-color: ${({ theme }) => theme.colors.accessibleGreen};
    min-height: calc(100% - 211px);
    max-height: calc(100% - 211px);
    width: auto;
    margin: 0 3% 0;
  }
`;

export const DrawerHeader = styled('div')`
  min-height: 83px;
  display: flex;
  align-items: center;
  justify-content: inherit;
  flex-wrap: wrap;
`;

export const StyledIconButton = styled(IconButton)`
  margin-left: 36px;
`;

export const StyledLogoContainer = styled('div')`
  width: fit-content;
  margin: 0 auto;
  padding-right: 68px;
`;

export const StyledSearchContainer = styled('div')`
  height: 50px;
  margin: 25px 25px 10px 36px;
  * {
    width: auto;
  }
`;

export const StyledSearchField = styled(SearchField)`
  width: auto;
`;
