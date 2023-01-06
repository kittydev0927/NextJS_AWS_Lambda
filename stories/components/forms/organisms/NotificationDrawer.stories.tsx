import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NotificationDrawer as NotificationDrawerComponent } from '#components/forms/organisms/NotificationDrawer/NotificationDrawer';
import { sampleNotifications } from '#utils/sampleFormData';

const StoryMeta: ComponentMeta<typeof NotificationDrawerComponent> = {
  title: 'Components/Forms/Organisms/Notification Drawer',
  component: NotificationDrawerComponent,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    newNotificationCount: {
      control: { type: 'number' },
    },
    notifications: {
      control: { type: 'array' },
    },
    onCloseClick: {
      control: { type: 'object' },
    },
  },
};

export default StoryMeta;

const Template: ComponentStory<typeof NotificationDrawerComponent> = args => <NotificationDrawerComponent {...args} />;

export const NotificationDrawer = Template.bind({});

sampleNotifications
  .sort(a => {
    return a.actionable ? -1 : 1;
  })
  .sort(a => {
    return a.actionType === 'upload' ? -1 : 1;
  });

NotificationDrawer.args = {
  newNotificationCount: 5,
  notifications: sampleNotifications,
  onCloseClick: () => alert('Notification drawer close clicked'),
};
