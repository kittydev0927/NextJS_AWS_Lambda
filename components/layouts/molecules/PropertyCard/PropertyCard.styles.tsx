import { Button, Card, css, Grid, IconButton, Link, styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { muiCustomShadow } from '#styles/styles';

import type { MapTypeCard, PropertyCardProps } from './PropertyCard.types';

const shouldForwardProp = (prop: string | number | symbol) => prop !== 'mapTypeCard';
const options = { shouldForwardProp };
const customImageSpacing = 32;

export const StyledCardWrapper = styled(Card, options)<MapTypeCard>`
  width: 100%;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  height: 100%;


  ${({ mapTypeCard, theme }) =>
    mapTypeCard &&
    css`
      ${theme.breakpoints.down('sm')} {
        border-radius: 0;
        padding-bottom: 25px;
        box-shadow: ${theme.shadows[muiCustomShadow]};
      }
    `}
  }
`;

export const StyledCardHeader = styled('div', options)<MapTypeCard>`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 11px;
  right: 9px;
  left: 9px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    right: 12px;
    top: 13px;
    left: 10px;
  }

  ${({ mapTypeCard }) =>
    mapTypeCard &&
    css`
      left: inherit;
    `}
`;

export const StyledLabelStatus = styled('div')<{ type?: PropertyCardProps['labelStatus'] }>`
  background: ${({ theme, type }) => (type === 'unavailable' ? theme.colors.orangeRed : theme.colors.accessibleGreen)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  padding: 17.5px 14px;
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.primary};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    border-top-left-radius: ${({ theme }) => theme.borderRadius.primary};
  }
`;

export const StyledHeartButton = styled(IconButton, options)<MapTypeCard>`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 0 ${({ theme }) => theme.borderRadius.primary};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    border-radius: 0 ${({ theme }) => theme.borderRadius.primary};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.white};
  }

  svg {
    color: ${({ theme }) => theme.colors.orangeRed};
    font-size: 29px;
  }

  ${({ mapTypeCard }) =>
    mapTypeCard &&
    css`
      box-shadow: 6px 12px 20px 0 rgba(0, 0, 0, 0.17);
    `}
`;

export const StyledImage = styled('img', options)<MapTypeCard>`
  object-position: bottom;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  object-fit: cover;
  height: ${({ theme }) => theme.spacing(customImageSpacing)};
  ${({ mapTypeCard }) =>
    mapTypeCard &&
    css`
      max-height: 108px;
    `}
`;

export const StyledCardContent = styled(Grid)`
  padding: 25px 0 44px 19px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 25px 0 44px 25px;
  }
`;

export const StyledPrice = styled(Typography, options)<MapTypeCard>`
  color: ${({ theme }) => theme.colors.genoa};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 0.03px;

  ${({ mapTypeCard }) =>
    mapTypeCard &&
    css`
      font-size: 28px;
    `}

  span {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 14px;
    letter-spacing: 0.01px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    &:before {
      content: '/';
      font-style: italic;
      margin-right: 1px;
    }
  }
`;

export const StyledRoomNumberContainer = styled(Grid, options)<MapTypeCard>`
  justify-content: space-between;
  margin-top: 14px;
  margin-left: 4px;
  max-width: 153px;
`;

export const StyledRoomNumberDivider = styled('div')`
  border-right: 2px solid ${({ theme }) => theme.colors.mercury};
`;

export const StyledRoomNumber = styled('div')`
  display: flex;
  align-items: center;
  font-size: 16px;
  letter-spacing: 0.01px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.gray};

  span {
    margin-left: 15px;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const StyledStatusesTitles = styled(Grid, options)<MapTypeCard>`
  padding-top: 3px;
  padding-left: 25px;

  ${({ mapTypeCard }) =>
    mapTypeCard &&
    css`
      padding-top: 35px;
      padding-left: 0;
    `}
`;

export const StyledStatus = styled(Typography)<{ type?: PropertyCardProps['labelStatus'] }>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 16px;
  &:not(:first-child) {
    margin-top: 9px;
  }

  &:before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    margin-right: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    background: ${({ theme, type }) => (type === 'unavailable' ? theme.colors.orangeRed : theme.colors.lime)};
    border-radius: 50%;
  }
`;

export const StyledCardBottomContent = styled(Grid)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-left: ${({ theme }) => theme.spacing(1)};
  margin-right: 34px;
  border-top: 1px solid ${({ theme }) => theme.colors.silver};
`;

export const StyledAddressLink = styled(Link, options)<MapTypeCard>`
  display: block;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration-color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  margin-top: 21px;
  ${({ mapTypeCard }) =>
    mapTypeCard &&
    css`
      text-align: left;
      margin-top: 15px;
      margin-left: 16px;
      margin-right: 15px;
      line-height: 1.57;
    `}
`;

export const StyledButton = styled(Button, options)<MapTypeCard>`
  margin-top: 30px;
  padding: 15px 76px;
  text-transform: capitalize;
  ${({ mapTypeCard }) =>
    mapTypeCard &&
    css`
      width: 100%;
      margin-right: 20px;
      margin-left: 20px;
    `}
`;

export const StyledCardMapRightContent = styled(Grid)`
  padding-left: 28px;
  padding-top: 39px;
`;

export const StyledGrid = styled(Grid, options)<MapTypeCard>`
  .MuiCard-root {
    box-shadow: ${({ theme }) => theme.shadows[muiCustomShadow]};
  }
`;
