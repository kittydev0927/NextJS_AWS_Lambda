import type { AutocompleteValue } from '@mui/base/AutocompleteUnstyled/useAutocomplete';
import type {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteProps as MuiAutocompleteProps,
} from '@mui/material/Autocomplete/Autocomplete';
import type { InputBaseProps } from '@mui/material/InputBase';
import type * as React from 'react';
import { useState } from 'react';
import type { ValidationError } from 'yup';
import type { OptionalObjectSchema } from 'yup/lib/object';
import type { AnyObject } from 'yup/lib/types';

interface Register<TextFields> {
  name: keyof TextFields;
  value?: TextFields[keyof TextFields];
  error: boolean;
  onBlur: InputBaseProps['onBlur'];
  helperText: Partial<TextFields> | undefined;
}

type TextFieldRegisterType<TextFields> = (name: keyof TextFields) => {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
} & Register<TextFields>;

type AutoCompleteRegisterType<TextFields> = (name: keyof TextFields) => {
  onChange: <AutocompleteOption>(
    event: React.SyntheticEvent,
    value: AutocompleteValue<AutocompleteOption, boolean, boolean, boolean>,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<AutocompleteOption>,
  ) => void;
} & Register<TextFields>;

export const useValidation = <TextFields>(yupValidationObject: OptionalObjectSchema<AnyObject>, values: TextFields) => {
  const [errorsMessages, setErrors] = useState<Partial<TextFields> | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [updatedValues, setUpdatedValues] = useState<TextFields>(values);

  const isValid = async () => {
    const isFormValidYup = await yupValidationObject.isValid(values, {
      abortEarly: false,
    });

    let errorList: Partial<TextFields> = {};
    await yupValidationObject.validate(values, { abortEarly: false }).catch(err => {
      const rawData: ValidationError['inner'] = err.inner as ValidationError['inner'];
      errorList = rawData.reduce((acc, { path, errors }) => {
        return {
          ...acc,
          ...(path && { [path?.split('.')[0]]: errors[0] }),
        };
      }, {});
    });
    return {
      errorList,
      isFormValidYup,
    };
  };

  const onBlur: InputBaseProps['onBlur'] = e => {
    void (async () => {
      const { isFormValidYup, errorList } = await isValid();
      const name = e.target.name as keyof TextFields;
      setIsFormValid(isFormValidYup);
      const errorMessage = errorList[name];

      setErrors({
        ...errorsMessages,
        ...{ [name]: errorMessage || false },
      });
    })();
  };

  const textFieldRegister: TextFieldRegisterType<TextFields> = name => {
    const onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = e => {
      const target = e.target;
      setUpdatedValues({
        ...updatedValues,
        [target.name]: target.value,
      });
    };
    return {
      name,
      value: values[name],
      error: Boolean(errorsMessages?.[name]),
      onBlur: onBlur,
      onChange,
      helperText: errorsMessages?.[name],
    };
  };

  const autoCompleteRegister: AutoCompleteRegisterType<TextFields> = <AutocompleteOption>(name: keyof TextFields) => {
    const onChange: MuiAutocompleteProps<AutocompleteOption, boolean, boolean, boolean>['onChange'] = (e, value) => {
      setUpdatedValues({
        ...updatedValues,
        [name]: value,
      });
    };
    return {
      name,
      value: values[name],
      error: Boolean(errorsMessages?.[name]),
      onBlur: onBlur,
      onChange,
      helperText: errorsMessages?.[name],
    };
  };

  const validate = async (name?: keyof TextFields) => {
    const { isFormValidYup, errorList } = await isValid();
    setIsFormValid(isFormValidYup);

    setErrors({
      ...errorsMessages,
      ...(name ? { [name]: errorList[name] || false } : errorList),
    });
  };

  return {
    textFieldRegister,
    autoCompleteRegister,
    updatedValues,
    isFormValid,
    errorsMessages,
    validate,
  };
};
