import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { Colors } from '#components/styleGuide/Colors/Colors';
export default {
  title: 'Style Guide/Color Palette',
  component: Colors,
} as Meta;

const Template: Story = () => {
  return <Colors></Colors>;
};

export const ColorPalette = Template.bind({});
