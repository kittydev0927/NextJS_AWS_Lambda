import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { ApplicationStatusPage as ApplicationStatusPageComponent } from '#components/pages/Application/ApplicationStatusPage/ApplicationStatusPage';

export default {
  title: 'Pages/Application/Application Status Page',
  component: ApplicationStatusPageComponent,
  argTypes: {
    currentAppStatus: {
      options: ['processing', 'denied', 'approved', 'submitted'],
      control: { type: 'radio' },
      defaultValue: 'processing',
    },
  },
} as Meta;

const Template: ComponentStory<typeof ApplicationStatusPageComponent> = args => (
  <ApplicationStatusPageComponent {...args} />
);

export const ApplicationStatusPage = Template.bind({});
