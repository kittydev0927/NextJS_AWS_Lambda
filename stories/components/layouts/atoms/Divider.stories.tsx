import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { Divider as DividerComponent } from '#components/layouts/atoms/Divider/Divider';
import type { DividerProps } from '#components/layouts/atoms/Divider/Divider.types';

export default {
  title: 'Components/Layouts/Atoms/Divider',
  component: DividerComponent,
  argTypes: {
    variant: {
      options: ['fullWidth', 'inset', 'middle'],
      control: { type: 'select' },
    },
    dividerStyles: {
      description:
        '`dividerStyles` is passed on as a `sx` MUI optional prop that can be used to specify any custom, one-off styles. Refer to MUI docs for more details.',
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: 'radio',
    },
    textAlign: {
      options: ['center', 'left', 'right'],
      control: 'select',
    },
    customText: {
      control: { type: 'text' },
      description: '`customText` prop use to show custom text on divider.',
    },
  },
} as Meta;

const Template: Story<DividerProps> = args => <DividerComponent {...args} />;

export const Divider = Template.bind({});
Divider.args = {
  variant: 'fullWidth',
  orientation: 'horizontal',
  textAlign: 'center',
};
