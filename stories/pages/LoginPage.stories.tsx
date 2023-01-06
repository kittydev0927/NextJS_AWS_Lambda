// /stories/pages/LoginPage.stories.tsx
import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

import LoginPageComponent from '../../pages/login';

export default {
  title: 'Pages/Login Page',
  component: LoginPageComponent,
} as Meta;

const Template: Story = () => (
  <LoginPageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
);

export const LoginPage = Template.bind({});
