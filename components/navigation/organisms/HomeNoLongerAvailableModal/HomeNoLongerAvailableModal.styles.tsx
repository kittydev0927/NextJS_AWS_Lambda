import { Box, Dialog, styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { theme } from '#styles/styles';

export const StyledHomeNoLongerAvailable = styled('div')``;

export const StyledModal = styled(Dialog)`
  .MuiDialog-paper {
    max-width: 453px;
  }
  .MuiSvgIcon-root {
    color: ${() => theme.colors.black};
    font-size: 2rem;
  }
`;

export const StyledHeader = styled(Typography)`
  font-size: 22px;
  font-family: ${() => theme.fonts.Raleway};
  padding-bottom: 14px;
  ${() => theme.breakpoints.up('sm')} {
    font-size: 24px;
  }
`;

export const StyledTypography = styled(Typography)`
  font-size: 16px;
  ${() => theme.breakpoints.up('sm')} {
    font-size: 18px;
  }
  padding-bottom: 8px;
  letter-spacing: normal;
  color: ${() => theme.colors.darkGray};
`;

export const StyledButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
  font-family: ${() => theme.fonts.Roboto};
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const StyledUnderstandButton = styled('div')`
  margin: 1px 0 0;
  padding: 14px;
  object-fit: contain;
  border-radius: 15px;
  background-color: ${() => theme.colors.teal};
  font-family: ${() => theme.fonts.Roboto};
  font-size: 16px;
  font-weight: ${() => theme.fontWeight.bold};
  line-height: 1.38;
  letter-spacing: 0.36px;
  text-align: center;
  color: ${() => theme.colors.white};
  cursor: pointer;
`;
export const StyledBrowseHomesButton = styled('a')`
  height: 50px;
  margin: 16px 0 0 0;
  font-family: ${() => theme.fonts.Roboto};
  font-size: 16px;
  font-weight: ${() => theme.fontWeight.bold};
  line-height: 1.38;
  text-decoration: none;
  text-align: center;
  color: ${() => theme.colors.jade};
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const StyledCloseButton = styled('div')`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  .MuiButton-root {
    min-width: unset;
    &:hover {
      background-color: none;
    }
    .MuiSvgIcon-root {
      font-size: 30px;
      color: ${() => theme.colors.black};
    }
  }
`;

export const StyledBox = styled(Box)`
  padding: 60px 30px 32px;
  ${() => theme.breakpoints.up('sm')} {
    padding: 78px 60px 80px;
  }
`;
