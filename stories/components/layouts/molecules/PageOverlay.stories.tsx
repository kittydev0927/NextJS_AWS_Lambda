import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { PageOverlay as PageOverlayComponent } from '#components/layouts/molecules/PageOverlay/PageOverlay';

export default {
  title: 'Components/Layouts/Molecules/Page Overlay',
  component: PageOverlayComponent,
  parameters: {
    docs: {
      description: {
        component: 'A page overlay component to add to pages in order to create a blurred image background effect',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story = args => <PageOverlayComponent {...args} />;

export const PageOverlay = Template.bind({});
