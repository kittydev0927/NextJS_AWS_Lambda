import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { PBCompletePageComponent } from '#components/pages/ProfileBuilder/PBCompletePage/PBCompletePage';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

export default {
  title: 'Pages/Profile Builder/Complete Page',
  component: PBCompletePageComponent,
  argTypes: {
    step: {
      defaultValue: 5,
      control: 'number',
    },
  },
} as Meta;

const Template: Story = () => (
  <PBCompletePageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
);

export const CompletePage = Template.bind({});
