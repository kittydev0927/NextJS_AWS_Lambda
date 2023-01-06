import { styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

// NextJS page styles

export const StyledOccupants = styled('div')`
  .add-section {
    .add-section-button {
      text-align: left;
      padding-left: 20px;
    }
  }
  .applicant-page-wrapper {
    padding: 0px 32px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding: initial;
      grid-column-start: 4;
      grid-column-end: 6;
    }
    ${({ theme }) => theme.breakpoints.up('md')} {
      grid-column-start: 3;
      grid-column-end: 5;
    }
  }
`;

export const StyledHeading = styled(Typography)`
  margin: 0;
  padding: 45px 0 14px 0;
  font-size: 22px;
  text-align: left;
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 24px;
    padding: 112px 0 13px;
  }
`;

export const StyledDirections = styled(Typography)`
  font-size: 14px;
  padding-bottom: 9px;
`;
