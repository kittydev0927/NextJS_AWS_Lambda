import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { PropertyCardSummary as PropertyCardSummaryComponent } from '#components/layouts/molecules/PropertyCardSummary/PropertyCardSummary';
import type { IPropertyCardSummaryProps } from '#components/layouts/molecules/PropertyCardSummary/PropertyCardSummary.types';
import { sampleProperty } from '#utils/samplePropertyData';

export default {
  title: 'Components/Layouts/Molecules/Property Card Summary',
  component: PropertyCardSummaryComponent,
  parameters: {
    docs: {
      description: {
        component: 'Property card used to display summary information about a property.',
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <div>
    <PropertyCardSummaryComponent {...(args as IPropertyCardSummaryProps)} />
  </div>
);

export const PropertyCardSummary = Template.bind({});
PropertyCardSummary.args = {
  header: 'Your Application Details',
  image: {
    alt: sampleProperty.images[0].name,
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
};
