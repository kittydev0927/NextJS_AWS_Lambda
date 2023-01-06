import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { SocialLinks as SocialLinksComponent } from '#components/layouts/molecules/SocialLinks/SocialLinks';

export default {
  title: 'Components/Layouts/Molecules/Social Links',
  component: SocialLinksComponent,
  parameters: {
    docs: {
      description: {
        component: 'The `SocialLinksComponent` component includes the social media links to be included in the Footer.',
      },
    },
  },
  argTypes: {
    color: {
      control: { type: 'color' },
      description:
        'The `color` prop specifies the theme (`primary`, `secondary`, etc) to be applied to the `LinkComponent`. Hex and RGB values can also be specified if the theme colors need to be overriden.',
    },
  },
} as Meta;

const Template: Story = args => <SocialLinksComponent {...args} />;

export const SocialLinks = Template.bind({});
SocialLinks.args = {
  color: '#000000',
};
