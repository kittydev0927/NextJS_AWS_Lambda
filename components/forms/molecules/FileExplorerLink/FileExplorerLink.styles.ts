import { styled } from '@mui/material';
import Image from 'next/image';

export const StyledLabel = styled('label')`
  font-size: 14px;
  text-decoration: underline;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.accessibleGreen};
`;

export const StyledInput = styled('input')`
  display: none;
`;

export const StyledImage = styled(Image)``;

export const StyledContainer = styled('div')`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;
