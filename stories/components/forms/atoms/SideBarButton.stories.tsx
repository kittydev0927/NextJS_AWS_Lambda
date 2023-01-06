import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { SideBarButton as SideBarButtonComponent } from '#components/forms/atoms/SideBarButton/SideBarButton';

export default {
  title: 'Components/Forms/Atoms/Side Bar Button',
  component: SideBarButtonComponent,
  parameters: {
    docs: {
      description: {
        component: 'Tips button to be used across the Customer Portal',
      },
    },
  },
  argTypes: {
    buttonState: {
      options: ['closed', 'open', 'mobile'],
      defaultValue: 'closed',
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story = args => {
  return <SideBarButtonComponent {...args} />;
};

export const SideBarButton = Template.bind({});
