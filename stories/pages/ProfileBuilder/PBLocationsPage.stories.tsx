import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { PBLocationsPageComponent } from '#components/pages/ProfileBuilder/PBLocationsPage/PBLocationsPage';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

export default {
  title: 'Pages/Profile Builder/Locations Page',
  component: PBLocationsPageComponent,
  parameters: {
    docs: { inlineStories: false, iframeHeight: 1600 },
  },
  argTypes: {
    step: {
      defaultValue: 1,
      control: 'number',
    },
  },
} as Meta;

const Template: Story = () => (
  <PBLocationsPageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
);

export const LocationsPage = Template.bind({});
