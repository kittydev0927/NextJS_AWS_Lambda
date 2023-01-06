import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { HeaderLogo as HeaderLogoComponent } from '#components/layouts/atoms/HeaderLogo/HeaderLogo';

export default {
  title: 'Components/Layouts/Atoms/Header Logo',
  component: HeaderLogoComponent,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    align: {
      options: ['center', 'inherit', 'justify', 'left', 'right'],
      control: { type: 'radio' },
    },
    variant: {
      options: [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof HeaderLogoComponent> = args => (
  <HeaderLogoComponent {...args} variant={args.variant ? args.variant : 'h4'} />
);

export const HeaderLogo = Template.bind({});
