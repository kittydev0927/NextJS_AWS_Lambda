import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { LinksList as LinksListComponent } from '#components/layouts/molecules/LinksList/LinksList';
import { footerLinks } from '#utils/placeholderLinks';

export default {
  title: 'Components/Layouts/Molecules/Links List',
  component: LinksListComponent,
  parameters: {
    docs: {
      description: {
        component:
          'Use the `LinksListComponent` for multi-column lists with a single text. This component has 4 columns for larger screens and shrinks down to 2 columns for smaller screens.',
      },
    },
  },
  argTypes: {
    textStyles: {
      control: 'object',
    },
    textVariant: {
      options: ['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit'],
      control: { type: 'select' },
    },
    underline: {
      options: ['always', 'hover', 'none'],
      control: 'select',
    },
    links: {
      control: 'object',
    },
  },
} as Meta;

const Template: Story = args => <LinksListComponent {...args} />;

export const LinksList = Template.bind({});
LinksList.args = {
  links: footerLinks,
  textVariant: 'h6',
};
