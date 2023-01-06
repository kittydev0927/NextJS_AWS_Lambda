import { Grid, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { Paper } from '#components/layouts/organisms/Paper/Paper';
import { muiCustomShadow } from '#styles/styles';

interface Props {
  index?: number;
}

export const StyledPaperContainer = styled('div')`
  padding: 72px 83px 160px 76px;
  box-shadow: ${({ theme }) => theme.shadows[muiCustomShadow]};
  border-radius: 15px;

  @media (max-width: 894px) {
    padding: 38px 31px 64px 32px;
  }
`;

export const StyledPaper = styled(Paper)`
  padding: 14px 14px 16px 15px;
`;

export const StyledBoxContainer = styled(Box)`
  justify-content: center;
  display: grid;
`;

export const StyledHeader = styled(Typography)`
  font-size: 24px;
  margin: 20px 0px 16px 0px;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 34px;
    margin: 79px 64px 14px 60px;
    width: auto;
  }
`;

export const StyledBody = styled(Typography)`
  margin: 14px 0 0;
  max-width: 831px;
  letter-spacing: normal;
  text-align: center;
  margin: 0 0 0px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-bottom: 34px;
    margin: 14px 0 0;
  }
`;

export const StyledGridContainer = styled(Grid)`
  margin-top: auto;

  @media (max-width: 894px) {
    margin-bottom: 28px;
  }

  div.MuiPaper-root {
    padding: 0px;
  }
`;

export const StyledInnerGridContainer = styled(Grid)`
  max-width: ${(p: Props) => (p.index === 1 ? 'fit-content' : 'inherit')};
  margin-bottom: 118px;

  @media (max-width: 894px) {
    justify-content: center;
    margin-bottom: 0px;
  }
`;

export const StyledGrid = styled(Grid)`
  justify-content: ${(p: Props) => {
    if (p.index === 0) {
      return 'flex-end';
    }

    return p.index === 2 ? 'flex-start' : 'center';
  }};

  @media (max-width: 894px) {
    justify-content: center;
  }

  .MuiCard-root {
    padding: 0;
  }
`;
