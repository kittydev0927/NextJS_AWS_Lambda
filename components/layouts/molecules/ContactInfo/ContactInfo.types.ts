export interface ContactInfoProps {
  linkColor?: string;
  textStyles?: Record<string, unknown>;
  textAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
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
}
