import Divider from '@mui/material/Divider';
import Image from 'next/image';
import React, { useState } from 'react';

import { HeaderLogo } from '#components/layouts/atoms/HeaderLogo/HeaderLogo';
import CloseIcon from '#public/group.svg';
import HamburgerIcon from '#public/hamburger.svg';

import MenuItems from '../../molecules/MenuItems/MenuItems';
import {
  DrawerHeader,
  StyledDrawer,
  StyledIconButton,
  StyledLogoContainer,
  StyledMenuContainer,
  StyledSearchContainer,
  StyledSearchField,
} from './MobileSubMenu.styles';
import type MobileSubMenuProps from './MobileSubMenu.types';

export const MobileSubMenu: React.FC<MobileSubMenuProps> = ({ disabled, placeholder }) => {
  const [open, setOpen] = useState(false);
  const [searchField, setSearchField] = useState(true);

  const toggleSearch = () => setSearchField(!searchField);

  const toggleMenu = (bool: boolean) => setOpen(bool);

  return (
    <>
      <StyledMenuContainer onClick={() => toggleMenu(!open)}>
        <Image src={HamburgerIcon as string} width={25.7} height={12} alt="open sub menu" />
      </StyledMenuContainer>

      <StyledDrawer
        variant="persistent"
        anchor="bottom"
        open={open}
        onClose={() => toggleMenu(false)}
        onOpen={() => toggleMenu(true)}
      >
        <DrawerHeader>
          <StyledIconButton onClick={() => toggleMenu(false)}>
            <Image src={CloseIcon as string} width={16} height={16} alt="close sub menu" />
          </StyledIconButton>
          <StyledLogoContainer>
            <HeaderLogo />
          </StyledLogoContainer>
        </DrawerHeader>
        <Divider />
        {searchField && (
          <StyledSearchContainer>
            <StyledSearchField disabled={disabled} placeholder={placeholder} />
          </StyledSearchContainer>
        )}
        <MenuItems toggleSearchField={toggleSearch} />
      </StyledDrawer>
    </>
  );
};

export default MobileSubMenu;
