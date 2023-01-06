// /stories/pages/SSOLandingPage.stories.tsx
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

import SSOLandingPageComponent from '../../pages/index';

const StoryMeta: ComponentMeta<typeof SSOLandingPageComponent> = {
  title: 'Pages/SSO Landing Page',
  component: SSOLandingPageComponent,
};

export default StoryMeta;

const Template: ComponentStory<typeof SSOLandingPageComponent> = () => (
  <SSOLandingPageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
);

export const SSOLandingPage = Template.bind({});
