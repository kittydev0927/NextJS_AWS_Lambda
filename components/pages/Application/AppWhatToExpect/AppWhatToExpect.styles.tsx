import { css, styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { Divider } from '#components/layouts/atoms/Divider/Divider';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { Paper } from '#components/layouts/organisms/Paper/Paper';

const imageStyles = css`
  min-width: 50px;
  min-height: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 12px;
`;

const imageStylesMedium = css`
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
`;

const imageStylesLarge = css`
  width: 125px;
  height: 125px;
  margin-bottom: 30px;
`;

export const StyledPaper = styled(Paper)`
  box-sizing: border-box;
`;

export const StyledSolidBackground = styled('div')`
  background-color: ${({ theme }) => theme.colors.softPeach};
  padding: 155px 32px 80px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 80px 100px 80px;
  }
`;

export const StyledStepImage = styled('div')`
  ${imageStyles}
  background-color: ${({ theme }) => theme.colors.persianGreen};
  padding: 13px 12px 14px 13px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    ${imageStylesMedium}
    padding: 23px 16px 20px 22px;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    ${imageStylesLarge}
    padding: 38px 36px 37px;
  }
`;

export const StyledDocumentsImage = styled('div')`
  ${imageStyles}
  background-color: ${({ theme }) => theme.colors.darkTangerine};
  padding: 9px 13px 11px 12px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    ${imageStylesMedium}
    padding: 19px 16px 20px 24px;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    ${imageStylesLarge}
    padding: 31px 37px 30px 35px;
  }
`;

export const StyledStopwatchImage = styled('div')`
  ${imageStyles}
  background-color: ${({ theme }) => theme.colors.coral};
  padding: 10px 14px 13px 13px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    ${imageStylesMedium}
    padding: 17px 16px 25px 24px;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    ${imageStylesLarge}
    padding: 26px 37px 34px 34px;
  }
`;

export const StyledPropertyCard = styled('div')`
  margin-bottom: 33px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-bottom: 80px;
  }
  .MuiPaper-root {
    padding: 0;
    margin: 0 auto;
  }
`;

export const StyledContent = styled('div')`
  color: ${({ theme }) => theme.colors.darkGray};
  transform: translateY(-114px);
  padding: 0 22px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    transform: translateY(-54px);
    max-width: 850px;
    margin: 0 auto 82px;
  }
`;

export const StyledTypography = styled(Typography)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 18px;
  max-width: 150px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    text-align: center;
  }
`;

export const StyledDivider = styled(Divider)`
  font-size: 34px;
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 0 auto 50px;
  span {
    display: inline-block;
    padding: 0 30px;
  }
`;

export const StyledHeading = styled(Typography)`
  font-size: 22px;
  text-align: center;
  margin-bottom: 38px;
`;

export const StyledExpecationsCon = styled('div')`
  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: flex;
    justify-content: space-around;
  }
`;

export const StyledExpectations = styled('div')`
  display: flex;
  align-items: flex-end;
  margin-bottom: 28px;
  &:last-child {
    margin-bottom: 40px;
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    flex-direction: column;
    margin-bottom: 60px;
  }
`;

export const StyledButtonContainer = styled('div')`
  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: flex;
    justify-content: center;
  }
`;
export const StyledButton = styled(Button)`
  box-shadow: none;
  text-transform: capitalize;
  width: 100%;
  margin-bottom: 30px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 237px;
  }
`;

export const StyledAcceptanceText = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.colors.accessibleGray};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: 52px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 530px;
    margin: 0 auto 37px;
  }
`;

export const StyledDividerBottom = styled(Divider)`
  margin-bottom: 20px;
`;

export const StyledDetailedHeading = styled(Typography)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 14px;
  margin-bottom: 20px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-bottom: 5px;
  }
`;

export const StyledDetailedText = styled(Typography)`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 12px;
  line-height: 1.8;
  margin-bottom: 22px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-bottom: unset;
  }
`;

export const StyledBoldFee = styled('span')`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const StyledList = styled('ul')`
  list-style: none;
  padding-left: 0;
  margin: 0 0 50px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin: 0 0 16px;
  }
`;
