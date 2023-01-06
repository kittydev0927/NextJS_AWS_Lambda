import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PageLayoutApplication as PageLayoutApplicationComponent } from '#components/layouts/organisms/PageLayoutApplication/PageLayoutApplication';
import { theme } from '#styles/styles';

const StoryMeta: ComponentMeta<typeof PageLayoutApplicationComponent> = {
  title: 'Components/Layouts/Organisms/Page Layout/Page Layout Application',
  component: PageLayoutApplicationComponent,
  argTypes: {
    infoText: {
      control: { type: 'text' },
      defaultValue: '2022. All Rights Reserved Progress Residential ®',
    },
  },
};

export default StoryMeta;

const Template: ComponentStory<typeof PageLayoutApplicationComponent> = args => (
  <PageLayoutApplicationComponent theme={theme} {...args}>
    {'Inner Content'}
  </PageLayoutApplicationComponent>
);

export const PageLayoutApplication = Template.bind({});
