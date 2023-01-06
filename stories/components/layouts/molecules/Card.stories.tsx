import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { Card as CardComponent } from '#components/layouts/molecules/Card/Card';
import ResidentSVG from '#public/icon-current-residents.svg';

export default {
  title: 'Components/Layouts/Molecules/Card',
  component: CardComponent,
  parameters: {
    docs: {
      description: {
        component:
          'MUI-based Card component that features CardMedia, CardContent, and CardAction sections as well as horizontal vs vertical design configurations',
      },
    },
  },
  argTypes: {
    maxWidth: {
      defaultValue: 268,
      control: 'number',
    },
    mediaImgHeight: {
      defaultValue: 156,
      control: 'number',
    },
    mediaElevation: {
      defaultValue: 3,
      control: 'number',
    },
    mediaImgAltTxt: {
      defaultValue: 'Browse and Tour Homes',
      control: 'text',
    },
    mediaImg: {
      defaultValue: ResidentSVG as unknown,
      control: 'text',
    },
    mediaImgColor: {
      defaultValue: '#f7b712',
      control: 'text',
    },
    heading: {
      defaultValue: 'Browse and Tour Homes',
      control: 'text',
    },
    headingVariant: {
      defaultValue: 'h4',
      control: 'text',
    },
    headingStyles: {
      defaultValue: { mb: 1 },
      control: 'object',
    },
    body: {
      defaultValue: 'Tell us about your dream home and get matched with “the one.” ',
      control: 'text',
    },
    headingVarint: {
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
      defaultValue: 'h4',
      control: { type: 'select' },
    },
    buttonVariant: {
      options: ['text', 'outlined', 'primary', 'secondary', 'inactive'],
      defaultValue: 'primary',
      control: { type: 'radio' },
    },
    buttonSize: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof CardComponent> = args => <CardComponent {...args} />;

export const Card = Template.bind({});
