import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { PortalSubMenu } from '#components/layouts/organisms/PortalSubMenu/PortalSubMenu';
import { PBMoveInDate as PBMoveInDateComponent } from '#components/pages/ProfileBuilder/PBMoveInDate/PBMoveInDate';
import { RESIDENT_MENU_ITEMS, SUB_MENU_ITEMS_PROFILE_ACTIVE } from '#utils/__mocks__/menuItems';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

const sampleSteps = [
  {
    label: 'Location',
  },
  {
    label: 'Move In Date',
  },
  {
    label: 'Bedrooms',
  },
  {
    label: 'Monthly Price',
  },
];
export default {
  title: 'Pages/Profile Builder/Move In Date',
  component: PBMoveInDateComponent,
  subcomponents: { PortalSubMenu },
  parameters: {
    docs: {
      description: {
        component: 'Profile Builder - Step 2: Move In Date Selection (Iteration 1)',
      },
      inlineStories: false,
      iframeHeight: 1600,
    },
  },
  argTypes: {
    items: {
      control: 'object',
      defaultValue: SUB_MENU_ITEMS_PROFILE_ACTIVE,
    },
    resident: {
      control: 'boolean',
      defaultValue: false,
    },
    residentItems: {
      control: 'object',
      defaultValue: RESIDENT_MENU_ITEMS,
    },
    steps: {
      control: 'object',
      defaultValue: sampleSteps,
    },
    currentStep: {
      control: 'number',
      defaultValue: 1,
    },
  },
} as Meta;

const Template: Story = () => (
  <PBMoveInDateComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
);

export const MoveInDate = Template.bind({});
