import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { UpcomingTour } from '#components/layouts/molecules/UpcomingTour/UpcomingTour';
import { ToursCard as ToursCardComponent } from '#components/layouts/organisms/ToursCard/ToursCard';

const upcomingTourExampleProps = {
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

export default {
  title: 'Components/Layouts/Organisms/Tours Card',
  component: ToursCardComponent,
} as Meta;

const Template: Story = () => (
  <ToursCardComponent>
    <UpcomingTour
      date={upcomingTourExampleProps.date}
      address={upcomingTourExampleProps.address}
      image={upcomingTourExampleProps.image}
    />
    <UpcomingTour
      date={upcomingTourExampleProps.date}
      address={upcomingTourExampleProps.address}
      image={upcomingTourExampleProps.image}
    />
    <UpcomingTour
      date={upcomingTourExampleProps.date}
      address={upcomingTourExampleProps.address}
      image={upcomingTourExampleProps.image}
    />
  </ToursCardComponent>
);

export const ToursCard = Template.bind({});
