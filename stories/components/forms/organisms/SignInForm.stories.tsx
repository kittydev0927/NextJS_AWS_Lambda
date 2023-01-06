import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { SignInForm as SignInFormComponent } from '#components/forms/organisms/SignInForm/SignInForm';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

export default {
  title: 'Components/Forms/Organisms/Sign In Form',
  component: SignInFormComponent,
  parameters: {
    docs: {
      description: {
        component: 'Sign-in form to be used in the sign-in tab of the SSO page',
      },
    },
  },
  argTypes: {
    onSuccess: { action: 'success!' },
    onError: { action: 'error!' },
  },
} as Meta;

const Template: Story = args => (
  <SignInFormComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} {...args} />
);

export const SignInForm = Template.bind({});
