import React from 'react';

import {
  StyledHeader,
  StyledModal,
} from '#components/layouts/molecules/TipsSideBar/TipsSideBarMobile/TipsSideBarMobile.styles';
import type { TipsSideBarMobileProps } from '#components/layouts/molecules/TipsSideBar/TipsSideBarMobile/TipsSideBarMobile.types';

export const TipsSideBarMobile: React.FC<TipsSideBarMobileProps> = ({
  children,
  header = 'Application Tips',
  setOpen,
}) => {
  return (
    <StyledModal
      onModalCloseCallback={() => {
        if (setOpen) {
          setOpen(false);
        }
      }}
    >
      <StyledHeader data-testid="tips-sidebar-mobile">{header}</StyledHeader>
      {children}
    </StyledModal>
  );
};
