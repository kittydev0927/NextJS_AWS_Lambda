import { styled } from '@mui/material';

import type { StyledMainContainerProps } from '#components/forms/molecules/ProfileBuilderWrapper/ProfileBuilderWrapper.types';
import { Paper } from '#components/layouts/organisms/Paper/Paper';
import { muiCustomShadow } from '#styles/styles';

export const StyledPaperContainer = styled('div')`
  padding: 72px 83px 160px 76px;
  box-shadow: ${({ theme }) => theme.shadows[muiCustomShadow]};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  @media (max-width: 894px) {
    padding: 38px 31px 64px 32px;
  }
`;

export const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;

  .MuiPaper-root.inner-paper {
    padding: 24px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding: 40px 60px 40px 50px;
    }
    @media screen and (max-width: 350px) {
      padding: 12px 10px 38px;
    }
  }
`;

export const StyledInnerPaper = styled('div')`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export const StyledDividerContainer = styled('div')`
  grid-row-start: 0;
  grid-row-end: 1;
  grid-column-start: 1;
  grid-column-end: 9;
  display: none;
  .MUIDivider-root {
    padding: 0;
    margin: 0;
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-left: 40px;
    grid-row-start: 0;
    grid-row-end: 2;
    grid-column-start: 3;
    grid-column-end: 9;
    display: block;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-row-start: 0;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 9;
  }
`;

export const StyledDividerText = styled('div')`
  display: flex;
  justify-content: space-between;
  h6 {
    vertical-align: center;
    font-weight: bold;
    font-size: 20px;
  }
  p {
    vertical-align: center;
    font-family: ${({ theme }) => theme.fonts.Raleway}
    align-items: end;
    justify-content: end;
`;

export const StyledImage = styled('div')`
  max-width: 360px;
  max-height: 350px;
  margin-top: 40px;
`;

export const StyledProgressContainer = styled('div')`
  grid-area: 1 / 1 / 6 / 3;
`;
export const SmallProgressContainer = styled('div')`
  background-color: white;
`;
export const StyledLeftContainer = styled('div')`
  justify-content: center;
  display: flex;
  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-area: 2 / 3 / 8 / 6;
  }
  ${({ theme }) => theme.breakpoints.up('lg')} {
    grid-area: 2 / 2 / 8 / 6;
  }
`;

export const StyledMainContainer = styled('div', {
  shouldForwardProp: prop => prop !== 'isShowIllustration' && prop !== 'isProfileCompleted',
})<StyledMainContainerProps>`
  max-width: 412px;
  display: grid;
  grid-area: 1 / 1 / 9 / 9;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-area: 1 / 4 / 8 / 9;
    margin-top: 35px;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: 0;
    ${({ isShowIllustration, isProfileCompleted }) => {
      if (isShowIllustration) {
        return 'grid-area: 2 / 6 / 8 / 9';
      }

      return isProfileCompleted ? 'grid-area: 1 / 3 / 8 / 9' : 'grid-area: 2 / 3 / 8 / 9';
    }}
  }
`;
