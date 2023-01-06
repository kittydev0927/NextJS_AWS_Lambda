import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { FooterBottom as FooterBottomComponent } from '#components/layouts/molecules/FooterBottom/FooterBottom';

export default {
  title: 'Components/Layouts/Molecules/Footer Bottom',
  component: FooterBottomComponent,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component:
          'The `FooterBottom` component currently uses a white placeholder image for the Equal Housing icon. Please use the Backgrounds tool in the toolbar above to change to a darker background to view the image.',
      },
    },
  },
  argTypes: {
    placeholderProp: {
      description: 'placeholder for types file until actual props, if any, are identfied and added.',
    },
  },
} as Meta;

const Template: Story = args => <FooterBottomComponent {...args} />;

export const FooterBottom = Template.bind({});
