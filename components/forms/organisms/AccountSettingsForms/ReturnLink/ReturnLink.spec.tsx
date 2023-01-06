import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import { ReturnLink } from './ReturnLink';

describe('RegistrationForm', () => {
  it('renders the RegistrationForm', () => {
    const mockFunc = jest.fn();
    render(<ReturnLink onClick={mockFunc} />);
    userEvent.click(screen.getByText('Account Settings'));
    expect(mockFunc).toHaveBeenCalled();
  });
});
