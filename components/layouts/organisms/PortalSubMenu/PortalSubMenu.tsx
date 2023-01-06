import React, { useEffect, useRef, useState } from 'react';

import { RESIDENT_MENU_ITEMS } from '#utils/__mocks__/menuItems';

import { SubMenuItem } from '../../molecules/SubMenuItem/SubMenuItem';
import { StyledMenuContainer } from './PortalSubMenu.styles';
import type { PortalSubMenuProps } from './PortalSubMenu.types';

/**
 * Functional React component for populating a sub-menu of the Header
 * providing authenticated UX options
 * @param { string } backgroundColor sub-menu background color
 * @param { SubMenuItemProps[] } items array of SubMenuItemProps objects
 * @param { boolean } resident is the user also a current resident?
 * @param { SubMenuItemProps[] } residentItems array of SubMenuItemProps objects
 */

export const PortalSubMenu: React.FC<PortalSubMenuProps> = ({
  children,
  items,
  resident = false,
  residentItems = RESIDENT_MENU_ITEMS,
  ...props
}) => {
  const pathname = useRef<string | undefined>();

  const [selectedMain, setSelectedMain] = useState<string | undefined>('');

  useEffect(() => {
    pathname.current = window.location.pathname;
    setSelectedMain(pathname.current);
  }, []);

  useEffect(() => {
    pathname.current = window.location.pathname;
    setSelectedMain(pathname.current);
  }, [pathname]);

  return (
    <StyledMenuContainer {...props}>
      {items?.map((item, index) => (
        <SubMenuItem
          key={index}
          selected={selectedMain}
          color={item.color}
          href={item.href}
          label={item.label}
          sx={item.sx}
          setSelected={setSelectedMain}
        />
      ))}
      {resident &&
        residentItems?.map((item, index) => (
          <SubMenuItem key={index} color={item.color} href={item.href} label={item.label} sx={item.sx} />
        ))}
      {children}
    </StyledMenuContainer>
  );
};
