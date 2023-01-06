import { useState } from 'react';

import { Checkbox } from '#components/forms/atoms/Checkbox/Checkbox';

import type { CheckboxProps } from '../Checkbox/Checkbox.types';

export const useControlledCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const component = (props?: IComponentProps) => (
    <ControlledCheckbox {...props} setChecked={setChecked} checked={checked} />
  );

  return [component, checked, setChecked] as const;
};

type IComponentProps = Pick<CheckboxProps, 'label'>;

interface IControlledFieldProps extends Omit<CheckboxProps, 'onChange'> {
  readonly setChecked: (isChecked: boolean) => void;
}

const ControlledCheckbox = (props: IControlledFieldProps) => {
  const { setChecked, ...other } = props;

  return (
    <Checkbox
      {...other}
      onChange={e => {
        const { checked } = e.target as HTMLInputElement;
        setChecked(checked);
      }}
    />
  );
};
