export interface FooterProps {
  companyInfoLinkColor?: string;
  textStylesTop?: Record<string, unknown>;
  textStylesBottom?: Record<string, unknown>;
  links?: { text: string; url: string }[];
  textAlignTop?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  textVariantTop?:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
  textAlignBottom?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  textVariantBottom?:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
  gridSpacing?: (number | string)[] | number | string;
  showBackToTop?: boolean;
}
