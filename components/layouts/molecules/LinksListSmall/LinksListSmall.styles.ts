import { styled } from '@mui/material';

import { Link } from '../../atoms/Link/Link';
import { Typography } from '../../atoms/Typography/Typography';

export const StyledGridItemFlex = styled('div')`
  display: flex;
  align-items: center;
  .MuiSvgIcon-root {
    margin-right: 5px;
  }
`;

export const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.OpenSans};
  font-size: 1rem;
`;

export const StyledHeading = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.Raleway};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.heavy};
`;
