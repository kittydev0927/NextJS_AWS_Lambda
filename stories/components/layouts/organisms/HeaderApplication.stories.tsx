import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { HeaderApplication as HeaderApplicationComponent } from '#components/layouts/organisms/HeaderApplication/HeaderApplication';

const sampleUser = {
  firstName: 'Test',
  lastName: 'User',
};

export default {
  title: 'Components/Layouts/Organisms/Header/Header Application',
  component: HeaderApplicationComponent,
  parameters: {
    docs: {
      description: {
        component: 'Header to be displayed while user is filling out an Application',
      },
    },
  },
  argTypes: {
    newNotification: {
      control: { type: 'boolean' },
      options: [true, false],
    },
  },
} as Meta;

const Template: Story = args => <HeaderApplicationComponent user={sampleUser} {...args} />;

export const HeaderApplication = Template.bind({});
