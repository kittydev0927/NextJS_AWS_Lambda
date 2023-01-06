import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { LeaseDetails as LeaseDetailsComponent } from '#components/pages/Application/LeaseDetails/LeaseDetails';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';

const StoryMeta: ComponentMeta<typeof LeaseDetailsComponent> = {
  title: 'Pages/Application/Lease Details',
  component: LeaseDetailsComponent,
};

export default StoryMeta;

const Template: ComponentStory<typeof LeaseDetailsComponent> = args => <LeaseDetailsComponent {...args} />;

export const LeaseDetails = Template.bind({});

LeaseDetails.args = {
  pageData: sampleApplicationPageData as unknown as ISampleData,
};
