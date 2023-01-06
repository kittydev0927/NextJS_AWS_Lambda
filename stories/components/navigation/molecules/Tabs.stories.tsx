import { Typography } from '@mui/material';
import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { BasicTabs } from '#components/navigation/molecules/BasicTabs/BasicTabs';
import { Tab } from '#components/navigation/molecules/Tab/Tab';
import { TabPanel } from '#components/navigation/molecules/TabPanel/TabPanel';
import { TabsContainer } from '#components/navigation/molecules/TabsContainer/TabsContainer';

export default {
  title: 'Components/Navigation/Molecules/Tabs',
  component: BasicTabs,
  subcomponents: { TabsContainer, Tab, TabPanel },
  argTypes: {
    value: {
      control: 'number',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '`Tabs` allows you to create a tab component with any number of tabs. To create a Tabs component, you will need to use `TabsContainer` as a container for your `Tab`s. Please see code below for reference.',
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <BasicTabs {...args}>
    <TabsContainer>
      <Tab value={0} label="Item One" index={0} />
      <Tab value={1} label="Item Two" index={1} />
      <Tab value={2} label="Item Three" index={2} />
    </TabsContainer>
    <TabPanel index={0}>
      <Typography variant="h3">This panel holds information for item 1</Typography>
      <Typography variant="body1">
        Communication is not possible. The shuttle has no power. Using the gravitational pull of a star to slingshot
        back in time? We are going to Starbase Montgomery for Engineering consultations prompted by minor read-out
        anomalies.
      </Typography>
    </TabPanel>
    <TabPanel index={1}>
      <Typography variant="h3">This panel holds information for item 2</Typography>
      <Typography variant="body1">
        It indicates a synchronic distortion in the areas emanating triolic waves. The cerebellum, the cerebral cortex,
        the brain stem, the entire nervous system has been depleted of electrochemical energy. Any device like that
        would produce high levels of triolic waves.
      </Typography>
    </TabPanel>
    <TabPanel index={2}>
      <Typography variant="h3">This panel holds information for item 3</Typography>
      <Typography variant="body1">
        Detecting some unusual fluctuations in subspace frequencies. Resistance is futile.
      </Typography>
    </TabPanel>
  </BasicTabs>
);

export const Tabs = Template.bind({});
