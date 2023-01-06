import Tabs from '@mui/material/Tabs';
import * as React from 'react';

import { TabContext } from '../BasicTabs/BasicTabs';
import type { TabsContainerProps } from './TabsContainer.types';

export const TabsContainer: React.FC<TabsContainerProps> = ({ children, value, onChange, ...props }) => {
  const { value: contextValue, handleChange } = React.useContext(TabContext);

  return (
    <Tabs value={value ?? contextValue} onChange={onChange ?? handleChange} aria-label="basic tabs example" {...props}>
      {children}
    </Tabs>
  );
};
