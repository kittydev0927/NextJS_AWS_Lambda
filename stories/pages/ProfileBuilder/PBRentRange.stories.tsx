import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { PBRentRange as PBRentRangeComponent } from '#components/pages/ProfileBuilder/PBRentRange/PBRentRange';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

export default {
  title: 'Pages/Profile Builder/Rent Range',
  component: PBRentRangeComponent,
  parameters: {
    docs: { inlineStories: false, iframeHeight: 1800 },
  },
  argTypes: {
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number', defaultValue: 4000 },
    },
  },
} as Meta;

const Template: Story = () => (
  <PBRentRangeComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
);

export const RentRange = Template.bind({});
