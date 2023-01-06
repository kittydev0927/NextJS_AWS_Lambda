import { styled, Typography } from '@mui/material';

export const MainContentContainer = styled('div')`
  max-width: 409px;
  display: flex;
  height: 110%;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    align-items: flex-start;
    margin-top: 44px;
    height: 100%;
  }
`;

export const StyledMainRight = styled('div')`
  ${({ theme }) => theme.breakpoints.up('sm')} {
    height: 70%;
    margin-top: 10px;
    align-items: flex-start;
  }
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledTopRight = styled('div')`
  height: 60%;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    height: 45%;
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-bottom: 16px;
    justify-content: flex-start;
  }
`;

export const StyledHeaderContainer = styled('div')``;

export const StyledProfileBuilderHeader = styled(Typography)`
  margin: 16px 0 10px 0;
`;

export const StyledProfileBuilderSubHeader = styled(Typography)`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 34px;
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-bottom: 24px;
    margin-top: 20px;
  }
`;
