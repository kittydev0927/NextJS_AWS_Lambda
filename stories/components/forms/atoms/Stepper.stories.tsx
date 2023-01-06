import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { Stepper as StepperComponent } from '#components/forms/atoms/Stepper/Stepper';

const sampleSteps = [
  {
    label: 'Location',
  },
  {
    label: 'Move In Date',
  },
  {
    label: 'Bedrooms',
  },
  {
    label: 'Monthly Price',
  },
];
export default {
  title: 'Components/Forms/Atoms/Stepper',
  component: StepperComponent,
  argTypes: {
    currentStep: {
      control: { type: 'range', min: 0, max: sampleSteps.length, step: 1 },
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story = args => <StepperComponent {...args} />;

export const Stepper = Template.bind({});

Stepper.args = {
  currentStep: 0,
  steps: sampleSteps,
};
