export interface InfoBarProps {
  children?: React.ReactNode;
  showAccountIcon?: boolean;
  linkText?: string;
  onClickLink?: React.MouseEventHandler<HTMLDivElement>;
  infoText?: string;
}
