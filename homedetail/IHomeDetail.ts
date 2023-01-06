export type ILatLng = readonly [number, number];

export interface IHomesDetail {
  readonly items: readonly IHomeDetail[];
  readonly offset: number;
  readonly total: number;
}

export interface IHomeDetail {
  readonly bannerStatus?: string | null;
  readonly images?:
    | readonly {
        readonly id: string;
        readonly lg: string;
        readonly md: string;
        readonly name: string;
        readonly sm: string;
        readonly xs: string;
      }[]
    | null;
  readonly isSaved?: boolean;
  readonly price?: number | null;
  readonly baths?: number | null;
  readonly beds?: number | null;
  readonly locality?: string | null;
  readonly location?: ILatLng;
  readonly postalCode?: string | null;
  readonly propertyId?: string | null;
  readonly propertyStatus?: string | null;
  readonly region?: string | null;
  readonly streetAddress?: string | null;
}
