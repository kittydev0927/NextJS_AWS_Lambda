import React from 'react';

import { render, screen } from '#utils/testing-library';

import { Autocomplete } from './Autocomplete';
import { StyledChip } from './Autocomplete.styles';

describe('Autocomplete', () => {
  const placeholder = 'test placeholder';
  const options = [
    'Ankh-Morpork, Discworld',
    'Lancre, Discworld',
    'Pseudopolis, Discworld',
    'The Chalk, Discworld',
    'Überwald, Discworld',
  ];

  it('the component renders correctly and "placeholder" prop is passed', () => {
    render(<Autocomplete placeholder={placeholder} options={options} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeVisible();
  });

  it('loader works correctly', () => {
    const { container } = render(<Autocomplete placeholder={placeholder} loading options={options} />);
    expect(container.getElementsByClassName('MuiCircularProgress-root')).toHaveLength(1);
  });

  it('StyledChip tests', () => {
    render(<StyledChip label={placeholder} />);
    expect(screen.getByText(placeholder)).toBeInTheDocument();
  });
});
