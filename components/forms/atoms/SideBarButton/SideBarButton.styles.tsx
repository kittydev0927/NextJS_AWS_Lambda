import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';

import type { ButtonProps } from './SideBarButton.types';

export const StyledButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'buttonState',
})<ButtonProps>`
  min-width: ${({ buttonState }) => (buttonState === 'mobile' ? '50px' : '63px')};
  height: ${({ buttonState }) => (buttonState === 'mobile' ? '50px' : '63px')};
  &:hover {
    background: ${({ theme }) => theme.colors.darkGreen};
  }
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-color: ${({ theme }) => theme.colors.darkGreen};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: none;
  p {
    font-size: 11px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.white};
  }
`;
