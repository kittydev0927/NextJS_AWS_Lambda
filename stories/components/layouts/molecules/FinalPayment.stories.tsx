import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProfileInfoCard as ProfileInfoCardComponent } from '#components/layouts/organisms/ProfileCard/ProfileInfoCard';
import { FinalPayment as FinalPaymentComponent } from '#components/pages/Dashboard/FinalPayment/FinalPayment';

export default {
  title: 'Components/Layouts/Molecules/Final Payment',
  component: FinalPaymentComponent,
  parameters: {
    docs: {
      description: {
        component: 'Final Payment',
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <ProfileInfoCardComponent {...args}>
    <FinalPaymentComponent maxRent={3400} />
  </ProfileInfoCardComponent>
);

export const FinalPayment = Template.bind({});
