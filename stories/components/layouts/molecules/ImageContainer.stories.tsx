import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ImageContainer as ImageContainerComponent } from '#components/layouts/molecules/ImageContainer/ImageContainer';

export default {
  title: 'Components/Layouts/Molecules/Image Container',
  component: ImageContainerComponent,
  parameters: {
    docs: {
      description: '`ImageContainerComponent` is an container to for images.',
    },
    argTypes: {},
  },
} as Meta;

const Template: Story = args => <ImageContainerComponent {...args} />;

export const ImageContainer = Template.bind({});
