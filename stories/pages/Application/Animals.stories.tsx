import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Animals as AnimalsComponent } from '#components/pages/Application/Animals/Animals';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';

const StoryMeta: ComponentMeta<typeof AnimalsComponent> = {
  title: 'Pages/Application/Animals',
  component: AnimalsComponent,
};

export default StoryMeta;

const Template: ComponentStory<typeof AnimalsComponent> = args => <AnimalsComponent {...args} />;

export const Animals = Template.bind({});

Animals.args = {
  pageData: sampleApplicationPageData as unknown as ISampleData,
};
