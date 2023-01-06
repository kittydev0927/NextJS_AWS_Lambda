import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AccountSettings as AccountSettingsComponent } from '#components/forms/organisms/AccountSettings/AccountSettings';

const StoryMeta: ComponentMeta<typeof AccountSettingsComponent> = {
  title: 'Components/Layouts/Organisms/Account Settings',
  component: AccountSettingsComponent,
  parameters: {
    docs: {
      description: {
        component: 'Account Settings page allows you to see all your profile data',
      },
    },
  },
};

export default StoryMeta;

const Template: ComponentStory<typeof AccountSettingsComponent> = () => <AccountSettingsComponent />;

export const AccountSettings = Template.bind({});
