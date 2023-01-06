export interface SubMenuItemProps {
  selected?: string;
  color?: string;
  href: string;
  label: string;
  sx?: Record<string, unknown>;
  setSelected?: React.Dispatch<React.SetStateAction<string | undefined>>;
}
