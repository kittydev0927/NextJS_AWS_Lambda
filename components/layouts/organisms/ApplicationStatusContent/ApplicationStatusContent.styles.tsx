import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledProcessingCon = styled('div')``;
export const StyledDeniedCon = styled('div')`
  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 100%;
    margin: 0 auto;
  }
`;
export const StyledApprovedCon = styled('div')`
  width: 100%;
`;
export const StyledSubmittedCon = styled('div')``;
export const StyledContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row-reverse;
    align-items: unset;
  }
  &.processing {
    ${({ theme }) => theme.breakpoints.up('sm')} {
      max-width: 846px;
    }
  }
  &.denied {
    max-width: 1020px;
  }
`;

export const StyledSection = styled('div')`
  &.processing {
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding: 15px 0 0 44px;
    }
  }
  &.submitted {
    margin-bottom: 60px;
  }
  &.denied {
    ${({ theme }) => theme.breakpoints.up('md')} {
      margin-left: 163px;
      width: 38%;
    }
  }
  &.approved {
    h2 {
      ${({ theme }) => theme.breakpoints.up('sm')} {
        margin-top: 44px;
      }
    }
  }
  &.approved,
  &.submitted {
    h2 {
      font-size: 25px;
      @media screen and (min-width: 350px) {
        font-size: 29px;
      }
      ${({ theme }) => theme.breakpoints.up('sm')} {
        font-size: 42px;
      }
  }
`;

export const StyledHeader = styled(Typography)`
  &.processing {
    font-size: 24px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      margin-bottom: 22px;
      font-size: 42px;
    }
  }
  &.denied {
    font-size: 20px;
    margin-bottom: 22px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    ${({ theme }) => theme.breakpoints.up('md')} {
      font-size: 24px;
  }
`;

export const StyledSubHeader = styled(Typography)`
  font-size: 20px;
  line-height: normal;
  margin-bottom: 32px;
  &.approved,
  &.submitted {
    ${({ theme }) => theme.breakpoints.up('sm')} {
      font-size: 24px;
      margin-bottom: 29px;
    }
  }
  &.approved {
    margin-top: 7px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      margin-top: 10px;
    }
  }
  &.submitted {
    margin-top: 14px;
  }
`;

export const StyledText = styled(Typography)`
  font-size: 16px;
  &.processing {
    margin-bottom: 32px;
    ${({ theme }) => theme.breakpoints.up('md')} {
      margin-bottom: unset;
    }
  }
  &.approved {
    font-size: 14px;
    line-height: 1.4;
  }
  &.submitted {
    font-size: 16px;
    line-height: 1.4;
  }
`;

export const StyledStepImage = styled('div')`
  &.processing {
    ${({ theme }) => theme.breakpoints.up('md')} {
      min-width: 349px;
    }
  }
  &.approved {
    transform: translateY(10px);
    margin: -38px -30px 0 -30px;
    ${({ theme }) => theme.breakpoints.up('md')} {
      transform: translate(-88px, 0);
      margin: 0;
    }
  }
  &.submitted {
    transform: translateY(10px);
    margin: -38px -30px 0 -30px;
    ${({ theme }) => theme.breakpoints.up('md')} {
      transform: unset;
      margin: -57px 0 0;
      transform: translateX(-116px);
    }
  }
  &.denied {
    padding-bottom: 20px;
    ${({ theme }) => theme.breakpoints.up('md')} {
      transform: translate(67px, 24px);
    }
  }
`;

export const StyledList = styled('ul')`
  padding-left: 18px;
`;

export const StyledListItem = styled('li')`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  padding-bottom: 11px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-bottom: 6px;
  }
`;

export const StyledBold = styled('span')`
  font-weight: bold;
`;

export const StyledButton = styled(Button)`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  width: 100%;
  max-width: 231px;
  background-color: ${({ theme }) => theme.colors.teal};
  margin: 23px auto 20px;
  display: block;
  &:hover {
    background-color: ${({ theme }) => theme.colors.teal};
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin: 37px 27px 35px;
  }
  &.denied {
    max-width: 252px;
    font-size: 14px;
    margin: 38px auto 45px;
    ${({ theme }) => theme.breakpoints.up('md')} {
      max-width: 310px;
      margin-left: 0;
      font-size: 16px;
      height: fit-content;
      min-height: 49px;
    }
  }
`;

export const StyledGridContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'content'
    'image';
  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-template-columns: 1.9fr 1fr 1fr;
    grid-template-rows: 1fr;
    overflow: hidden;
  }
  .content {
    z-index: 1;
    grid-area: content;
    ${({ theme }) => theme.breakpoints.up('md')} {
      grid-column: 2 / span 2;
      grid-row: 1 / span 1;
    }
    &.approved {
      ${({ theme }) => theme.breakpoints.up('md')} {
        padding-top: 46px;
      }
    }
  }
  .image {
    grid-area: image;
    z-index: 0;
    justify-self: center;
    align-self: end;
    padding-top: 50px;
    ${({ theme }) => theme.breakpoints.up('md')} {
      justify-self: unset;
      grid-column: 1 / span 2;
      grid-row: 1 / span 1;
      padding-top: unset;
    }
  }
  &.submitted {
    grid-template-rows: auto 1fr;
    ${({ theme }) => theme.breakpoints.up('md')} {
      grid-template-rows: 1fr;
    }
    .content {
      ${({ theme }) => theme.breakpoints.up('md')} {
        padding-top: 70px;
        max-width: 490px;
      }
    }
  }
`;
