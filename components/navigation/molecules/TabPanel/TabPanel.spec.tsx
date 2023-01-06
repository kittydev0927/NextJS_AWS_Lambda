import React from 'react';

import { render, screen } from '#utils/testing-library';

import { TabPanel } from './TabPanel';

describe('TabPanel', () => {
  it('Finds rendered tab component', () => {
    render(<TabPanel index={0}>Panel</TabPanel>);

    expect(screen.getByText('Panel')).toBeInTheDocument();
  });
});
