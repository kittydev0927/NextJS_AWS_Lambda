import { styled } from '@mui/material';

import type { ProfileBuildProps } from './ProfileBuild.types';

export const StyledProfileBuild = styled('div')``;

export const StyledProfileIllustration = styled('div')<ProfileBuildProps>`
  flex-shrink: 0;
  width: ${props => props.width};
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const StyledWelcome = styled('div')`
  margin-left: 20px;
  @media screen and (max-width: 600px) {
    margin-left: 0;
    .MuiTypography-root {
      font-size: 18px;
    }
  }
`;

export const StyledButton = styled('div')`
  button {
    font-size: 16px;
  }
`;

export const StyledTextCon = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  @media screen and (max-width: 600px) {
    margin-bottom: 5px;
    margin-bottom: 10px;
  }
`;

export const StyledTextMainCon = styled('div')`
  .MuiTypography-root {
    margin-bottom: 25px;
    @media screen and (max-width: 600px) {
      margin-bottom: 16px;
    }
  }
`;

export const StyledSavedHomesText = styled('div')`
  .MuiTypography-root {
    @media screen and (max-width: 600px) {
      margin-top: 33px;
    }
  }
`;
