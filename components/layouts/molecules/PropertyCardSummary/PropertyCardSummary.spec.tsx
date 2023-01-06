import { ThemeProvider } from '@mui/material';
import React from 'react';

import { theme } from '#styles/styles';
import { sampleProperty } from '#utils/samplePropertyData';
import { render, screen } from '#utils/testing-library';

import PropertyCardSummary from './PropertyCardSummary';
import type { IPropertyCardSummaryProps } from './PropertyCardSummary.types';

describe('PropertyCardSummary', () => {
  const props = {
    header: 'Your Application Details',
    image: {
      alt: 'Property Image',
      src: sampleProperty.images[0].xs,
    },
    information: {
      price: sampleProperty.price,
      bedroom: sampleProperty.beds,
      bathroom: sampleProperty.baths,
      address: {
        street: sampleProperty.streetAddress,
        locality: sampleProperty.locality,
        region: sampleProperty.region,
        postalCode: sampleProperty.postalCode,
      },
    },
  } as IPropertyCardSummaryProps;

  const header = 'Your Application Details';

  it('PropertyCardSummary was rendered correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <PropertyCardSummary {...props} />
      </ThemeProvider>,
    );

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', props.image.src);
    expect(img).toHaveAttribute('alt', props.image.alt);

    expect(screen.getByText(header)).toBeInTheDocument();
    expect(screen.getByText(props.information.address.street)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${props.information.address.locality}, ${props.information.address.region} ${props.information.address.postalCode}`,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(`${sampleProperty.beds} bed`)).toBeInTheDocument();
    expect(screen.getByText(`${sampleProperty.baths} bath`)).toBeInTheDocument();
    expect(screen.getByText(`$${sampleProperty.price}/Mo`)).toBeInTheDocument();
  });
});
