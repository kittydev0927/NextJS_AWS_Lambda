import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';

export const StyledBackToTopCon = styled('div')`
  display: flex;
  justify-content: center;
  transform: translateY(-25px);
`;

export const StyledBackToTopButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  max-width: 218px;
  min-height: 58px;
  width: 100%;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.orangeRed};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  &:hover {
    background: ${({ theme }) => theme.colors.orangeRed};
  }
`;

export const StyledText = styled('span')`
  font-size: 19px;
  letter-spacing: 3px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
