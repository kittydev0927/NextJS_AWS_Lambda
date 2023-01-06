import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { RegistrationForm as RegistrationFormComponent } from '#components/forms/organisms/RegistrationForm/RegistrationForm';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

export default {
  title: 'Components/Forms/Organisms/Registration Form',
  component: RegistrationFormComponent,
  parameters: {
    docs: {
      description: {
        component: 'Registration form to be used in the registration tab of the SSO page',
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <RegistrationFormComponent
    userAuthContent={sampleUserAuthContent as unknown as IUserAuthData}
    {...args}
  ></RegistrationFormComponent>
);

export const RegistrationForm = Template.bind({});
