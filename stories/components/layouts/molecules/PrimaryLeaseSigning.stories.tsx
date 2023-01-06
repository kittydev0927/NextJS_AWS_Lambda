import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProfileInfoCard as ProfileInfoCardComponent } from '#components/layouts/organisms/ProfileCard/ProfileInfoCard';
import { PrimaryLeaseSigning as PrimaryLeaseSigningComponent } from '#components/pages/Dashboard/PrimaryLeaseSigning/PrimaryLeaseSigning';

export default {
  title: 'Components/Layouts/Molecules/Primary Lease Signing',
  component: PrimaryLeaseSigningComponent,
  parameters: {
    docs: {
      description: {
        component: 'Primary Lease Signing Card',
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <ProfileInfoCardComponent {...args}>
    <PrimaryLeaseSigningComponent maxRent={3400} />
  </ProfileInfoCardComponent>
);

export const PrimaryLeaseSigning = Template.bind({});
