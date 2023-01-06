import Link from 'next/link';
import React from 'react';

import { StyledMUILink } from '#components/layouts/atoms/Link/Link.style';
import { theme } from '#styles/styles';

import { Typography } from '../../atoms/Typography/Typography';
import { StyledSubMenuItem } from './SubMenuItem.styles';
import type { SubMenuItemProps } from './SubMenuItem.types';

/**
 * Functional React component for populating a sub-menu item of PortalSubMenu
 * providing authenticated UX options
 * @param { boolean } active is the item active
 * @param { string } color hexidecimal color code
 * @param { string } href link to page
 * @param { string } label label of the sub-menu item
 * @param { Record<string, unkown> } sx MUI style property passed down for Typography
 */
export const SubMenuItem: React.FC<SubMenuItemProps> = ({
  children,
  selected,
  color = theme.colors.white,
  href,
  label,
  sx,
  ...props
}) => (
  <StyledSubMenuItem selected={selected} color={color} href={href} label={label} {...props}>
    <Typography sx={sx}>
      <Link href={href} prefetch={false} passHref>
        <StyledMUILink color={color}>{label}</StyledMUILink>
      </Link>
      {children}
    </Typography>
  </StyledSubMenuItem>
);

// export default for ease of renaming component within Storybook story
export default SubMenuItem;
