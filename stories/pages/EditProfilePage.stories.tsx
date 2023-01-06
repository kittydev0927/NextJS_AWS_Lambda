import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { EditPersonalInformation as EditProfilePageComponent } from '#components/pages/AccountSettings/EditPersonalInformation/EditPersonalInformation';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

export default {
  title: 'Pages/Edit Personal Information',
  component: EditProfilePageComponent,
} as Meta;

const Template: Story = args => (
  <EditProfilePageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} {...args} />
);

export const EditPersonalInformation = Template.bind({});
