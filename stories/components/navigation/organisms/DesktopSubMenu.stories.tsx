import type { Meta, Story } from '@storybook/react';
import React from 'react';

import DesktopSubMenuComponent from '#components/navigation/organisms/DesktopSubMenu/DesktopSubMenu';

const nav = {
  id: 1,
  text: 'Find Your Home',
  options: [
    {
      text: 'Search Locations',
      url: 'https://www.rentprogress.com',
    },
    {
      text: 'Qualifications Requirements',
      url: 'https://www.rentprogress.com',
    },
    {
      text: 'Before you Apply',
      url: 'https://www.rentprogress.com',
    },
    {
      text: 'Application Process',
      url: 'https://www.rentprogress.com',
    },
  ],
};

export default {
  title: 'Components/Navigation/Organisms/Desktop Sub Menu',
  component: DesktopSubMenuComponent,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    open: {
      default: true,
      options: [true, false],
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story = args => <DesktopSubMenuComponent {...args} selectedNav={nav} />;

export const DesktopSubMenu = Template.bind({});
