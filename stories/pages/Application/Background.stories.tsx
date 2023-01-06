import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Background as BackgroundComponent } from '#components/pages/Application/Background/Background';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';

const StoryMeta: ComponentMeta<typeof BackgroundComponent> = {
  title: 'Pages/Application/Background',
  component: BackgroundComponent,
};

export default StoryMeta;

const Template: ComponentStory<typeof BackgroundComponent> = args => <BackgroundComponent {...args} />;

export const Background = Template.bind({});

Background.args = {
  pageData: sampleApplicationPageData as unknown as ISampleData,
};
