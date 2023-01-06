import { styled } from '@mui/material';

export const StyledCompanyInfo = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLinkGroups = styled('div')`
  display: flex;
  justify-content: flex-start;
  ${({ theme }) => theme.breakpoints.up('md')} {
    justify-content: space-between;
  }
`;
