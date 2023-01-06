import React from 'react';

import { fireEvent, render } from '#utils/testing-library';

import { HelpButton } from './HelpButton';

describe('Help Button', () => {
  it('renders the help button', () => {
    const { getByText } = render(<HelpButton />);
    expect(getByText('Help')).toBeInTheDocument();
  });

  it('calls "onClick" prop on button click', () => {
    const onClick = jest.fn();
    const { getByText } = render(<HelpButton onClick={onClick} />);
    fireEvent.click(getByText(/help/i));
    expect(onClick).toHaveBeenCalled();
  });
});
