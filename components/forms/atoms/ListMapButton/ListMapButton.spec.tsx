import React from 'react';

import { fireEvent, render, screen } from '#utils/testing-library';

import { ListMapButton } from './ListMapButton';

describe('ListMapButton', () => {
  it('renders the ListMapButton', () => {
    render(<ListMapButton />);
    expect(screen.getByTestId('list-map-button')).toBeInTheDocument();
  });

  it('renders the ListMapButton, show list view', () => {
    render(<ListMapButton value="list" />);
    expect(screen.getByTestId('list-button')).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByTestId('map-button')).toHaveAttribute('aria-pressed', 'false');
  });

  it('renders the ListMapButton, show map view', () => {
    render(<ListMapButton value="map" />);
    expect(screen.getByTestId('list-button')).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByTestId('map-button')).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders the ListMapButton, check list is selected', () => {
    const handleChange = (_event: unknown, newDisplay: string) => {
      expect(newDisplay).toBe('list');
    };
    render(<ListMapButton value="list" onChange={handleChange} />);
  });

  it('renders the ListMapButton, check map is selected', () => {
    const handleChange = (_event: unknown, newDisplay: string) => {
      expect(newDisplay).toBe('map');
    };
    render(<ListMapButton value="map" onChange={handleChange} />);
  });

  it('renders the ListMapButton, check map is selected on map button click', () => {
    let newDisplayVal = '';
    const handleChange = (_event: unknown, newDisplay: string) => {
      newDisplayVal = newDisplay;
    };
    render(<ListMapButton value="list" onChange={handleChange} />);
    fireEvent.click(screen.getByTestId('map-button'));
    expect(newDisplayVal).toBe('map');
  });
});
