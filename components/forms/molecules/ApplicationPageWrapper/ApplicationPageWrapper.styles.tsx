import { styled } from '@mui/material';

import { Paper } from '#components/layouts/organisms/Paper/Paper';
import { muiCustomShadow } from '#styles/styles';

export const StyledPageWrapperBackground = styled('div')`
  background-color: ${({ theme }) => theme.colors.softPeach};
  position: relative;
`;

export const StyledPaperContainer = styled('div')`
  min-height: 713px;
  background-color: transparent;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    min-width: 312px;
  }
`;

export const StyledPaper = styled(Paper)`
  box-shadow: ${({ theme }) => theme.shadows[muiCustomShadow]};
  margin: 0;
  padding-right: 0;
  border-radius: ${({ theme }) => theme.borderRadius.primary};

  .MuiPaper-root {
    display: grid;

    .inner-paper {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }
  }
`;

export const StyledMainContainer = styled('div')`
  background-color: transparent;
  padding: 50px 32px 99px 32px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 70px;
  }
`;

export const StyledButtonWrapper = styled('div')`
  bottom: -25px;
  position: absolute;
  right: 34px;
  z-index: 2;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    bottom: unset;
    right: 49px;
    top: 107px;
  }
`;

export const StyledProgressContainer = styled('div')`
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 1;
  grid-column-end: 3;
  padding-left: 62px;
  padding-top: 39px;
`;

export const SmallProgressContainer = styled('div')`
  background-color: ${({ theme }) => theme.colors.white}; ;
`;

export const StyledCenterContainer = styled('div')`
  max-width: 412px;
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 1;
  grid-column-end: 7;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 4;
    grid-column-end: 6;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 3;
    grid-column-end: 5;
  }
`;

export const StyledButtonContainer = styled('div')`
  padding: 0 20px;
  margin-bottom: 40px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 0;
  }
  button {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: 16px;
    &.cancel-button {
      ${({ theme }) => theme.breakpoints.up('sm')} {
        font-size: 18px;
      }
    }
  }
`;

export const StyledBottomContainer = styled('div')`
  padding-top: 17px;
  border-top: solid 1px ${({ theme }) => theme.colors.lightGray};
  margin-right: 37px;
  margin-left: 37px;
  margin-bottom: 39px;
  justify-self: end;
  margin-top: auto;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-bottom: 35px;
  }
`;

export const StyledDescription = styled('div')`
  border-top: solid 1px ${({ theme }) => theme.colors.lightGray};
  max-width: 439px;
  height: 98px;
  margin-top: 40px;

  p {
    margin-top: 20px;
  }
`;
