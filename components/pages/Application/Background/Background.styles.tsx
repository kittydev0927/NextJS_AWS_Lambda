import { styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { PageLayoutApplication } from '#components/layouts/organisms/PageLayoutApplication/PageLayoutApplication';

export const StyledBackground = styled('div')`
  .applicant-page-wrapper {
    padding: 10px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding-top: 100px;
      grid-column-start: 4;
      grid-column-end: 7;
    }
    ${({ theme }) => theme.breakpoints.up('md')} {
      grid-column-start: 3;
      grid-column-end: 5;
    }

    .button-container {
      ${({ theme }) => theme.breakpoints.up('sm')} {
        padding-top: 32px;
      }
    }
  }

  .pb-buttons-wrapper {
    ${({ theme }) => theme.breakpoints.up('sm')} {
      max-width: unset;
    }
    .button-next,
    .button-previous {
      max-width: unset;
    }
  }
`;

export const StyledPageLayoutApplication = styled(PageLayoutApplication)`
  display: flex;
  flex-direction: column;
  position: relative;
  .MuiPaper-root.outer-paper {
    padding: 0;
  }
`;
export const StyledContainer = styled('div')``;

export const StyledMultiSelectCon = styled('div')`
  padding: 10px 20px 0 20px;
  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: 10px 0 0;
  }
  .multi-select-option div label {
    box-sizing: border-box;
    padding-right: 48px;
    padding-left: 0;
    height: fit-content;
    width: 100%;
    ${({ theme }) => theme.breakpoints.up('md')} {
      height: 50px;
      min-width: 250px;
      max-width: 500px;
    }
  }
`;

export const StyledHeader = styled(Typography)`
  margin: 0;
  text-align: center;
  line-height: normal;
  padding: 10px 28px 33px 28px;
  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: 10px 0 20px;
  }
`;
