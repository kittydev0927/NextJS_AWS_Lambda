import { ThemeProvider } from '@mui/material';
import userEvent from '@testing-library/user-event';
import React from 'react';

import type { PortalUser } from '#auth/PortalUser';
import { UserContext } from '#auth/UserContext';
import { theme } from '#styles/styles';
import { act, render, screen } from '#utils/testing-library';

import { MobilePropertyCardMap } from './MobilePropertyCardMap';
import { PropertyCard } from './PropertyCard';
import type { PropertyCardProps } from './PropertyCard.types';
import { STATUSES_TITLES } from './PropertyCard.types';

describe('PropertyCard', () => {
  const args = {
    propertyId: 'propertyId',
    mapTypeCard: true,
    information: {
      price: 2350,
      statuses: ['moveInNow', 'specialOffer', 'smartHome'],
      bedroom: 4,
      bathroom: 2.5,
      address: {
        title: '4367 Newton Lane, Ellenwood, GA 30294',
        href: '/',
      },
    },
    favorite: true,
    image: {
      src: 'https://photos.zillowstatic.com/fp/3b374a5f19ca4e7f9cf864310222bb3d-p_e.jpg',
      alt: 'alt example',
    },
    labelStatus: 'moveInReady',
  } as PropertyCardProps;

  it('PropertyCard was rendered correct', () => {
    render(
      <ThemeProvider theme={theme}>
        <PropertyCard {...args} />
      </ThemeProvider>,
    );
    expect(screen.getByText(args.information.address.title)).toBeInTheDocument();
  });

  it('favorite button test', () => {
    render(
      <ThemeProvider theme={theme}>
        <PropertyCard {...args} />
      </ThemeProvider>,
    );
    userEvent.click(screen.getByTestId('FavoriteIcon'));
    expect(screen.getByTestId('FavoriteBorderIcon')).toBeInTheDocument();
  });

  it('favorite button select/Deselect test', async () => {
    render(
      <ThemeProvider theme={theme}>
        <PropertyCard {...args} />
      </ThemeProvider>,
    );
    userEvent.click(screen.getByTestId('FavoriteIcon'));
    userEvent.click(screen.getByTestId('FavoriteBorderIcon'));
    expect(screen.getByTestId('FavoriteIcon')).toBeInTheDocument();
  });

  it('MobilePropertyCardMap', async () => {
    render(
      <ThemeProvider theme={theme}>
        <MobilePropertyCardMap {...args} favouriteHandler={jest.fn()} />
      </ThemeProvider>,
    );
    expect(screen.queryByText(STATUSES_TITLES[args.labelStatus])).not.toBeInTheDocument();
  });

  it('select handle favorite button', async () => {
    const args = {
      propertyId: 'propertyId',
      mapTypeCard: true,
      information: {
        price: 2350,
        statuses: ['moveInNow', 'specialOffer', 'smartHome'],
        bedroom: 4,
        bathroom: 2.5,
        address: {
          title: '4367 Newton Lane, Ellenwood, GA 30294',
          href: '/',
        },
      },
      favorite: false,
      image: {
        src: 'https://photos.zillowstatic.com/fp/3b374a5f19ca4e7f9cf864310222bb3d-p_e.jpg',
        alt: 'alt example',
      },
      labelStatus: 'moveInReady',
    } as PropertyCardProps;

    // Arrange
    const mockFunc = jest.fn();
    const mockContext = { addSavedHomes: mockFunc } as unknown as PortalUser;

    render(
      <UserContext.Provider value={mockContext}>
        <PropertyCard {...args} />
      </UserContext.Provider>,
    );

    // Act
    await act(async () => {
      userEvent.click(screen.getByTestId('handle-favorite'));
    });

    // Assert
    expect(mockFunc).toHaveBeenCalled();
  });
});
