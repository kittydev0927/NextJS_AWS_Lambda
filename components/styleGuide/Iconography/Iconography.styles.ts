import { styled } from '@mui/material';

export const StyledMainContainer = styled('div')`
  margin: 4rem;
  max-width: 700px;
`;

export const StyledSocialMediaContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const StyledSocialMediaIconsContainer = styled('div')`
  width: 12.5%;
  margin-right: 10px;
`;

export const StyledToolTipContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const StyledToolTipContainerIcons = styled('div')`
  width: 12.5%;
  margin-right: 10px;
`;

export const StyledWebsiteContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const StyledWebsiteInnerContainer = styled('div')`
  width: 12.5%;
  margin-right: 10px;
`;

export const OuterIconContainer = styled('div')`
  box-shadow: none;
  border: 2px solid rgba(0, 0, 0, 0.1);
  :hover {
    border: 2px solid ${({ theme }) => theme.colors.jade};
    cursor: pointer;
  }
`;

export const InnerIconContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0.625rem;
  margin: 0;
`;

export const IconContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 55px;
`;

export const IconDescription = styled('div')`
  padding: 0.2em;
  font-size: 0.75em;
  text-align: center;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  border-top: 1px solid #dfe3e6;
`;
