import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import README from '#components/forms/atoms/TextField/README_TextField.mdx';
import { TextField as TextFieldComponent } from '#components/forms/atoms/TextField/TextField';

export default {
  title: 'Components/Forms/Atoms/Text Field',
  component: TextFieldComponent,
  parameters: {
    docs: {
      page: README,
      source: {
        type: 'code',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    type: {
      options: ['text', 'password'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['standard', 'outlined', 'filled'],
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
      options: [true, false],
    },
    multiline: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    rows: {
      control: { type: 'number' },
    },
    value: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof TextFieldComponent> = args => (
  <TextFieldComponent {...args} value={args.value ? args.value : 'This is a text field'} variant="outlined" />
);

export const TextField = Template.bind({});

TextField.args = {
  label: 'label',
  disabled: false,
  variant: 'outlined',
};
