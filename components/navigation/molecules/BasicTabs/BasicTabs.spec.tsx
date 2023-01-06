import React from 'react';

import { fireEvent, render, screen, waitFor } from '#utils/testing-library';

import { Tab } from '../Tab/Tab';
import { TabsContainer } from '../TabsContainer/TabsContainer';
import { BasicTabs } from './BasicTabs';

describe('Tabs', () => {
  it('Finds rendered tab component', () => {
    render(
      <BasicTabs>
        <TabsContainer>
          <Tab label="Tab 1" value={0} />
          <Tab label="Tab 2" value={1} />
          <Tab label="Tab 3" value={2} />
        </TabsContainer>
      </BasicTabs>,
    );

    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });
  it('Changes the tab when a different tab is selected', async () => {
    render(
      <BasicTabs>
        <TabsContainer>
          <Tab label="Tab 1" value={0} />
          <Tab label="Tab 2" value={1} />
          <Tab label="Tab 3" value={2} />
        </TabsContainer>
      </BasicTabs>,
    );
    fireEvent(
      screen.getByText('Tab 2'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    await waitFor(() => {
      expect(screen.getByText('Tab 2')).toHaveClass('Mui-selected');
    });
  });
});
