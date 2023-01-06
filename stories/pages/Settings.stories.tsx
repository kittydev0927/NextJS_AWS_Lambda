import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

import SettingsPageComponent from '../../pages/settings';

const StoryMeta: ComponentMeta<typeof SettingsPageComponent> = {
  title: 'Pages/Settings Page',
  component: SettingsPageComponent,
};

export default StoryMeta;

const Template: ComponentStory<typeof SettingsPageComponent> = () => (
  <SettingsPageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
);

export const SettingsPage = Template.bind({});
