import { styled } from '@mui/material';

export const StyledContainer = styled('div')`
  width: 100%;
  height: 108px;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    height: 230px;
  }
`;

export const StyledImageWrapper = styled('div')`
  padding: 26px 0 0 0;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 55px 0 0 0;
  }
  img {
    width: 39px;
    height: 28px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      width: 94px;
      height: 68px;
    }
  }
`;

export const StyledUploadWrapper = styled('div')`
  padding: 11px 0 21px 0;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 30px 0 55px 0;
  }

  div#fileExplorer {
    margin-top: 0px;
  }

  div#fileExplorer label {
    width: 100%;
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.Raleway};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    ${({ theme }) => theme.breakpoints.up('sm')} {
      font-size: 16px;
    }
  }
`;
