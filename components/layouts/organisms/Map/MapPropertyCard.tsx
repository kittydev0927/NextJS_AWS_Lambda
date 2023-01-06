import React from 'react';

import { PropertyCard } from '#components/layouts/molecules/PropertyCard/PropertyCard';

import type { IPropertyProps } from './Map.types';

export const MapPropertyCard: React.FC<IPropertyProps> = ({
  price,
  statuses,
  beds,
  baths,
  address,
  label_status,
  location,
  property_thumbnail_url,
  id,
  favorite,
}) => (
  <PropertyCard
    mapTypeCard
    propertyId={id}
    information={{
      location,
      price,
      statuses,
      bedroom: beds,
      bathroom: baths,
      address: {
        title: address,
        href: '/',
      },
    }}
    favorite={favorite}
    image={{
      src: property_thumbnail_url,
      alt: `View of ${address}`,
    }}
    labelStatus={label_status}
  />
);
