import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const StyledCard = styled(Card)`
  display: flex;
  width: 100%;
  &.MuiCard-root {
    padding: 0;
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`;

export const StyledCardMedia = styled(CardMedia)<{ alt: string; component: string }>`
  width: 100%px;
  max-width: 130px;
  height: 133px;
  max-height: 133px;
  margin: 17px 0px 19px 64px;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 237px;
    height: 157px;
    max-height: 157px;
    margin: 32px 40px 0 35px;
  }
`;

export const StyledCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 21px;
  .MuiCardContent-root {
    padding: 0;
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin: 0 40px 0 35px;
  }
`;

export const StyledCardContent = styled(CardContent)`
  margin-left: 30px;
  width: 100%;
  max-width: 239px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
    margin-left: 0;
  }
`;

export const StyledCardHeader = styled(Typography)`
  height: 35px;
  margin: 4px 0 3px 0;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: none;
  }
`;

export const StyledCardAddress = styled(Typography)`
  height: 47px;
  margin: 3px 0 9px 0;
  font-size: 16px;
  line-height: 1.38;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 44px;
    margin: 25px 0 0 0;
  }
`;

export const StyledCardDetails = styled(Typography)`
  width: 100%;
  height: 47px;
  margin: 3px 0 2px 0;
  font-size: 16px;
  line-height: 1.38;
  text-align: inherit;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin: 8px 0 0 0;
  }
`;

export const StyledCardLineItem = styled('span')`
  line-height: 22px;
`;
