export interface IPropertyProps {
  statuses: Partial<['moveInNow', 'specialOffer', 'smartHome', 'unavailable']>;
  address: string;
  label_status: 'moveInReady' | 'unavailable';
  baths: number;
  beds: number;
  id: string;
  readonly location?: readonly [number, number];
  price: number;
  property_thumbnail_url: string;
  favorite: boolean;
}

export interface IMapProps {
  propertiesData: IPropertyProps[];
}
