import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { CardButton as CardButtonComponent } from '#components/layouts/atoms/CardButton/CardButton';

export default {
  title: 'Components/Layouts/Atoms/Card Button',
  component: CardButtonComponent,
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
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    buttonText: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story = args => (
  <CardButtonComponent {...args}>{args.buttonText ? args.buttonText : 'Login'}</CardButtonComponent>
);

export const CardButton = Template.bind({});

CardButton.args = {
  disabled: false,
};
