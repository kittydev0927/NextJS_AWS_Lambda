import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { ApplicationFailurePage as ApplicationFailurePageComponent } from '#components/pages/Application/ApplicationFailurePage/ApplicationFailurePage';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

export default {
  title: 'Pages/Application/Application Failure Page',
  component: ApplicationFailurePageComponent,
} as Meta;

const Template: Story = () => (
  <ApplicationFailurePageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
);

export const ApplicationFailurePage = Template.bind({});
