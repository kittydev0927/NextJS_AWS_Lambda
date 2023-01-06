import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

import SavedHomesPageComponent from '../../../pages/saved';

export default {
  title: 'Pages/Saved Homes/Saved Homes Page',
  component: SavedHomesPageComponent,
} as Meta;

const Template: Story = () => (
  <SavedHomesPageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
);

export const SavedHomesPage = Template.bind({});
