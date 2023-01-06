import MUITab from '@mui/material/Tab';
import * as React from 'react';

import type { TabProps } from './Tab.types';

// tab requires a11y props and label
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Tab: React.FC<TabProps> = (props: TabProps) => {
  const { index = 0, label, value } = props;

  return <MUITab {...props} value={value} label={label} {...a11yProps(index)} />;
};
