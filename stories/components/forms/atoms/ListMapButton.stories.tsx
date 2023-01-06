import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ListMapButton as ListMapButtonComponent } from '#components/forms/atoms/ListMapButton/ListMapButton';

export default {
  title: 'Components/Forms/Atoms/List Map Button',
  component: ListMapButtonComponent,
  parameters: {
    docs: {
      description: {
        component:
          'This component is list or map display view of saved homes. This components uses toggle buttons with exclusive selection.',
      },
    },
  },
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    value: {
      options: ['list', 'map'],
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story = args => <ListMapButtonComponent {...args} />;

export const ListMapButton = Template.bind({});
