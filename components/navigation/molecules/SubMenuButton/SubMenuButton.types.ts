import type { Nav } from '#components/layouts/organisms/Header/Header.types';

export interface SubMenuButtonProps {
  button?: Button;
  disabled?: boolean;
  disableRipple?: boolean;
  variant?: 'outlined' | 'text' | 'primary' | 'secondary' | 'inactive';
  userName?: string;
  showDownArrow?: boolean;
  onClick?: (nav: Nav) => void;
  selectedText?: string;
}

interface Button {
  id: number;
  text: string;
  options?: Option[];
}

interface Option {
  text?: string;
  url?: string;
}
