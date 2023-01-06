import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProfileInfoCard as ProfileInfoCardComponent } from '#components/layouts/organisms/ProfileCard/ProfileInfoCard';
import { SecurityDeposit as SecurityDepositComponent } from '#components/pages/Dashboard/SecurityDeposit/SecurityDeposit';

export default {
  title: 'Components/Layouts/Molecules/Security Deposit',
  component: SecurityDepositComponent,
  parameters: {
    docs: {
      description: {
        component: 'Security Deposit Card',
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <ProfileInfoCardComponent {...args}>
    <SecurityDepositComponent maxRent={2500} />
  </ProfileInfoCardComponent>
);

export const SecurityDeposit = Template.bind({});
