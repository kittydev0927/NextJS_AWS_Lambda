import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { CompleteProfile as CompleteProfileComponent } from '#components/layouts/molecules/CompleteProfile/CompleteProfile';
import { ProfileInfoCard as ProfileInfoCardComponent } from '#components/layouts/organisms/ProfileCard/ProfileInfoCard';

export default {
  title: 'Components/Layouts/Molecules/Complete Profile',
  component: CompleteProfileComponent,
  parameters: {
    docs: {
      description: {
        component: 'Complete Profile Card',
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <ProfileInfoCardComponent {...args}>
    <CompleteProfileComponent />
  </ProfileInfoCardComponent>
);

export const CompleteProfile = Template.bind({});
