import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { RadioCheckBoxes as RadioCheckBoxesComponent } from '#components/forms/atoms/RadioCheckBoxes/RadioCheckBoxes';

export default {
  title: 'Components/Forms/Atoms/Radio Check Boxes',
  component: RadioCheckBoxesComponent,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    options: {
      defaultValue: ['Yes', 'No'],
      control: { type: 'array' },
    },
    row: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof RadioCheckBoxesComponent> = args => <RadioCheckBoxesComponent {...args} />;

export const RadioCheckBoxes = Template.bind({});
