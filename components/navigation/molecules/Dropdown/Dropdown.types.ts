export interface DropdownProps {
  button?: Button;
  disabled?: boolean;
  disableRipple?: boolean;
  variant?: 'outlined' | 'text' | 'primary' | 'secondary' | 'inactive';
  userName?: string | null;
  showDownArrow?: boolean;
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
  isAdditional?: boolean;
}
