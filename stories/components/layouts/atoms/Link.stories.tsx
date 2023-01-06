import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { Link as LinkComponent } from '#components/layouts/atoms/Link/Link';
import type { LinkProps } from '#components/layouts/atoms/Link/Link.types';

export default {
  title: 'Components/Layouts/Atoms/Link',
  component: LinkComponent,
  argTypes: {
    underline: {
      options: ['always', 'hover', 'none'],
      control: { type: 'select' },
    },
    variant: {
      options: ['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit'],
      control: { type: 'select' },
    },
    linkText: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'color' },
      description:
        'The `color` prop specifies the theme (`primary`, `secondary`, etc) to be applied to the `LinkComponent`. Hex and RGB values can also be specified if the theme colors need to be overriden.',
    },
    showArrow: {
      options: [true, false],
      control: { type: 'boolean' },
      description:
        'The `showArrow` prop use to show/hide arrow icon after text. Set true to show arrow icon. Default is false.',
    },
    alignArrow: {
      options: ['start', 'end'],
      control: { type: 'radio' },
      description:
        'The `alignArrow` prop specifies whether to align arrow right next to text or for larger areas align arrow at the end away from the text. The `showArrow` prop must be true for its value to take effect.',
    },
  },
} as Meta;

const Template: Story<LinkProps> = args => (
  <LinkComponent {...args}>{args.linkText ? args.linkText : 'Link'}</LinkComponent>
);

export const Link = Template.bind({});
Link.args = {
  color: 'primary',
  underline: 'none',
  variant: 'body1',
};
