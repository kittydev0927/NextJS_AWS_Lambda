import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { IncompleteProfile as IncompleteProfileComponent } from '#components/layouts/molecules/IncompleteProfile/IncompleteProfile';
import { ProfileInfoCard as ProfileInfoCardComponent } from '#components/layouts/organisms/ProfileCard/ProfileInfoCard';
import { extendedSteps } from '#utils/sampleFormData';

const defaultUser = {
  userName: {
    firstName: 'Jon',
    lastName: 'Jon',
  },
};

export default {
  title: 'Components/Layouts/Molecules/Incomplete Profile',
  component: IncompleteProfileComponent,
  parameters: {
    docs: {
      description: {
        component: 'Incomplete Profile Card',
      },
    },
  },
  argTypes: {
    user: {
      control: 'object',
      defaultValue: defaultUser,
    },
    steps: {
      control: 'object',
      defaultValue: extendedSteps,
    },
    currentStep: {
      control: 'number',
      defaultValue: 1,
    },
  },
} as Meta;

const Template: Story = args => (
  <ProfileInfoCardComponent {...args}>
    <IncompleteProfileComponent {...args} />
  </ProfileInfoCardComponent>
);

export const IncompleteProfile = Template.bind({});
