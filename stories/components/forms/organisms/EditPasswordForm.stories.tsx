import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { EditPasswordForm as EditPasswordPageComponent } from '#components/forms/organisms/AccountSettingsForms/EditPasswordForm/EditPasswordForm';

export default {
  title: 'Components/Forms/Organisms/Edit Password Form',

  component: EditPasswordPageComponent,

  parameters: {
    docs: {
      description: {
        component: 'Password form of Account Settings component',
      },
    },
  },

  argTypes: {
    currentPassword: {
      control: { type: 'password' },
    },
  },
} as Meta;

const Template: Story = args => <EditPasswordPageComponent {...args} />;

export const EditPasswordForm = Template.bind({});

EditPasswordForm.args = {
  currentPassword: 'currentpassword',
};
