import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { CompanyInfo as CompanyInfoComponent } from '#components/layouts/molecules/CompanyInfo/CompanyInfo';

export default {
  title: 'Components/Layouts/Molecules/Company Info',
  component: CompanyInfoComponent,
  parameters: {
    docs: {
      description: {
        component: 'The `CompanyInfoComponent` includes company and resource related links for the Footer.',
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

const Template: Story = args => <CompanyInfoComponent {...args} />;

export const CompanyInfo = Template.bind({});
CompanyInfo.args = {
  linkColor: '#000000',
  textVariant: 'h6',
};
