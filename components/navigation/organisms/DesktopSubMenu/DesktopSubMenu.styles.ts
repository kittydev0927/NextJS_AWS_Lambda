import { styled } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Link } from '#components/layouts/atoms/Link/Link';
import { Paper } from '#components/layouts/organisms/Paper/Paper';

export const StyledDiv = styled('div')`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
`;

export const StyledDrawer = styled(Drawer)`
  align-self: center;
  .MuiDrawer-paper {
    width: auto;
    min-height: 305px;
    background-color: ${({ theme }) => theme.colors.accessibleGreen};
    margin: 133px 0% 0;
  }
`;

export const StyledStack = styled(Stack)`
  margin-left: -7.5%;
  margin-bottom: 70px;

  ${({ theme }) => theme.breakpoints.up('lg')} {
    margin-left: -6%;
  }
  ${({ theme }) => theme.breakpoints.up('xl')} {
    margin-left: -24.5%;
  }
`;

export const StyledLabel = styled(Typography)`
  width: 236px;
  height: 45px;
  margin: 0px 86px 5px 56px;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.05;
  letter-spacing: 0.02px;
  color: #fff;
`;

export const StyledLabelLeft = styled(Typography)`
  width: 236px;
  height: 45px;
  margin: 0px 86px 5px 0px;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.05;
  letter-spacing: 0.02px;
  color: #fff;
`;

export const StyledColumn = styled('div')`
  margin-right: 227px;
  width: 568px;
  margin: 46px 10px 10px 0px;
  display: inline-block;
  text-align: left;
`;

export const StyledDivider = styled('div')`
  color: ${({ theme }) => theme.colors.white};
  width: 237px;
  height: 1px;
  margin: 5px 85px 22px 56px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const StyledDividerLeft = styled('div')`
  color: ${({ theme }) => theme.colors.white};
  width: 569px;
  height: 1px;
  margin: 5px 85px 22px 0px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const StyledListItem = styled(ListItem)`
  margin: 22px 80px 0 56px;
  width: 85%;
  height: 0px;
`;

export const StyledStackLeft = styled(Stack)`
  display: flex;
  flex-wrap: wrap;
  max-height: 200px;
`;

export const StyledListItemLeft = styled(ListItem)`
  margin: 22px 0px 0px;
  width: 85%;
  max-width: 210px;
  height: 0px;
`;

export const StyledListItemText = styled(ListItemText)`
  width: 242px;
  margin: 0px 0px -15px;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: 0.01px;
  color: #fff;
`;

export const StyledPaper = styled(Paper)`
  width: 568px;
  min-width: 568px;
  height: 238px;
  margin: 60px 15px 33px 47px;
  padding: 21px 0 0 46px;
  border-radius: 15px;
  background-color: #ffb700;
  background: #ffb700;

  .outer-paper {
    padding: 11px;
    background-color: #ffb700 !important;
  }

  .inner-paper {
    background: #ffb700 !important;
  }
`;

export const StyledCardLabel = styled(Typography)`
  width: 216px;
  height: 68px;
  margin: 0 0 5px;
  font-size: 26px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const StyledCardDesc = styled(Typography)`
  width: 179px;
  height: 44px;
  margin: 5px 0px 13px 2px;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #000;
`;

export const StyledCardLink = styled(Link)`
  width: 129px;
  height: 22px;
  margin: 13px 8px 0 2px;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
`;
