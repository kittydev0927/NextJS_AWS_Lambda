import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { PBNumberOfBedrooms } from '#components/pages/ProfileBuilder/PBNumberOfBedrooms/PBNumberOfBedrooms';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

export default {
  title: 'Pages/Profile Builder/Number Of Bedrooms',
  component: PBNumberOfBedrooms,
} as Meta;

const Template: Story = () => (
  <PBNumberOfBedrooms userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
);

export const NumberOfBedrooms = Template.bind({});
