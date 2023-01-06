import { Typography } from '@mui/material';
import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { Modal as ModalComponent } from '#components/forms/molecules/Modal/Modal';
import { BasicTabs } from '#components/navigation/molecules/BasicTabs/BasicTabs';
import { Tab } from '#components/navigation/molecules/Tab/Tab';
import { TabPanel } from '#components/navigation/molecules/TabPanel/TabPanel';
import { TabsContainer } from '#components/navigation/molecules/TabsContainer/TabsContainer';

export default {
  title: 'Components/Navigation/Organisms/Modal With Tabs',
  component: ModalComponent,
  subcomponents: { BasicTabs, Tab, TabPanel, TabsContainer },
  parameters: {
    docs: {
      description: {
        component: 'Modals with tabs are to be used in the sign in page for the Sign In/Register screen.',
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <ModalComponent {...args}>
    <BasicTabs>
      <TabsContainer>
        <Tab index={0} label="Tab 1" value={0} />
        <Tab index={1} label="Tab 2" value={1} />
        <Tab index={2} label="Tab 3" value={2} />
      </TabsContainer>
      <TabPanel index={0} boxPadding="15px">
        <Typography>Tab 1 details go here</Typography>
      </TabPanel>
      <TabPanel index={1} boxPadding="15px">
        <Typography>Tab 2 details go here</Typography>
      </TabPanel>
      <TabPanel index={2} boxPadding="15px">
        <Typography>Tab 3 details go here</Typography>
      </TabPanel>
    </BasicTabs>
  </ModalComponent>
);

export const ModalWithTabs = Template.bind({});
ModalWithTabs.args = {
  buttonContent: 'Open Modal',
};
