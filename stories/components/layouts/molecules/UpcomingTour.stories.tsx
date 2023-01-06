import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { UpcomingTour as UpcomingTourComponent } from '#components/layouts/molecules/UpcomingTour/UpcomingTour';
import type { UpcomingTourProps } from '#components/layouts/molecules/UpcomingTour/UpcomingTour.types';

export default {
  title: 'Components/Layouts/Molecules/Upcoming Tour',
  component: UpcomingTourComponent,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
    argTypes: {
      image: {
        src: {
          control: 'text',
        },
        alt: {
          control: 'text',
        },
      },
      date: {
        date: {
          control: 'text',
        },
        time: {
          control: 'text',
        },
      },
      address: {
        city: {
          control: 'text',
        },
        state: {
          control: 'text',
        },
      },
    },
  },
} as Meta;

const Template: Story = args => <UpcomingTourComponent {...(args as UpcomingTourProps)} />;

export const UpcomingTour = Template.bind({});

UpcomingTour.args = {
  image: {
    src: 'https://photos.zillowstatic.com/fp/3b374a5f19ca4e7f9cf864310222bb3d-p_e.jpg',
    alt: 'alt example',
  },
  date: {
    date: 'September 22, 2021',
    time: '@ 2:45pm EST',
  },
  address: {
    city: '3948 Gresham Park Blvd,',
    state: 'Atlanta, GA 30309',
  },
};
