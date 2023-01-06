import type { SubMenuItemProps } from '../../molecules/SubMenuItem/SubMenuItem.types';

export interface PortalSubMenuProps {
  backgroundColor?: string;
  items: SubMenuItemProps[];
  resident?: boolean | null;
  residentItems?: SubMenuItemProps[];
}
