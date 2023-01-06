import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { CircularProgress as CircularProgressComponent } from '#components/forms/atoms/CircularProgress/CircularProgress';

export default {
  title: 'Components/Forms/Atoms/Circular Progress',
  component: CircularProgressComponent,
  argTypes: {
    widthValue: {
      control: { type: 'number' },
    },
    thicknessValue: {
      control: { type: 'number' },
    },
    stepValue: {
      control: { type: 'number' },
    },
    totalSteps: {
      control: { type: 'number' },
    },
  },
} as Meta;

const Template: Story = args => <CircularProgressComponent {...args} />;

export const CircularProgress = Template.bind({});
