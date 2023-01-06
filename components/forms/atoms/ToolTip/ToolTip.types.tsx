import type { TooltipProps } from '@mui/material';

export interface ToolTipProps {
  content: { value: string; href?: string; linkText?: string }[];
  placement?: TooltipProps['placement'];
  open: TooltipProps['open'];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
