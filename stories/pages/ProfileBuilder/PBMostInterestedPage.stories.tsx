import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { PBMostInterested as PBMostInterestedComponent } from '#components/pages/ProfileBuilder/PBMostInterestedPage/PBMostInterested';
import { extendedSteps } from '#utils/sampleFormData';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

export default {
  title: 'Pages/Profile Builder/Most Interested',
  component: PBMostInterestedComponent,
  parameters: {
    docs: {
      description: {
        component: 'Profile Builder - Step 1: Most Interested Selection (Iteration 2)',
      },
    },
  },
  argTypes: {
    steps: {
      control: 'object',
      defaultValue: extendedSteps,
    },
    currentStep: {
      control: 'number',
      defaultValue: 1,
    },
  },
} as Meta;

const Template: Story = args => (
  <PBMostInterestedComponent {...args} userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
);

export const MostInterested = Template.bind({});
