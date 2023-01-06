import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import MobileSubMenuComponent from '#components/navigation/organisms/MobileSubMenu/MobileSubMenu';

export default {
  title: 'Components/Navigation/Organisms/Mobile Sub Menu',
  component: MobileSubMenuComponent,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof MobileSubMenuComponent> = args => (
  <MobileSubMenuComponent {...args} placeholder={args.placeholder ? args.placeholder : 'Search'} />
);

export const MobileSubMenu = Template.bind({});
