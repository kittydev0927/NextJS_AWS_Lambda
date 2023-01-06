import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { IconographyComponent } from '#components/styleGuide/Iconography/Iconography';

export default {
  title: 'Style Guide/Iconography',
  component: IconographyComponent,
} as Meta;

const Template: Story = () => {
  return <IconographyComponent></IconographyComponent>;
};

export const Iconography = Template.bind({});
