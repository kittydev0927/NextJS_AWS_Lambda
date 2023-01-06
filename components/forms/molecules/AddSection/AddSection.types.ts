export interface OptionProps {
  label: string;
  type: string;
}

export interface AddChildProps {
  dateValues: (Date | null)[];
  setDateValues: React.Dispatch<React.SetStateAction<(Date | null)[]>>;
  keyIndex: number;
  options: OptionProps[];
  fieldText: string;
  removeText: string;
  onClickRemove: (index: number) => void;
}

export interface AddSectionProps {
  options: OptionProps[];
  buttonText: string;
  fieldText: string;
  removeText: string;
}
