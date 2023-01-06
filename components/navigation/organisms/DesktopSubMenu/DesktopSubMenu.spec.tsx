import React from 'react';

// TODO: Remediate.
// eslint-disable-next-line jest/no-mocks-import
import { navThree, navTwo } from '#utils/__mocks__/subMenuOptions';
import { render, screen } from '#utils/testing-library';

import { DesktopSubMenu } from './DesktopSubMenu';

describe('Dropdown', () => {
  it('Renders a DesktopSubMenu button text', () => {
    render(<DesktopSubMenu selectedNav={navThree} open></DesktopSubMenu>);
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('Renders a DesktopSubMenu button text with different navigation', () => {
    render(<DesktopSubMenu selectedNav={navTwo} open></DesktopSubMenu>);
    expect(screen.getByText('Resources')).toBeInTheDocument();
  });
});
