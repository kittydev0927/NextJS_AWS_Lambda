import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

import SavedHomesMapPageComponent from '../../../pages/saved-map';

export default {
  title: 'Pages/Saved Homes/Saved Homes Map Page',
  component: SavedHomesMapPageComponent,
} as Meta;

const Template: Story = () => (
  <SavedHomesMapPageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
);

export const SavedHomesMapPage = Template.bind({});
