import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Applicants as ApplicantsComponent } from '#components/pages/Application/Applicants/Applicants';
import { COMPLETE_APPLICANTS } from '#components/pages/Application/Income/constants';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';

const StoryMeta: ComponentMeta<typeof ApplicantsComponent> = {
  title: 'Pages/Application/Applicants',
  component: ApplicantsComponent,
};

export default StoryMeta;

const Template: ComponentStory<typeof ApplicantsComponent> = args => <ApplicantsComponent {...args} />;

export const NoApplicants = Template.bind({});
NoApplicants.args = {
  applicants: [],
  pageData: sampleApplicationPageData as unknown as ISampleData,
};

export const Applicants = Template.bind({});
Applicants.args = {
  applicants: COMPLETE_APPLICANTS,
  pageData: sampleApplicationPageData as unknown as ISampleData,
};
