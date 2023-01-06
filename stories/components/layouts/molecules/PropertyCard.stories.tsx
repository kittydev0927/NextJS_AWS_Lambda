import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { PropertyCard as PropertyCardComponent } from '#components/layouts/molecules/PropertyCard/PropertyCard';
import type { PropertyCardProps } from '#components/layouts/molecules/PropertyCard/PropertyCard.types';

export default {
  title: 'Components/Layouts/Molecules/Property Card',
  component: PropertyCardComponent,
  parameters: {
    docs: {
      description: {
        component: 'Property card is used to display all the information about propery',
      },
    },
    argTypes: {
      title: {
        control: 'text',
      },
      mapTypeCard: {
        control: 'boolean',
      },
      favorite: {
        control: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story = args => <PropertyCardComponent {...(args as PropertyCardProps)} />;

export const PropertyCard = Template.bind({});
PropertyCard.args = {
  mapTypeCard: true,
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
};
