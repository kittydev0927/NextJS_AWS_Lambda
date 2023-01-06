import type { TabsProps } from '@mui/material/Tabs';
import type React from 'react';

export interface TabsContainerProps extends Omit<TabsProps, 'onChange'> {
  children?: React.ReactNode;
  value?: number;
  onChange?: (event: React.ChangeEvent<unknown>, newValue: number) => void;
}
