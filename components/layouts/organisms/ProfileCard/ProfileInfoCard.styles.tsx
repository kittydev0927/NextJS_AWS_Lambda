import { Card, styled } from '@mui/material';

export const StyledProfileCardWrapper = styled(Card)`
  width: 100%;
  max-width: 1276px;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const StyledProfileCarHeader = styled('div')`
  border-radius: inherit;
  backdrop-filter: blur(6px);
  box-shadow: 21px 19px 40px 0 rgb(0 0 0 / 9%);
  background-color: #fff;
`;

export const StyledProfileCardBody = styled('div')`
  margin: 20px 11px 12px 13px;
`;

export const StyledProfileCardContent = styled('div')`
  max-width: 1252px;
  padding: 20px;
  padding: 0px 18px 20px;
  border-radius: 15px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 20px;
  }
`;
