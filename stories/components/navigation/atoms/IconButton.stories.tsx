import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { IconButton as IconButtonComponent } from '#components/navigation/atoms/IconButton/IconButton';

export default {
  title: 'Components/Navigation/Atoms/Icon Button',
  component: IconButtonComponent,
  argTypes: {
    userName: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof IconButtonComponent> = args => <IconButtonComponent {...args} />;

export const IconButton = Template.bind({});
