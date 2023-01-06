import Box from '@mui/material/Box';
import * as React from 'react';

import { TabContext } from '../BasicTabs/BasicTabs';
import type { TabPanelProps } from './TabPanel.types';

export const TabPanel: React.FC<TabPanelProps> = ({ children, value: passedValue, index, ...props }) => {
  let { value } = React.useContext(TabContext);
  if (passedValue) {
    value = passedValue;
  }

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...props}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
};
