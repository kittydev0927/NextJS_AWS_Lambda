import { styled } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export const StyledListOption = styled(ListItem)`
  background-color: rgba(255, 255, 255, 0.15);
  margin: -8px 61px 0 0px;
  width: 100%;
  height: 50px;
  padding-left: 30px;
`;

export const StyledListItem = styled(ListItem)`
  margin: 30px 61px 0 17px;
  width: 85%;
  height: 7px;
`;

export const StyledListIcon = styled(ListIcon)`
  min-width: 20px;
`;

export const StyledListItemText = styled(ListItemText)`
  line-height: 2.81;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.01px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-stretch: normal;
  font-style: normal;
`;

export const StyledOptionArrow = styled('div')`
  margin-right: -10px;
`;

export const StyledListItemOption = styled(ListItemText)`
  line-height: 2.81;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.01px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-stretch: normal;
  font-style: normal;
  margin-left: inherit;
`;
