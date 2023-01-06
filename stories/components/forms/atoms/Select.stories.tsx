import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { Select as SelectComponent } from '#components/forms/atoms/Select/Select';
import type { SelectProps } from '#components/forms/atoms/Select/Select.types';

const selectPropsSample: Pick<SelectProps, 'options'> = {
  options: [
    { label: 'one', value: 'one' },
    { label: 'two', value: 'two' },
    { label: 'five', value: 'five' },
  ],
};

export default {
  title: 'Components/Forms/Atoms/Select',
  component: SelectComponent,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    options: {
      control: 'object',
      defaultValue: selectPropsSample.options,
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: 'Select length',
    },
  },
} as Meta;

const Template: Story = args => <SelectComponent {...args} />;
export const Select = Template.bind({});
