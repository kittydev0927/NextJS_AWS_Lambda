import { styled } from '@mui/material';

export const StyledCurrentResidence = styled('div')`
  .applicant-page-wrapper {
    padding: 44px 33px 0px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding: 108px 0 37px;
    }
  }
  .button-container {
    padding: 0;
    max-width: 412px;
  }
  .current-address {
    padding-bottom: 0;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding-bottom: 35px;
    }
  }
`;

export const StyledContent = styled('div')`
  // padding: 44px 33px 0px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    // padding: 108px 0 37px;
  }
`;
