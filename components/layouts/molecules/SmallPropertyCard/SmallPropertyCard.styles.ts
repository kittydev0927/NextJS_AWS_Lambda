import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const StyledCard = styled(Card)`
  display: inherit;
  width: 100%;
  max-width: 233px;
  height: 206px;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  &.MuiCard-root {
    padding: 0;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: flex;
    width: 100%;
    max-width: 415px;
    height: 141px;
  }
`;

export const StyledCardMedia = styled(CardMedia)<{ alt: string; component: string }>`
  max-width: 233px;
  max-height: 103px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    max-width: 164px;
    min-width: 164px;
    max-height: 141px;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  display: inherit;
  margin-top: 0;
  .MuiCardContent-root {
    padding: 0;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: 22px;
  }
`;

export const StyledCardContent = styled(CardContent)`
  margin-left: 0;

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-left: 39px;
    padding-bottom: 0;
  }
`;

export const StyledCardHeader = styled(Typography)`
  height: 17px;
  margin: 14px 0 5px;
  font-size: 14px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: normal;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 194px;
    margin: 0;
    font-size: 16px;
    text-align: inherit;
  }
`;

export const StyledCardAddress = styled(Typography)`
  width: 135px;
  height: 30px;
  margin: 5px auto 7px;
  font-size: 12px;
  line-height: 1.25;
  text-align: center;
  font-style: normal;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 185.8px;
    margin: 10px 8.2px 4px 0;
    font-size: 14px;
    line-height: 1.57;
    text-align: inherit;
    height: 30px;
    height: inherit;
  }
`;

export const StyledCardDetails = styled(Typography)`
  width: 161px;
  height: 12px;
  margin: 7px auto 0 auto;
  font-size: 11px;
  line-height: 1.09;
  text-align: center;
  font-weight: bold;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 185.8px;
    margin: 4px 8.2px 23px 0;
    font-size: 12px;
    line-height: 1.83;
    text-align: inherit;
    height: inherit;
  }
`;
