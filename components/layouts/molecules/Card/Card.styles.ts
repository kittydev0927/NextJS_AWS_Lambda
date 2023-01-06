import { Card, CardActions, CardContent, styled, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

import type { CardProps } from './Card.types';

const privateProps = new Set<string | number | symbol>(['buttonPosition', 'isFullWidth', 'titleHeight']);

const shouldForwardProp = (prop: string | number | symbol) => !privateProps.has(prop);

export const StyledCardContainer = styled(Card, { shouldForwardProp })<CardProps>`
  width: ${props => props.maxwidth}px;
  padding: 0px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  .MuiCard-root {
    padding: 0px;
  }

  @media (max-width: 894px) {
    width: ${props => (props.isFullWidth ? '100%' : '248px')};
  }
`;

export const StyledCardMedia = styled(CardMedia, { shouldForwardProp })<CardProps>`
  background-color: ${props => props.mediaimgcolor};
  height: ${props => `${props.mediaimgheight}px`};
  width: ${props => props.maxwidth}px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 894px) {
    height: 24px;
    width: ${props => (props.isFullWidth ? '100%' : `${props.maxwidth}px`)};
  }
`;

export const StyledImage = styled('div')`
  @media (max-width: 894px) {
    display: none;
  }
`;

export const StyledCardContent = styled(CardContent)`
  padding: 16px 16px 0px;
`;

export const StyledHeadingTypography = styled(Typography, { shouldForwardProp })<CardProps>`
  width: ${props => (props.isFullWidth ? 'calc(100% - 32px)' : '211px')};
  height: ${({ titleHeight }) => titleHeight};
  margin: 15px 0 12px 16px;
  font-size: 20px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;

  @media (max-width: 894px) {
    width: ${props => (props.isFullWidth ? '100%' : '205px')};
    height: auto;
    margin: 0 0 5px 5px;
  }
`;

export const StyledBodyTypography = styled(Typography, { shouldForwardProp })<CardProps>`
  width: ${props => (props.isFullWidth ? 'calc(100% - 32px)' : '202px')};
  height: 65px;
  margin: 12px 9px 16px 16px;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.doveGray};

  @media (max-width: 894px) {
    width: ${props => (props.isFullWidth ? '100%' : '205px')};
    height: auto;
    margin: 5px 1px 8px 5px;
    font-size: 14px;
    line-height: 1.57;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const StyledCardActions = styled(CardActions, { shouldForwardProp })<CardProps>`
  justify-content: center;
  padding: 12px 20px;

  @media (max-width: 894px) {
    justify-content: ${({ buttonPosition }) => buttonPosition || 'end'};
    padding: ${props => (props.isFullWidth ? ' 0px  8px' : ' 0px 8px 8px')};
    float: ${props => (props.isFullWidth ? 'left' : 'right')};
    margin-top: ${props => (props.isFullWidth ? '-10px' : '0')};
  }
`;
