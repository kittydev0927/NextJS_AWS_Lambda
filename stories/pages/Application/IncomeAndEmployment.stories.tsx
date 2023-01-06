import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { IncomeAndEmployment as IncomeAndEmploymentPage } from '#components/pages/Application/IncomeAndEmployment/IncomeAndEmployment';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';

export default {
  title: 'Pages/Application/Income And Employment',
  component: IncomeAndEmploymentPage,
  argTypes: {
    housingChoice: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof IncomeAndEmploymentPage> = args => <IncomeAndEmploymentPage {...args} />;

export const IncomeAndEmployment = Template.bind({});

IncomeAndEmployment.args = {
  pageData: sampleApplicationPageData as unknown as ISampleData,
};
