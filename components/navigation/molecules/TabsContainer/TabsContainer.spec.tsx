import React from 'react';

import { render, screen } from '#utils/testing-library';

import { Tab } from '../Tab/Tab';
import { TabsContainer } from './TabsContainer';

describe('TabsContainer', () => {
  it('Finds rendered tab component', () => {
    render(
      <TabsContainer>
        <Tab label="Tab 1" value={0} />
        <Tab label="Tab 2" value={1} />
        <Tab label="Tab 3" value={2} />
      </TabsContainer>,
    );

    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });
});
