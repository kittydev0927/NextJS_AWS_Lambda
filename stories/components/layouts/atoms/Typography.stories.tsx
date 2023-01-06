import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { Typography as TypographyComponent } from '#components/layouts/atoms/Typography/Typography';
import type { TypographyProps } from '#components/layouts/atoms/Typography/Typography.types';

export default {
  title: 'Components/Layouts/Atoms/Typography',
  component: TypographyComponent,
  argTypes: {
    textVariant: {
      options: ['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit'],
      control: { type: 'select' },
    },
    text: {
      name: 'text text',
      control: { type: 'text' },
    },
    sx: {
      description:
        '`sx` is a MUI optional prop that can be used to specify any custom, one-off styles. Refer to [MUI docs](https://mui.com/system/the-sx-prop/) for more details.',
      control: { type: 'object' },
    },
    textAlign: {
      options: ['center', 'inherit', 'justify', 'left', 'right'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<TypographyProps> = args => (
  <TypographyComponent {...args}>{args.text ? args.text : 'Typography'}</TypographyComponent>
);
export const Typography = Template.bind({});
Typography.args = {
  textAlign: 'left',
  textVariant: 'h2',
};
