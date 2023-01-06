import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ApplicantInfo as ApplicantInfoPage } from '#components/pages/Application/ApplicantInfo/ApplicantInfo';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';

const StoryMeta: ComponentMeta<typeof ApplicantInfoPage> = {
  title: 'Pages/Application/Applicant Info',
  component: ApplicantInfoPage,
};

export default StoryMeta;

const Template: ComponentStory<typeof ApplicantInfoPage> = args => <ApplicantInfoPage {...args} />;

export const ApplicantInfo = Template.bind({});

ApplicantInfo.args = {
  pageData: sampleApplicationPageData as unknown as ISampleData,
};
