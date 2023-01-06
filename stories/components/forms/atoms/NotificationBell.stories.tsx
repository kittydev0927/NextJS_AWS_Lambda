import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { NotificationBell as NotificationBellComponent } from '#components/forms/atoms/NotificationBell/NotificationBell';

export default {
  title: 'Components/forms/atoms/Notification Bell',
  component: NotificationBellComponent,
  argTypes: {
    newNotification: {
      control: { type: 'boolean' },
      options: [true, false],
    },
  },
  parameters: {
    backgrounds: {
      default: 'green',
      values: [
        {
          name: 'green',
          value: '#168281',
        },
      ],
    },
  },
} as Meta;

const Template: Story = args => <NotificationBellComponent {...args} />;

export const NotificationBell = Template.bind({});

NotificationBell.args = {
  newNotification: false,
};
