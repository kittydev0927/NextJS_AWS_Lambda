import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { Footer as FooterComponent } from '#components/layouts/organisms/Footer/Footer';
import { largeViewport, smallViewport } from '#constants/responsiveSizes';
import { footerLinks } from '#utils/placeholderLinks';

export default {
  title: 'Components/Layouts/Organisms/Footer',
  component: FooterComponent,
  argTypes: {
    companyInfoLinkColor: {
      control: 'color',
    },
    textStylesTop: {
      control: 'object',
    },
    textVariantTop: {
      options: ['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit'],
      control: { type: 'select' },
    },
    textAlignTop: {
      options: ['center', 'inherit', 'justify', 'left', 'right'],
      control: { type: 'select' },
    },
    textStylesBottom: {
      control: 'object',
    },
    textVariantBottom: {
      options: ['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit'],
      control: { type: 'select' },
    },
    textAlignBottom: {
      options: ['center', 'inherit', 'justify', 'left', 'right'],
      control: { type: 'select' },
    },
    links: {
      control: 'object',
    },
  },
  parameters: {
    chromatic: { viewports: [smallViewport, largeViewport] },
  },
} as Meta;

const Template: Story = args => <FooterComponent {...args} />;

export const Footer = Template.bind({});
Footer.args = {
  companyInfoLinkColor: '#ffffff',
  links: footerLinks,
};
