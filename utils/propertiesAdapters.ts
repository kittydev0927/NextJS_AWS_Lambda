import type { IHomesDetail } from 'homedetail/IHomeDetail';

import type { PropertyCardProps } from '#components/layouts/molecules/PropertyCard/PropertyCard.types';
import type { IMapProps } from '#components/layouts/organisms/Map/Map.types';

export const propertiesAdapter = (homes: IHomesDetail | undefined): PropertyCardProps[] | undefined => {
  const properties: PropertyCardProps[] | undefined = homes?.items.map(home => {
    return {
      propertyId: home.propertyId || '',
      labelStatus: 'moveInReady',
      favorite: home.isSaved || false,
      image: {
        src: (home?.images && home.images[0].lg) || '',
        alt: (home?.images && home.images[0].name) || '',
      },
      information: {
        price: home.price || 0,
        statuses: ['moveInNow'],
        bedroom: home.beds || 0,
        bathroom: home.baths || 0,
        address: {
          title: [home.streetAddress, home.locality, home.region, home.postalCode].filter(Boolean).join(', '),
          href: '/',
        },
        location: home.location,
      },
      mapTypeCard: true,
    };
  });
  return properties;
};

export const mapPropertiesAdapter = (properties: readonly PropertyCardProps[]): IMapProps['propertiesData'] => {
  const mapProperties: IMapProps['propertiesData'] = properties.map(property => {
    return {
      statuses: property.information.statuses,
      address: property.information.address.title,
      label_status: property.labelStatus,
      baths: property.information.bathroom,
      beds: property.information.bedroom,
      id: property.propertyId,
      location: property.information.location,
      price: property.information.price,
      property_thumbnail_url: property.image.src,
      favorite: property.favorite,
    };
  });
  return mapProperties;
};
