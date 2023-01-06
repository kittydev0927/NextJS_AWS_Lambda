import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { StripePayment as StripePaymentComponent } from '#components/forms/molecules/StripePayment/StripePayment';
import { theme as defaultTheme } from '#styles/styles';

export default {
  title: 'Components/Forms/Molecules/Stripe Payment',
  component: StripePaymentComponent,
  parameters: {
    docs: {
      description: {
        component: 'Stripe payment component used to collect payments during the application process',
      },
    },
  },
  argTypes: {
    amount: {
      control: 'number',
      defaultValue: 4200,
    },
    theme: {
      control: { type: 'radio' },
      options: ['flat', 'night', 'stripe', 'none'],
      defaultValue: 'flat',
    },
    variables: {
      control: 'object',
      defaultValue: {
        colorPrimary: defaultTheme.colors.jade,
        fontFamily: defaultTheme.fonts.Roboto,
      },
    },
    rules: {
      control: 'object',
      defaultValue: {},
    },
    returnUrl: {
      control: 'string',
      defaultValue: '',
    },
  },
} as Meta;

const Template: Story = args => <StripePaymentComponent amount={4200} returnUrl="" {...args}></StripePaymentComponent>;

export const StripePayment = Template.bind({});
