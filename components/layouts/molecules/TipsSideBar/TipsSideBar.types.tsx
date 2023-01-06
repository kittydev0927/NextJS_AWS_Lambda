import type { DrawerProps } from '@mui/material';

export interface TipsSideBarProps {
  containerHeight?: number;
  containerProp: DrawerProps['container'];
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  content?: { title: string; texts: string[] }[];
  header?: string;
  customPlacement?: boolean;
}

export interface StyledContainerProps {
  open: boolean;
  containerHeight?: number;
  customPlacement: boolean;
}

export interface ButtonPositionProps {
  top: number;
  right: number;
}
