import { styled } from '@mui/material';

export const StyledPageFooter = styled('div')`
  background: ${({ theme }) => theme.colors.accessibleGreen};
  height: 100px;
`;

export const StyledPageFooterText = styled('div')`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  height: 19px;
  padding: 40px 0 41px 60px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 14px;
    height: 41px;
    width: 194px;
    padding: 29px 0 30px 36px;
  }
`;
