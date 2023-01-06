import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { styled } from '@mui/material';
import type { TooltipProps } from '@mui/material/Tooltip';
import Tooltip from '@mui/material/Tooltip';

import { BedroomSelector } from '#components/forms/atoms/BedroomSelector/BedroomSelector';

export const StyledWrapper = styled('div')`
  max-width: 410px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const StyledBedroomSelector = styled(BedroomSelector)`
  margin-top: 28px;
`;

export const StyledIIcon = styled(ErrorOutlineIcon)`
  position: relative;
  left: 5px;
  bottom: 5px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGreen};
`;

export const StyledTooltip = styled((props: TooltipProps) => (
  <Tooltip classes={{ popper: props.className }} {...props} children={props.children} />
))`
  .MuiTooltip-tooltip {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const StyledButtonWrapper = styled('div')`
  margin-top: 65px;
`;
