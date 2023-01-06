import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AdditionalInformation as AdditionalInformationComponent } from '#components/pages/Application/AdditionalInformation/AdditionalInformation';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';

const StoryMeta: ComponentMeta<typeof AdditionalInformationComponent> = {
  title: 'Pages/Application/Additional Information',
  component: AdditionalInformationComponent,
};
export default StoryMeta;

const Template: ComponentStory<typeof AdditionalInformationComponent> = args => (
  <AdditionalInformationComponent {...args} />
);

export const AdditionalInformation = Template.bind({});

AdditionalInformation.args = { pageData: sampleApplicationPageData as unknown as ISampleData };
