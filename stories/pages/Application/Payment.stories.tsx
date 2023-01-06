import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Payment as PaymentComponent } from '#components/pages/Application/Payment/Payment';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';

const StoryMeta: ComponentMeta<typeof PaymentComponent> = {
  title: 'Pages/Application/Payment',
  component: PaymentComponent,
  argTypes: {
    applicants: {
      control: 'number',
      defaultValue: 4,
    },
    total: {
      control: 'number',
      defaultValue: 200,
    },
  },
};

export default StoryMeta;

const Template: ComponentStory<typeof PaymentComponent> = args => <PaymentComponent {...args} />;

export const Payment = Template.bind({});

Payment.args = {
  pageData: sampleApplicationPageData as unknown as ISampleData,
};
