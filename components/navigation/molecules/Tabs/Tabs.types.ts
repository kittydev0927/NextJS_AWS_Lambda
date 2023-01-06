export interface TabContextInterface {
  value: number;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>, newValue: number) => void;
}

export interface BasicTabsProps {
  children: React.ReactNode;
}
