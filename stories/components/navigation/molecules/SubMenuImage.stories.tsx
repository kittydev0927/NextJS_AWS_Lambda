import type { Meta, Story } from '@storybook/react';
import React from 'react';

import SubMenuImageComponent from '#components/navigation/molecules/SubMenuImage/SubMenuImage';

const nav = {
  id: 3,
  text: 'About',
  options: [
    {
      text: 'Why Progress',
      url: 'https://www.rentprogress.com',
    },
    {
      text: 'the Progress Residential Process',
      url: 'https://www.rentprogress.com',
    },
    {
      text: 'Progress In The News',
      url: 'https://www.rentprogress.com',
    },
    {
      text: 'Careers',
      url: 'https://www.rentprogress.com',
    },
    {
      text: 'Pets',
      url: 'https://www.rentprogress.com',
    },
    {
      text: 'Smart Homes',
      url: 'https://www.rentprogress.com',
    },
    {
      text: 'Property Management',
      url: 'https://www.rentprogress.com',
    },
  ],
};

export default {
  title: 'Components/Navigation/Molecules/Sub Menu Image',
  component: SubMenuImageComponent,
  argTypes: {
    selectedNav: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'text' },
    },
    readOnly: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story = args => <SubMenuImageComponent {...args} selectedNav={nav} />;

export const SubMenuImage = Template.bind({});
