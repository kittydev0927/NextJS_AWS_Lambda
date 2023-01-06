import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { CurrentAddress as CurrentAddressComponent } from '#components/forms/organisms/ApplicationForms/CurrentAddress/CurrentAddress';

export default {
  title: 'Components/Forms/Organisms/Current Address',
  component: CurrentAddressComponent,
} as Meta;

const Template: Story = () => (
  <CurrentAddressComponent
    isFormValid={() => {
      return false;
    }}
  />
);

export const CurrentAddress = Template.bind({});
