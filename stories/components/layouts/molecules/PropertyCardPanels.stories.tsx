import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { PropertyCardProps } from '#components/layouts/molecules/PropertyCard/PropertyCard.types';
import { PropertyCardPanel as PropertyCardPanelComponent } from '#components/layouts/molecules/PropertyCardPanel/PropertyCardPanel';

export default {
  title: 'Components/Layouts/Molecules/Property Card Panels',
  component: PropertyCardPanelComponent,
  parameters: {
    docs: {
      description: 'Property card panels uses two property card panel components.',
    },
    argTypes: { onClick: { action: 'clicked' } },
  },
} as Meta;

const Template: Story = () => (
  <div>
    <PropertyCardPanelComponent
      title="Saved Homes"
      linkText="View All"
      showFilters
      onClickLink={() => alert(1)}
      properties={savedProperties}
    />
  </div>
);

export const PropertyCardPanels = Template.bind({});

const savedProperties = [
  {
    propertyId: 'propertyId',
    mapTypeCard: false,
    information: {
      price: 2350,
      statuses: ['moveInNow', 'specialOffer', 'smartHome'],
      bedroom: 4,
      bathroom: 2.5,
      address: {
        title: '4367 Newton Lane, Ellenwood, GA 30294',
        href: '/',
      },
    },
    favorite: true,
    image: {
      src: 'https://photos.zillowstatic.com/fp/3b374a5f19ca4e7f9cf864310222bb3d-p_e.jpg',
      alt: 'alt example',
    },
    labelStatus: 'moveInReady',
  },
  {
    mapTypeCard: false,
    information: {
      price: 2350,
      statuses: ['moveInNow', 'specialOffer', 'smartHome'],
      bedroom: 4,
      bathroom: 2.5,
      address: {
        title: '4367 Newton Lane, Ellenwood, GA 30294',
        href: '/',
      },
    },
    favorite: true,
    image: {
      src: 'https://photos.zillowstatic.com/fp/45d3e00942ddd838338950ba2ef3301e-cc_ft_960.jpg',
      alt: 'alt example',
    },
    labelStatus: 'moveInReady',
  },
  {
    mapTypeCard: false,
    information: {
      price: 2350,
      statuses: ['moveInNow', 'specialOffer', 'smartHome'],
      bedroom: 4,
      bathroom: 2.5,
      address: {
        title: '4367 Newton Lane, Ellenwood, GA 30294',
        href: '/',
      },
    },
    favorite: true,
    image: {
      src: 'https://photos.zillowstatic.com/fp/5998754846dd7877f7921af7cb7efe63-cc_ft_960.jpg',
      alt: 'alt example',
    },
    labelStatus: 'moveInReady',
  },
  {
    mapTypeCard: false,
    information: {
      price: 2350,
      statuses: ['moveInNow', 'specialOffer', 'smartHome'],
      bedroom: 4,
      bathroom: 2.5,
      address: {
        title: '4367 Newton Lane, Ellenwood, GA 30294',
        href: '/',
      },
    },
    favorite: true,
    image: {
      src: 'https://photos.zillowstatic.com/fp/45d3e00942ddd838338950ba2ef3301e-cc_ft_960.jpg',
      alt: 'alt example',
    },
    labelStatus: 'moveInReady',
  },
] as PropertyCardProps[];
