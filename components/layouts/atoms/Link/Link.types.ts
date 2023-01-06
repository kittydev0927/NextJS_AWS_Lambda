export interface LinkProps {
  linkText?: string; // for Storybook controls only
  underline?: 'always' | 'hover' | 'none';
  variant?:
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
  color?: string;
  href?: string;
  showArrow?: boolean;
  alignArrow?: 'start' | 'end';
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  rel?: string;
  target?: string;
}
