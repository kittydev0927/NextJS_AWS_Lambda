import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

import EditPasswordPageComponent from '../../pages/edit-password';

export default {
  title: 'Pages/Edit Password Page',
  component: EditPasswordPageComponent,
} as Meta;

const Template: Story = () => (
  <EditPasswordPageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
);

export const EditPasswordPage = Template.bind({});
