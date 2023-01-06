import Stack from '@mui/material/Stack';
import React from 'react';

import SubMenuImage from '../../molecules/SubMenuImage/SubMenuImage';
import {
  StyledColumn,
  StyledDiv,
  StyledDivider,
  StyledDividerLeft,
  StyledDrawer,
  StyledLabel,
  StyledLabelLeft,
  StyledListItem,
  StyledListItemLeft,
  StyledListItemText,
  StyledStack,
  StyledStackLeft,
} from './DesktopSubMenu.styles';
import type DesktopSubMenuProps from './DesktopSubMenu.types';

export const DesktopSubMenu: React.FC<DesktopSubMenuProps> = ({ closeOptions, open, selectedNav }) => (
  <StyledDrawer
    variant="temporary"
    anchor="top"
    onClose={closeOptions}
    open={open}
    BackdropProps={{ style: { backgroundColor: 'initial', opacity: 2 } }}
  >
    <StyledDiv />
    <StyledStack direction="row" justifyContent="center">
      <Stack direction="column" sx={{ marginTop: '46px', marginLeft: '8%', marginRight: '-4%' }}>
        <StyledLabel>{selectedNav?.text}</StyledLabel>
        <StyledDivider />
        {selectedNav?.options?.map(option => (
          <StyledListItem key={option.text}>
            <StyledListItemText primary={option.text} />
          </StyledListItem>
        ))}
      </Stack>
      {selectedNav?.id !== 2 ? (
        <SubMenuImage selectedNav={selectedNav} />
      ) : (
        <StyledColumn>
          <Stack direction="column">
            <StyledLabelLeft>Resident Resources</StyledLabelLeft>
            <StyledDividerLeft />
            <StyledStackLeft direction="column">
              {selectedNav?.subOptions?.map(option => (
                <StyledListItemLeft key={option.text}>
                  <StyledListItemText primary={option.text} />
                </StyledListItemLeft>
              ))}
            </StyledStackLeft>
          </Stack>
        </StyledColumn>
      )}
    </StyledStack>
  </StyledDrawer>
);

export default DesktopSubMenu;
