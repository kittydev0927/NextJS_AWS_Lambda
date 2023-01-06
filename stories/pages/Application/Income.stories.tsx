import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { COMPLETE_APPLICANTS } from '#components/pages/Application/Income/constants';
import { Income as IncomeComponent } from '#components/pages/Application/Income/Income';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';

const StoryMeta: ComponentMeta<typeof IncomeComponent> = {
  title: 'Pages/Application/Income',
  component: IncomeComponent,
  argTypes: {
    applicants: {
      control: 'object',
      defaultValue: COMPLETE_APPLICANTS,
    },
  },
};

export default StoryMeta;

const Template: ComponentStory<typeof IncomeComponent> = args => <IncomeComponent {...args} />;

export const Income = Template.bind({});
Income.args = {
  pageData: sampleApplicationPageData as unknown as ISampleData,
};
