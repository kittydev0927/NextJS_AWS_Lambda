import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Notification as NotificationComponent } from '#components/forms/molecules/Notification/Notification';

const StoryMeta: ComponentMeta<typeof NotificationComponent> = {
  title: 'Components/Forms/Molecules/Notification',
  component: NotificationComponent,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    unread: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    details: {
      control: 'text',
    },
    actionButtonText: {
      control: 'text',
    },
    actionType: {
      control: 'select',
      options: ['redirect', 'upload'],
    },
  },
};

export default StoryMeta;

const Template: ComponentStory<typeof NotificationComponent> = args => <NotificationComponent {...args} />;

export const ActionableUploadNotification = Template.bind({});
ActionableUploadNotification.args = {
  unread: true,
  actionable: true,
  title: 'Documents Needed',
  details: 'Hi Samantha! Please upload a copy of your emotional support animal certification to complete your profile.',
  actionButtonText: 'Upload Documents',
  deadline: 'Sep 22',
  onClick: () => alert('upload documents clicked'),
  actionType: 'upload',
};

export const ActionableRedirectNotification = Template.bind({});
ActionableRedirectNotification.args = {
  unread: true,
  actionable: true,
  title: 'Complete Your Profile',
  details: 'Complete your profile to view a curated list of recommended homes.',
  actionButtonText: 'Complete Profile',
  deadline: 'Sep 22',
  onClick: () => alert('complete profile clicked'),
  actionType: 'redirect',
};

export const NonactionableNotification = Template.bind({});
NonactionableNotification.args = {
  unread: false,
  actionable: false,
  title: 'Saved Homes Update',
  details: 'You’re saved home is no longer availible: 1243 Gresham Park Ln, Lithonia GA 30283',
};
