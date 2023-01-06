import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button as ButtonComponent } from '#components/forms/atoms/Button/Button';
import README from '#components/forms/atoms/Button/README_Button.mdx';

export default {
  title: 'Components/Forms/Atoms/Button',
  component: ButtonComponent,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    variant: {
      options: ['text', 'outlined', 'primary', 'secondary', 'inactive'],
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
    buttonText: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story = args => (
  <ButtonComponent {...args}>{args.buttonText ? args.buttonText : 'Button'}</ButtonComponent>
);

export const Button = Template.bind({});

Button.args = {
  disabled: false,
};
