import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { HelpfulRating as HelpfulRatingComponent } from '#components/forms/molecules/HelpfulRating/HelpfulRating';
import { theme } from '#styles/styles';

export default {
  title: 'Components/Forms/Molecules/Helpful Rating',
  component: HelpfulRatingComponent,
  parameters: {
    backgrounds: {
      default: 'isabelline',
      values: [{ name: 'isabelline', value: theme.colors.isabelline }],
    },
    layout: 'padded',
    docs: {
      description: {
        component:
          'The `HelpfulRating` component allows the user to select a thumbs up or thumbs down to provide a rating on the content.',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story = args => <HelpfulRatingComponent {...args} />;

export const HelpfulRating = Template.bind({});
