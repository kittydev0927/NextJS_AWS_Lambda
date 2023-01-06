import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { BackToTop as BackToTopComponent } from '#components/layouts/molecules/BackToTop/BackToTop';

export default {
  title: 'Components/Layouts/Molecules/Back To Top',
  component: BackToTopComponent,
  parameters: {
    docs: {
      description:
        '`BackToTopComponent` is an interactive footer element to bring the user back to the top of the page. It is currently set to go to `#mainHeader` when clicked.',
    },
    argTypes: { onClick: { action: 'clicked' } },
  },
} as Meta;

const Template: Story = args => <BackToTopComponent {...args} />;

export const BackToTop = Template.bind({});
