import React from 'react';

import { render, screen } from '#utils/testing-library';

import { UpcomingTour } from './UpcomingTour';
import type { UpcomingTourProps } from './UpcomingTour.types';

describe('UpcomingTour', () => {
  const args = {
    date: {
      date: 'September 22, 2021',
      time: '@ 2:45pm EST',
    },
    address: {
      city: '3948 Gresham Park Blvd,',
      state: 'Atlanta, GA 30309',
    },
    image: {
      src: 'https://photos.zillowstatic.com/fp/3b374a5f19ca4e7f9cf864310222bb3d-p_e.jpg',
      alt: 'alt example',
    },
  } as unknown as UpcomingTourProps;
  it('UpcomingTour was rendered correct', () => {
    render(<UpcomingTour {...args} />);
    expect(screen.getByText(args.address.city)).toBeInTheDocument();
    expect(screen.getByText(args.address.state)).toBeInTheDocument();
    expect(screen.getByText(args.date.date)).toBeInTheDocument();
    expect(screen.getByText(args.date.time)).toBeInTheDocument();
  });
});
