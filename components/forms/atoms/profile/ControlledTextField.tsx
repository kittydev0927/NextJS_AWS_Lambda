import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { EMAIL_REGEX, handlePhoneMask, NAME_REGEX, SSN_REGEX } from '#utils/masks';

// Justification: Pre-existing code.
/* eslint-disable @typescript-eslint/no-magic-numbers */
import { TextField } from '../TextField/TextField';
import type { IControlledTextFieldProps } from './IControlledTextFieldProps';

export const ControlledTextField = (props: IControlledTextFieldProps) => {
  const { setValue, type, helperText, noError, regexType, ...other } = props;
  const [error, setError] = useState(false);
  const [errorHelperText, setErrorHelperText] = useState('');

  const validateEmail = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const email = e.target.value;
    if (EMAIL_REGEX.test(email)) {
      setError(false);
      setErrorHelperText('');
    } else {
      setError(true);
      setErrorHelperText('Please enter a valid email address');
    }
  };

  const formatSSN = (str: string, format: number[], sep: string) => {
    let output = '';
    let idx = 0;
    for (let i = 0; i < format.length && idx < str.length; i += 1) {
      output += str.slice(idx, format[i]);
      if (format[i] < str.length) output += sep;
      idx = format[i];
    }
    output += str.slice(idx + 1);

    return output;
  };

  const validateSSN = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const ssn = e.target.value;
    const ssnFirstPart = ssn.slice(0, 3);
    const ssnSecondPart = ssn.slice(4, 6);
    const ssnThirdPart = ssn.slice(7, 11);
    if (
      ssnFirstPart === '000' ||
      parseInt(ssnFirstPart, 10) === 666 ||
      (parseInt(ssnFirstPart, 10) >= 900 && parseInt(ssnFirstPart, 10) <= 999) ||
      ssnSecondPart === '00' ||
      ssnThirdPart === '0000'
    ) {
      setError(true);
      setErrorHelperText('Please enter a valid SSN');
    } else if (SSN_REGEX.test(ssn)) {
      setError(false);
      setErrorHelperText('');
    } else {
      setError(true);
      setErrorHelperText('Please enter a valid SSN');
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value: newValue } = e.target;
    if (type === 'name' && (NAME_REGEX.test(newValue) || !newValue.length)) {
      setValue(newValue);
    } else if (type === 'email') {
      validateEmail(e);
      setValue(newValue);
    } else if (type === 'password' && regexType === 'ssn') {
      validateSSN(e);
      let ssnValue = (e.target as HTMLInputElement).value;
      ssnValue = ssnValue.replace(/-/g, '');
      if (ssnValue.length > -1) {
        setValue(formatSSN(ssnValue, [3, 5, 15], '-'));
      }
    } else if (type === 'password') {
      setValue(newValue);
    } else if (type === 'tel') {
      handlePhoneMask(newValue, setValue, setError);
    } else {
      setValue(newValue);
      if (noError) {
        setError(false);
      } else {
        setError(!newValue);
      }
      setError(!newValue);
    }
  };

  return (
    <TextField
      {...other}
      type={type}
      error={error}
      onChange={onChange}
      variant="outlined"
      helperText={helperText ?? errorHelperText}
    />
  );
};
