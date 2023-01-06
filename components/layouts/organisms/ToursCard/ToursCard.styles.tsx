import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { muiCustomShadow } from '#styles/styles';

export const StyledWrapper = styled('div')`
  box-shadow: ${({ theme }) => theme.shadows[muiCustomShadow]};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  overflow: hidden;
`;

export const StyledHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledTitle = styled('h3')`
  margin-left: 26px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.darkGray};
  text-transform: none;
  margin-right: 21px;
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const StyledChildrenWrapper = styled('div')`
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.gradientGray},
    ${({ theme }) => theme.colors.white} 10%
  );
  border-bottom: ${({ theme }) => theme.borderRadius.primary};
`;
