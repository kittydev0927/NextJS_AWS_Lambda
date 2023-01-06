import type { ILatLng } from 'homedetail/IHomeDetail';

export const STATUSES_TITLES = {
  moveInReady: 'Move-In Ready',
  unavailable: 'Unavailable',
  moveInNow: 'Move-In Now',
  specialOffer: 'Special Offer',
  smartHome: 'Smart Home',
};

export interface PropertyCardProps extends MapTypeCard {
  propertyId: string;
  labelStatus: 'moveInReady' | 'unavailable';
  favorite: boolean;
  image: {
    src: string;
    alt: string;
  };
  information: {
    price: number;
    statuses: Partial<['moveInNow', 'specialOffer', 'smartHome', 'unavailable']>;
    bedroom: number;
    bathroom: number;
    address: {
      title: string;
      href: string;
    };
    location?: ILatLng;
  };
}

export interface MapTypeCard {
  mapTypeCard?: boolean;
}

export type PropertyCardMapProps = {
  favouriteHandler: () => void;
} & Omit<PropertyCardProps, 'labelStatus' | 'mapTypeCard'>;
