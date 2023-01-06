import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { Arrow as ArrowComponent } from '#components/layouts/atoms/Arrow/Arrow';
import type { ArrowProps } from '#components/layouts/atoms/Arrow/Arrow.types';

export default {
  title: 'Components/Layouts/Atoms/Arrow',
  component: ArrowComponent,
  argTypes: {
    color: {
      control: { type: 'color' },
    },
  },
} as Meta;

const Template: Story<ArrowProps> = args => <ArrowComponent {...args} />;

export const Arrow = Template.bind({});
