import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { DashboardPage as Component } from '#components/pages/Dashboard/Dashboard';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

export default {
  title: 'Pages/Dashboard Page',
  component: Component,
  argTypes: {
    isReserved: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story = args => (
  <Component userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} {...args} />
);

export const DashboardPage = Template.bind({});
export const DashboardReservedPage = Template.bind({});
DashboardReservedPage.args = {
  isReserved: true,
};
