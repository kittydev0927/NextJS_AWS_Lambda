import { styled } from '@mui/material';

import type { SubMenuItemProps } from './SubMenuItem.types';

const styleProps = new Set<string | number | symbol>(['active', 'color', 'href', 'label', 'sx']);

export const StyledSubMenuItem = styled('div', {
  shouldForwardProp: prop => !styleProps.has(prop),
})<SubMenuItemProps>`
  align-items: center;
  border-bottom: ${({ selected, href, theme }) => (selected === href ? `5px ${theme.colors.white} solid` : 'none')};
  display: flex;
  height: calc(100% - 5px);
  padding: 0 10px;
  margin: 0 55px 0 0;

  @media (max-width: 600px) {
    border-bottom: none;
    margin: 0;
    padding: 10px;
  }
`;
