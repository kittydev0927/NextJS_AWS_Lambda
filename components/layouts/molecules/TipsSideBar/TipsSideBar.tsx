import React from 'react';

import { SideBarButton } from '#components/forms/atoms/SideBarButton/SideBarButton';

import {
  StyledContainer,
  StyledDrawer,
  StyledHeader,
  StyledInformationContainer,
  StyledInnerDrawer,
  StyledOpenButtonWrapper,
} from './TipsSideBar.styles';
import type { TipsSideBarProps } from './TipsSideBar.types';

export const TipsSideBar: React.FC<TipsSideBarProps> = ({
  containerProp,
  containerHeight,
  open,
  setOpen,
  children,
  header = 'Application Tips',
  customPlacement = false,
}) => {
  const handleDrawerClose = () => {
    if (setOpen) {
      setOpen(false);
    }
  };

  return (
    <StyledContainer
      className="tips-sidebar"
      data-testid="tipssidebar"
      open={open}
      containerHeight={containerHeight}
      customPlacement={customPlacement}
    >
      <StyledDrawer variant="persistent" anchor="right" open={open} container={containerProp}>
        <StyledOpenButtonWrapper className="buttonwrapper" data-testid="closed-button">
          <SideBarButton onClick={handleDrawerClose} buttonState="open" />
        </StyledOpenButtonWrapper>
        <StyledInnerDrawer data-testid="innerdrawer">
          <StyledInformationContainer>
            <StyledHeader variant="h6">{header}</StyledHeader>
            {children}
          </StyledInformationContainer>
        </StyledInnerDrawer>
      </StyledDrawer>
    </StyledContainer>
  );
};
