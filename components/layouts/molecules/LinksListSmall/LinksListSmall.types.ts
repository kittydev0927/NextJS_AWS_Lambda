// Justification: Column numbers.
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
type columnSpacing = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | boolean;

export interface LinksListSmallProps {
  text?: string;
  links?: { text: string; url: string; icon?: string }[];
  linkColor?: string;
  textStyles?: Record<string, unknown>;
  textVariant?:
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
  textAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  color?: string;
  columns?: number[] | number;
  columnSpacing?: (number | string)[] | number | string;
  gridSpacing?: (number | string)[] | number | string;
  gridItemXs?: columnSpacing;
  gridItemSm?: columnSpacing;
  gridItemMd?: columnSpacing;
  gridItemLg?: columnSpacing;
  gridItemXl?: columnSpacing;
}
