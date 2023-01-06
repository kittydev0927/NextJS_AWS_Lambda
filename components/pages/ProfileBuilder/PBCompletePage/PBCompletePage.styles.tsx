import { Grid, styled, Typography } from '@mui/material';

interface IProps {
  index?: number;
}
export const StyledPBCompletePageWrapper = styled('div')`
  max-width: 698px;
`;

export const StyledHeader1 = styled(Typography)`
  margin-bottom: 10px;
`;

export const StyledHeader2 = styled(Typography)`
  font-size: 16px;
  margin: 20px 0 16px 0;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const StyledInnerGridContainer = styled(Grid)`
  max-width: ${(p: IProps) => (p.index === 1 ? 'fit-content' : 'inherit')};
  justify-content: center;
`;

export const StyledGrid = styled(Grid)`
  justify-content: center;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    justify-content: flex-start;
  }

  .MuiCard-root {
    padding: 0;
  }
`;

export const StyledGridContainer = styled(Grid)`
  margin-top: auto;
  display: grid;
  grid-template-columns: 1fr;
  > div > div > div {
    width: 100%;
    > div {
      width: calc(100% - 32px);
      &:first-child {
        width: 100%;
        + div > * {
          width: 100%;
          margin-left: 0;
          margin-right: 0;
        }
      }
    }
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-bottom: 28px;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-template-columns: 1fr 1fr;
    margin-top: 15px;
  }
  ${({ theme }) => theme.breakpoints.up('lg')} {
    > div > div > div {
      width: 100%;
      max-width: 340px;
      > div {
        width: auto;
        &:first-child {
          width: auto;
          + div > * {
            width: auto;
            margin-left: 16px;
            margin-right: 0;
          }
        }
      }
    }
  }
`;
