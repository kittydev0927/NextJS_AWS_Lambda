import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { TypographyComponent } from '#components/styleGuide/Typography/Typography';

export default {
  title: 'Style Guide/Typography',
  component: TypographyComponent,
} as Meta;

const Template: Story = () => {
  return <TypographyComponent></TypographyComponent>;
};

export const Typography = Template.bind({});
