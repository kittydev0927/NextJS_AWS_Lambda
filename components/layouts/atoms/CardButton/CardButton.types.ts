export interface CardButtonProps {
  variant?: 'outlined' | 'text' | 'primary' | 'secondary' | 'inactive';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  buttonWidth?: string;
  iconPosition?: 'left' | 'right';
  url?: string;
}
