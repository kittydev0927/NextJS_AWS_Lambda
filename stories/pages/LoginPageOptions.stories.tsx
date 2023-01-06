import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

import LoginPageOptionComponent from '../../pages/login-option';

export default {
  title: 'Pages/Login Page Options',
  component: LoginPageOptionComponent,
} as Meta;

const Template: Story = () => (
  <LoginPageOptionComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
);

export const LoginPageOptions = Template.bind({});
