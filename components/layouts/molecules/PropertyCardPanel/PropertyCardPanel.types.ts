import type { ListMapButtonProps } from '#components/forms/atoms/ListMapButton/ListMapButton.types';

import type { PropertyCardProps } from '../PropertyCard/PropertyCard.types';

export interface PropertyCardPanelProps {
  title: string;
  description?: string;
  linkText?: string;
  showFilters?: boolean;
  onClickLink?: React.MouseEventHandler<HTMLDivElement>;
  properties: readonly PropertyCardProps[];
  homesView?: 'list' | 'map';
  homesViewOnChange?: ListMapButtonProps['onChange'];
  propertyView?: 'card' | 'map';
}

export interface PropertyCardPanelStyleProps {
  showFilters?: boolean;
}

export interface StyledDescriptionProps {
  margin?: 'small' | 'large';
}

export interface StyledTitleProps {
  title: string;
}
