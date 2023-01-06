import Box from '@mui/material/Box';
import * as React from 'react';

import type { BasicTabsProps, TabContextInterface } from './BasicTabs.types';

export const TabContext = React.createContext<TabContextInterface>({
  value: 0,
  handleChange: () => {
    return null;
  },
});

export const BasicTabs: React.FC<BasicTabsProps> = (props: BasicTabsProps) => {
  const { children } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event: unknown, newValue: React.SetStateAction<number>): void => {
    setValue(newValue);
  };

  return (
    <TabContext.Provider value={{ value, handleChange }}>
      <Box sx={{ width: '100%' }}>{children}</Box>
    </TabContext.Provider>
  );
};
