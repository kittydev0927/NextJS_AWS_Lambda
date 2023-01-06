import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { OktaWidget as OktaWidgetComponent } from '#components/forms/molecules/OktaWidget/OktaWidget';

export default {
  title: 'Components/Forms/Molecules/Okta Widget',
  component: OktaWidgetComponent,
  parameters: {
    docs: {
      description: {
        component: 'Okta widget to be used in the sign-in form of the SSO page',
      },
    },
  },
  argTypes: {
    onSuccess: { action: 'success!' },
    onError: { action: 'error!' },
  },
} as Meta;

const Template: Story = args => <OktaWidgetComponent {...args}></OktaWidgetComponent>;

export const OktaWidget = Template.bind({});
