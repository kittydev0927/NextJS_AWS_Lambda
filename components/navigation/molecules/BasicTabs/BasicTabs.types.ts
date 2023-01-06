export interface TabContextInterface {
  value: number;
  handleChange: (event: unknown, newValue: number) => void;
  // event is typed as 'unknown' to resolve error:
  // Type '((event: ChangeEvent<HTMLInputElement>, newValue: number) => void) | undefined'
  // is not assignable to type '((event: SyntheticEvent<Element, Event>, value: any) => void) | undefined'.
  // MUI has 'onChange' props typed as a SyntheticEvent, not a ChangeEvent.
  // more info: https://github.com/mui-org/material-ui/issues/17454
}

export interface BasicTabsProps {
  children: React.ReactNode;
}
