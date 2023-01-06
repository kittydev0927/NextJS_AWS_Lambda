import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { FormProgress as FormProgressComponent } from '#components/forms/molecules/FormProgress/FormProgress';
import { sampleSteps } from '#utils/sampleFormData';

export default {
  title: 'Components/Forms/Molecules/Form Progress',
  component: FormProgressComponent,
  argTypes: {
    currentStep: {
      control: 'number',
      defaultValue: 1,
    },
    steps: {
      defaultValue: sampleSteps,
      control: 'object',
    },
  },
} as Meta;

const Template: ComponentStory<typeof FormProgressComponent> = args => (
  <FormProgressComponent {...args} steps={args.steps ?? sampleSteps} />
);

export const FormProgress = Template.bind({});
