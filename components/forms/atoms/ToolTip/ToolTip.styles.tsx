import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { styled } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const StyledTooltip = styled(props => <Tooltip classes={{ popper: props.className }} {...props} />)`
  & .MuiTooltip-tooltip {
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.11);
    background-color: ${({ theme }) => theme.colors.white};
    padding: 10px 20px 18px 12px;
    font-weight: normal;
  }

  & .MuiTooltip-arrow {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledIcon = styled(InfoOutlinedIcon)`
  color: ${({ theme }) => theme.colors.darkGreen};
`;

export const StyledText = styled('p')`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mondo};
  margin: 0;
`;
export const StyledLink = styled('a')`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.accessibleGreen};
  margin: 0 3px 0 3px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
