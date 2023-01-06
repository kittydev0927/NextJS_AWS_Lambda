import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { PortalSubMenu as PortalSubMenuComponent } from '#components/layouts/organisms/PortalSubMenu/PortalSubMenu';
import { RESIDENT_MENU_ITEMS, SUB_MENU_ITEMS } from '#utils/__mocks__/menuItems';

export default {
  title: 'Components/Layouts/Organisms/Portal Sub Menu',
  component: PortalSubMenuComponent,
  parameters: {
    docs: {
      description: {
        component:
          'A sub-navigation component to be rendered as part of the Header when the user is successfully authenticated',
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      defaultValue: SUB_MENU_ITEMS,
    },
    resident: {
      control: 'boolean',
      defaultValue: false,
    },
    residentItems: {
      control: 'object',
      defaultValue: RESIDENT_MENU_ITEMS,
    },
  },
} as Meta;

const Template: Story = args => <PortalSubMenuComponent items={SUB_MENU_ITEMS} {...args} />;

export const PortalSubMenu = Template.bind({});
