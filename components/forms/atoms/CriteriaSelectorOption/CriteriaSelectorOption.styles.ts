import { styled } from '@mui/material';

import { theme } from '#styles/styles';

import type { StyledContainerProps } from './CriteriaSelectorOption.types';

export const StyledContainer = styled('div', {
  shouldForwardProp: prop => prop !== 'isSelected',
})<StyledContainerProps>`
  border: ${({ isSelected }) => (isSelected ? `2px solid ${theme.colors.mint}` : 'none')};
  border-radius: 15px;
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr;
  padding: ${({ isSelected }) => (isSelected ? `0px` : '2px')};
  background-color: ${({ theme }) => theme.colors.isabelline};
`;

export const StyledText = styled('p')`
  font-family: ${theme.fonts.Roboto};
  font-size: 16px;
  text-align: center;
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 1;
  grid-column-end: 11;
`;

export const StyledCheckMarkContainer = styled('div')`
  grid-area: 1 / 1 / 1 / 2;
  display: flex;
  padding-left: 22px;
  align-items: center;
  .MuiSvgIcon-root {
    color: ${theme.colors.mint};
  }
`;
