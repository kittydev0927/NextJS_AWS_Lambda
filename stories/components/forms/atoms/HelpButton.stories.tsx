import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { HelpButton as HelpButtonComponent } from '#components/forms/atoms/HelpButton/HelpButton';

export default {
  title: 'Components/Forms/Atoms/Help Button',
  component: HelpButtonComponent,
  parameters: {
    docs: {
      description: {
        component: 'Help button to be used across the Customer Portal and the self-tour.',
      },
    },
  },
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story = args => <HelpButtonComponent {...args} />;

export const HelpButton = Template.bind({});
