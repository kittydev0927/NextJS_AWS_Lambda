import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { PBCriteriaPageComponent } from '#components/pages/ProfileBuilder/PBCriteriaPage/PBCriteriaPage';
import { sampleSteps } from '#utils/sampleFormData';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

export default {
  title: 'Pages/Profile Builder/Criteria Page',
  component: PBCriteriaPageComponent,
  argTypes: {
    step: {
      defaultValue: 6,
      control: 'number',
    },
  },
} as Meta;

const Template: Story = args => (
  <PBCriteriaPageComponent
    steps={sampleSteps}
    step={6}
    {...args}
    userAuthContent={sampleUserAuthContent as unknown as IUserAuthData}
  />
);

export const CriteriaPage = Template.bind({});
