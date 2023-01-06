import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { DashboardButton as DashboardButtonComponent } from '#components/layouts/atoms/DashboardButton/DashboardButton';

export default {
  title: 'Components/Layouts/Atoms/Dashboard Button',
  component: DashboardButtonComponent,
  argTypes: {
    alt: {
      control: { type: 'text' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    width: {
      control: { type: 'text' },
      default: '275px',
    },
    iconUrl: {
      control: { type: 'text' },
    },
    url: {
      control: { type: 'text' },
    },
    isNewTabLink: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    buttonText: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story = args => (
  <DashboardButtonComponent {...args}>{args.buttonText ? args.buttonText : 'Text'}</DashboardButtonComponent>
);

export const DashboardButton = Template.bind({});

DashboardButton.args = {
  disabled: false,
};
