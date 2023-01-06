import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CurrentResidence as CurrentResidenceComponent } from '#components/pages/Application/CurrentResidence/CurrentResidence';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';

const StoryMeta: ComponentMeta<typeof CurrentResidenceComponent> = {
  title: 'Pages/Application/Current Residence',
  component: CurrentResidenceComponent,
};

export default StoryMeta;

const Template: ComponentStory<typeof CurrentResidenceComponent> = args => <CurrentResidenceComponent {...args} />;

export const CurrentResidence = Template.bind({});

CurrentResidence.args = {
  pageData: sampleApplicationPageData as unknown as ISampleData,
};
