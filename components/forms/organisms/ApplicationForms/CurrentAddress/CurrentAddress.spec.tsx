import userEvent from '@testing-library/user-event';
import React from 'react';

import { act, render, screen } from '#utils/testing-library';

import { CurrentAddress } from './CurrentAddress';

describe('CurrentAddress', () => {
  it('render correctly', async () => {
    render(
      <CurrentAddress
        isFormValid={() => {
          return false;
        }}
      />,
    );
    await act(async () => {
      const autocomplete = screen.getByPlaceholderText('Country');

      userEvent.type(autocomplete, ' ');
      userEvent.click(await screen.findByText('United States'));
      expect(autocomplete).toHaveValue('United States');
    });
  });
  it('prevent incorrect type value', () => {
    render(
      <CurrentAddress
        isFormValid={() => {
          return false;
        }}
      />,
    );
    const streetAddress = screen.getByLabelText('Street Address');
    const apt = screen.getByLabelText('Apt #');
    const city = screen.getByLabelText('City');
    const incorrectValue = '@!#';
    userEvent.type(streetAddress, incorrectValue);
    userEvent.type(apt, incorrectValue);
    userEvent.type(city, incorrectValue);
    expect(streetAddress).toHaveValue('');
    expect(apt).toHaveValue('');
    expect(city).toHaveValue('');
  });
  it('prevent whitespace strings', () => {
    render(
      <CurrentAddress
        isFormValid={() => {
          return false;
        }}
      />,
    );
    const streetAddress = screen.getByLabelText('Street Address');
    const apt = screen.getByLabelText('Apt #');
    const city = screen.getByLabelText('City');
    const incorrectValue = ' ';
    userEvent.type(streetAddress, incorrectValue);
    userEvent.type(apt, incorrectValue);
    userEvent.type(city, incorrectValue);
    expect(streetAddress).toHaveValue('');
    expect(apt).toHaveValue('');
    expect(city).toHaveValue('');
  });
});
