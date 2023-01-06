import { styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledPBRentRangeWrapper = styled('div')`
  max-width: 409px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const StyledDividerCon = styled('div')`
  display: none;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: block;
    padding-left: 10px;
    .MuiDivider-vertical {
      height: 60px;
    }
  }
`;

export const StyledFinePrint = styled(Typography)`
  font-size: 10px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.accessibleGray};
  margin-bottom: 0;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-bottom: 20px;
  }
`;

export const StyledRangeSliderContainer = styled('div')`
  height: 50px;
  margin-bottom: 36px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
  }
`;

export const StyledRentRangeText = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    flex-direction: row;
    margin-bottom: 22px;
  }
`;

export const StyledDescText = styled(Typography)`
  color: ${({ theme }) => theme.colors.darkGray};
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 22px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    line-height: 1.2;
    width: 50%;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 0;
  }
`;

export const StyledMonthlyText = styled(Typography)`
  font-size: 50px;
  margin-left: 0;
  color: ${({ theme }) => theme.colors.darkGreen};
  line-height: 1;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-left: 14px;
    font-size: 34px;
  }
`;

export const StyledPerMonthText = styled(Typography)`
  font-size: 30px;
  padding-bottom: 8px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-bottom: 0;
    line-height: 1;
    font-size: 22px;
  }
`;

export const StyledMonthlyTextCon = styled('div')`
  display: flex;
  align-items: flex-end;
`;
