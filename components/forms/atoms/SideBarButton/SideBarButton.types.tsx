export interface SideBarButtonProps {
  buttonState?: 'closed' | 'open' | 'mobile';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonProps {
  buttonState: 'closed' | 'open' | 'mobile';
}
