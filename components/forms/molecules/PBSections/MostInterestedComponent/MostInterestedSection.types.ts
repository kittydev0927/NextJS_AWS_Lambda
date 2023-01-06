import type { CheckboxProps } from '#components/forms/atoms/Checkbox/Checkbox.types';

type AdditionAnswerType =
  | 'input'
  | {
      selectOptions: {
        value: string | number;
        label: string | number;
      }[];
    };

export interface MostInterestedOptionProps extends CheckboxProps {
  additionAnswer?: AdditionAnswerType;
}

export interface MostInterestedProps {
  options: MostInterestedOptionProps[];
}
