import React from 'react';

// TODO: Remediate.
// eslint-disable-next-line jest/no-mocks-import
import { navOne, navThree } from '#utils/__mocks__/subMenuOptions';
import { render, screen } from '#utils/testing-library';

import { SubMenuImage } from './SubMenuImage';

describe('Dropdown', () => {
  it('Renders a SubMenuImage with navOne selected', () => {
    render(<SubMenuImage selectedNav={navOne}></SubMenuImage>);
    expect(screen.getByText('Lorem Ipsum Dolor')).toBeInTheDocument();
  });

  it('Renders a SubMenuImage with navThree selected', () => {
    render(<SubMenuImage selectedNav={navThree}></SubMenuImage>);
    expect(screen.getByText('Lorem Ipsum Dolor Sit Amet')).toBeInTheDocument();
  });
});
