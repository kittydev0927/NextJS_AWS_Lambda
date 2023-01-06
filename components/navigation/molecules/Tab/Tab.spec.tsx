import React from 'react';

import { render, screen } from '#utils/testing-library';

import { Tab } from './Tab';

describe('Tab', () => {
  it('Finds rendered tab component', () => {
    render(<Tab label="Tab 1" index={0} value={0} />);

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
  });
});
