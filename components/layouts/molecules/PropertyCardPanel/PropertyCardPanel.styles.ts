import { Grid, styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

import type { PropertyCardPanelStyleProps, StyledDescriptionProps, StyledTitleProps } from './PropertyCardPanel.types';

export const StyledConDiv = styled('div')`
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const StyledDividerCon = styled('div')`
  display: none;
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: block;
    padding-left: 27px;
    padding-right: 27px;
    .MuiDivider-vertical {
      height: 34px;
    }
  }
`;

export const StyledTitleDiv = styled('div', {
  shouldForwardProp: prop => prop !== 'showFilters',
})<PropertyCardPanelStyleProps>`
  display: flex;
  flex-direction: column;
  padding: 20px 17px 0;
  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
    justify-content: ${props => (props.showFilters ? 'space-between' : 'flex-start')};
    align-items: center;
    padding: 20px 14px 0;
  }
`;

export const StyledDescDiv = styled('div')`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-top: 10px;
  margin-right: 88px;
  line-height: 1.6;
  margin-bottom: 10px;
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: none;
  }
`;

export const StyledDescBottomDiv = styled('div')<StyledDescriptionProps>`
  display: none;
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: flex;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin-left: initial;
    margin-top: 10px;
    margin-right: 88px;
    margin-bottom: ${({ margin }) => (margin === 'large' ? '60px' : '30px')};
    line-height: 1.6;
    padding: 20px 14px 0;
  }
`;

export const StyledTitleTypography = styled(Typography)<StyledTitleProps>`
  margin-right: ${({ title }) => title === 'Saved Homes' && '20px'};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-left: initial;
    font-size: 28px;
  }
`;

export const StyledCopyTypography = styled(Typography)`
  font-size: 14px;
  padding: 20px 14px 0;
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.breakpoints.up('xs')} {
    margin-left: 32px;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-left: initial;
  }
`;

export const StyledLink = styled(Typography)`
  text-decoration: underline;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 0.34px;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 34px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 16px;
    margin-left: initial;
    margin-bottom: initial;
    padding-top: 2px;
  }
`;

export const StyledPropCardsDiv = styled('div')`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  margin: 40px 0;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 411px));
    justify-content: center;
    box-shadow: none;
  }
  .MuiCard-root {
    border-radius: initial;
    display: inline-block;
    border: none;
    box-shadow: 3px 2px 19px 0 ${({ theme }) => theme.colors.boxShadow};
    ${({ theme }) => theme.breakpoints.up('sm')} {
      border-radius: ${({ theme }) => theme.borderRadius.primary};
      min-width: 300px;
    }
  }
`;

export const StyledPagCon = styled(Grid)`
  padding-bottom: 20px;
`;

export const StyledPropertyFiltersCon = styled('div')`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-top: 30px;
  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
    padding: initial;
  }
  .sort-filter-option {
    ${({ theme }) => theme.breakpoints.up('sm')} {
      grid-gap: 10px;
    }
    ${({ theme }) => theme.breakpoints.up('md')} {
      margin-right: 16px;
    }
  }
  .list-map-button {
    align-self: flex-end;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      margin-bottom: 16px;
    }
  }
`;

export const StyledPropertyCount = styled('span')`
  font-weight: ${({ theme }) => theme.fontWeight.thin};
`;

export const StyledMapContainer = styled('div')`
  margin-bottom: 360px;
  margin-top: 42px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const StyledSwiperCon = styled('div')`
  .swiper-container {
    padding-bottom: 60px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding-bottom: 100px;
    }
    .swiper-slide {
      height: auto;
    }
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
      ${({ theme }) => theme.breakpoints.up('sm')} {
        display: flex;
        top: 93%;
        background-color: ${({ theme }) => theme.colors.white};
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 7px;
        color: ${({ theme }) => theme.colors.black};
        box-sizing: border-box;
        z-index: 100;
      }
    }
    .swiper-button-prev {
      right: 73px;
      left: unset;
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
      font-size: 20px;
    }
    .swiper-pagination {
      bottom: 0;
      background-color: ${({ theme }) => theme.colors.white};
      padding: 15px;
      width: fit-content;
      left: 50%;
      transform: translateX(-50%);
      border-radius: ${({ theme }) => theme.borderRadius.primary};
      ${({ theme }) => theme.breakpoints.up('sm')} {
      }
      .swiper-pagination-bullet {
        background: ${({ theme }) => theme.colors.alto} !important;
        height: 9px;
        width: 9px;
        margin: 0 6px;
      }
      .swiper-pagination-bullet-active {
        background: ${({ theme }) => theme.colors.darkGreen} !important;
      }
    }
  }
`;
