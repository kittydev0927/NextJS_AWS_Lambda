import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { LinksListSmall as LinksListSmallComponent } from '#components/layouts/molecules/LinksListSmall/LinksListSmall';

// sample data
const smallLinkList = {
  heading: 'Sample Heading',
  section: 'section1',
  links: [
    { text: 'Home', url: 'https://www.rentprogress.com' },
    { text: 'About', url: 'https://www.rentprogress.com' },
    { text: 'Contact Us', url: 'https://www.rentprogress.com' },
  ],
};

export default {
  title: 'Components/Layouts/Molecules/Links List Small',
  component: LinksListSmallComponent,
  parameters: {
    docs: {
      description: {
        component: 'Use the `LinksListSmallComponent` for single-column lists with a single heading. ',
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
    },
    links: {
      control: 'object',
    },
    linkColor: {
      control: 'color',
    },
    textStyles: {
      control: 'object',
    },
  },
} as Meta;

const Template: Story = args => <LinksListSmallComponent {...args} />;

export const LinksListSmall = Template.bind({});
LinksListSmall.args = {
  text: smallLinkList.heading,
  textVariant: 'h6',
  links: smallLinkList.links,
  linkColor: '#000000',
};
