import { FormHelperText } from '@mui/material';
import { useEffect, useState } from 'react';

import { Select } from '#components/forms/atoms/Select/Select';
import { getLocations } from '#services/profile/getLocations';

import type { SelectProps } from '../Select/Select.types';

export const useControlledSelect = (initialValue?: string) => {
  const [value, setValue] = useState('');
  const [locationOptions, setLocationOptions] = useState([]);

  useEffect(() => {
    if (locationOptions.length === 0) {
      void getLocationOptions();
    }
  }, [locationOptions]);

  const getLocationOptions = async () => {
    const options = await getLocations();

    if (options?.length !== 0) {
      const selectOptions = options.map(option => {
        const { locality, region } = option;

        return {
          label: `${locality}, ${region}`,
          value: `${locality}`,
        };
      }) as [];

      setLocationOptions(selectOptions);
    }
  };

  const component = (props?: IComponentProps) => (
    <>
      <ControlledSelect
        {...props}
        initialValue={initialValue}
        options={locationOptions}
        setValue={setValue}
        value={value}
      />
      {!value && <FormHelperText error>Required field</FormHelperText>}
    </>
  );

  return [component, value, setValue] as const;
};

type IComponentProps = Pick<SelectProps, 'renderValue'>;

interface IControlledFieldProps extends Omit<SelectProps, 'onChange'> {
  readonly setValue: (value: string) => void;
  readonly initialValue?: string;
}

const ControlledSelect = ({ options, setValue, initialValue, ...props }: IControlledFieldProps) => {
  const placeholder = initialValue || 'Select area';

  return (
    <Select
      {...props}
      className="interest-area"
      options={options}
      onChange={e => {
        const { value } = e.target as HTMLInputElement;
        setValue(value);
      }}
      placeholder={placeholder}
    />
  );
};
