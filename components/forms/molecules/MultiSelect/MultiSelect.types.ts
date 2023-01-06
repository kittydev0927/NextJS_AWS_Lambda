import type { CheckboxProps } from '#components/forms/atoms/Checkbox/Checkbox.types';

interface QuestionType {
  selectOptions: {
    value: string | number;
  }[];
}

export interface MultiSelectOptionProps extends CheckboxProps {
  question?: QuestionType;
  content: {
    nodeType: string;
    value: string;
  }[];
}
export interface MultiSelectOptionItem {
  nodeType: string;
  value: string;
}

export interface MultiSelectProps {
  options: MultiSelectOptionProps[];
  onSelectedOptions: (options: MultiSelectOptionProps[]) => void;
}
