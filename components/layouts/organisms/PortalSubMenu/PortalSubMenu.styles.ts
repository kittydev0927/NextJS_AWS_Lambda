import { styled } from '@mui/material';

import type { PortalSubMenuProps } from './PortalSubMenu.types';

type IStyleProps = Pick<PortalSubMenuProps, 'backgroundColor'>;

export const StyledMenuContainer = styled('div', {
  shouldForwardProp: prop => prop !== 'backgroundColor',
})<IStyleProps>`
  align-items: center;
  background-color: ${props => props.backgroundColor || props.theme.colors.accessibleGreen};
  display: flex;
  height: 82px;
  text-align: center;
  padding: 0 0 0 84px;
  border-top: solid 1px rgba(255, 255, 255, 0.3);

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    height: auto;
    padding: 20px 26px;
  }
`;
