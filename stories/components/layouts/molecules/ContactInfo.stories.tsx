import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ContactInfo as ContactInfoComponent } from '#components/layouts/molecules/ContactInfo/ContactInfo';

export default {
  title: 'Components/Layouts/Molecules/Contact Info',
  component: ContactInfoComponent,
  parameters: {
    docs: {
      description: {
        component: 'The `ContactInfoComponent` includes links contact links for the Footer.',
      },
    },
  },
  argTypes: {
    linkColor: {
      control: 'color',
    },
    textStyles: {
      description: 'Uses the MUI `sx` prop. See MUI docs for more details.',
      control: 'object',
    },
    textVariant: {
      options: ['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit'],
      control: { type: 'select' },
    },
    textAlign: {
      options: ['center', 'inherit', 'justify', 'left', 'right'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story = args => <ContactInfoComponent {...args} />;

export const ContactInfo = Template.bind({});
ContactInfo.args = {
  linkColor: '#000000',
  textVariant: 'h6',
};
