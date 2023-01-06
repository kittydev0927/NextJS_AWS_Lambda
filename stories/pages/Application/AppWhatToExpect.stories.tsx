import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AppWhatToExpect as AppWhatToExpectComponent } from '#components/pages/Application/AppWhatToExpect/AppWhatToExpect';
import { sampleProperty } from '#utils/samplePropertyData';

const StoryMeta: ComponentMeta<typeof AppWhatToExpectComponent> = {
  title: 'Pages/Application/What To Expect',
  component: AppWhatToExpectComponent,
};

export default StoryMeta;

const Template: ComponentStory<typeof AppWhatToExpectComponent> = args => <AppWhatToExpectComponent {...args} />;

export const WhatToExpect = Template.bind({});
WhatToExpect.args = {
  testProperty: sampleProperty,
};
