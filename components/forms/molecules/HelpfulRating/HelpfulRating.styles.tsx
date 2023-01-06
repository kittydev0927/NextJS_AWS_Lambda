import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { Link } from '#components/layouts/atoms/Link/Link';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledHelpfulRating = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.2fr 1fr;
`;

export const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 1;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-top: 9px;
  }
`;

export const StyledButtonGroup = styled('div')`
  margin-left: 24px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-left: 19px;
  }
`;

export const StyledButton = styled(Button)`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  min-width: unset;
  margin-right: 17px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-right: 12px;
    height: 49px;
    width: 49px;
    border-radius: 49px;
  }
  &.rating-no {
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const StyledRatingCon = styled('div')`
  display: flex;
  align-items: center;
  .MuiTypography-root {
    padding-top: 12px;
  }
`;

export const StyledEmail = styled(Link)`
  color: ${({ theme }) => theme.colors.darkGray};
  text-decoration-color: ${({ theme }) => theme.colors.darkGray};
`;
