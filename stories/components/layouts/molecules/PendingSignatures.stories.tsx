import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProfileInfoCard as ProfileInfoCardComponent } from '#components/layouts/organisms/ProfileCard/ProfileInfoCard';
import { PendingSignatures as PendingSignaturesComponent } from '#components/pages/Dashboard/PendingSignatures/PendingSignatures';

export default {
  title: 'Components/Layouts/Molecules/Pending Signatures',
  component: PendingSignaturesComponent,
  parameters: {
    docs: {
      description: {
        component: 'Pending Signatures',
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <ProfileInfoCardComponent {...args}>
    <PendingSignaturesComponent maxRent={3400} />
  </ProfileInfoCardComponent>
);

export const PendingSignatures = Template.bind({});
