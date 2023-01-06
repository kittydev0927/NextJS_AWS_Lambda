import { styled } from '@mui/material';

import { CircularProgress } from '#components/forms/atoms/CircularProgress/CircularProgress';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledCircularProgress = styled(CircularProgress)`
  object-fit: contain;
  @media (max-width: 330px) {
    margin: 5px 0 9px 0;
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin: 0 43px 2px 31px;
  }
`;

export const StyledCompleteButtonContainer = styled('div')`
  align-self: center;
  max-width: 238px;
  width: 100%;
  height: 50px;
  margin: auto;
  margin-top: 37px;
  text-align: center;
  ${({ theme }) => theme.breakpoints.up('md')} {
    margin: 0;
    margin-left: auto;
  }
  button {
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    text-transform: none;
    height: 50px;
  }
`;

export const StyledContentContainer = styled('div')`
  color: ${({ theme }) => theme.colors.darkGray};
  display: inline-block;
  font-size: 20px;
`;

export const StyledHeader = styled(Typography)`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 165px;
    font-size: 20px;
  }
`;

export const StyledMainText = styled(Typography)`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 20px;
  margin-top: 25px;
  text-align: center;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 376px;
    font-size: 22px;
    text-align: left;
  }
`;

export const StyledProgressContainer = styled('div')`
  display: flex;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: block;
    width: unset;
  }
`;

export const StyledProgressWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  .MuiBox-root {
    order: 1;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      order: 0;
    }
    .MuiTypography-body1 {
      font-size: 21.4px;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      line-height: 1.58;
      letter-spacing: -0.76px;
    }
    ${({ theme }) => theme.breakpoints.up('sm')} {
      .MuiTypography-body1 {
        font-size: 30px;
      }
    }
  }
`;

export const StyledStepText = styled('div')`
  width: 75%;
  height: 25px;
  margin: 18px 0 3px 0;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.29;
  color: ${({ theme }) => theme.colors.darkGray};
  text-align: left;
  .MuiTypography-root {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: unset;
    color: ${({ theme }) => theme.colors.gray2};
    text-align: center;
  }
`;

export const StyledVerticalLine = styled('div')`
  width: 1px;
  height: 123px;
  margin: 4px 39px 15px 34px;
  border-left: solid 1px ${({ theme }) => theme.colors.dustyGray};
`;
