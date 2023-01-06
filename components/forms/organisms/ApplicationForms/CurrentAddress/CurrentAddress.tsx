/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from '@mui/material';
import type { TextFieldProps } from '@mui/material/TextField/TextField';
import * as React from 'react';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

import { Autocomplete } from '#components/forms/atoms/Autocomplete/Autocomplete';
import { Countries } from '#constants/constants';
import ArrowIcon from '#public/path.svg';
import { useValidation } from '#utils/useValidation';

import {
  StyledContainer,
  StyledHeading,
  StyledIcon,
  StyledStateAutocompleteContainer,
  StyledTextField,
} from './CurrentAddress.styles';
import type { IAutoCompleteOptionType, ICurrentAddressProps, InitialValues } from './CurrentAddress.types';
import { fields, ONLY_LETTERS_AND_NUMBERS_REGEX, ONLY_LETTERS_REGEX } from './CurrentAddress.types';

const preventTyping = (event: React.KeyboardEvent<HTMLDivElement>, regex: RegExp) => {
  const target = event.target as HTMLInputElement;
  // prevent typing if first character is whitespace to
  // avoid whitespace strings from being submitted
  if (target.value === '' && event.key === ' ') {
    event.preventDefault();
  }
  if (!regex.test(event.key)) {
    event.preventDefault();
  }
};

export const CurrentAddress: React.FC<ICurrentAddressProps> = ({ isFormValid }) => {
  const [values, setValues] = useState<InitialValues>({
    country: {
      label: '',
      value: '',
    },
    address: '',
    apartment: '',
    city: '',
    state: {
      label: '',
      value: '',
    },
    zipCode: '',
  });

  const {
    textFieldRegister,
    updatedValues,
    autoCompleteRegister,
    isFormValid: isFormValidStatus,
    validate,
  } = useValidation<InitialValues>(fields, values);

  useEffect(() => {
    setValues(updatedValues);
    if (updatedValues.country.value === Countries.US) {
      void validate('zipCode');
    }
  }, [updatedValues]);

  useEffect(() => {
    isFormValid(values, isFormValidStatus);
  }, [isFormValid, isFormValidStatus]);

  const countries = [
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
  ];

  const states = [
    { label: 'GA', value: 'GA' },
    { label: 'AZ', value: 'AZ' },
  ];
  const isCountryUS = values.country.value === Countries.US;
  return (
    <StyledContainer className="current-address">
      <Grid container item direction="column" alignItems="self-start" spacing={2} xs={12}>
        <Grid item xs={12}>
          <StyledHeading variant="h6">Your Current Physical Address</StyledHeading>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete<IAutoCompleteOptionType>
            {...autoCompleteRegister('country')}
            fullWidth
            placeholder="Country"
            options={countries}
            multiple={false}
            popupIcon={<StyledIcon src={ArrowIcon as string} width={24} height={14} alt="select" />}
          />
          <StyledTextField
            {...textFieldRegister('address')}
            label="Street Address"
            fullWidth
            onKeyDown={event => {
              preventTyping(event, ONLY_LETTERS_AND_NUMBERS_REGEX);
            }}
          />

          <StyledTextField
            {...textFieldRegister('apartment')}
            label="Apt #"
            fullWidth
            onKeyDown={event => {
              preventTyping(event, ONLY_LETTERS_AND_NUMBERS_REGEX);
            }}
          />
          <StyledTextField
            {...textFieldRegister('city')}
            label="City"
            fullWidth
            onKeyDown={event => {
              preventTyping(event, ONLY_LETTERS_REGEX);
            }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <StyledStateAutocompleteContainer>
            <Autocomplete<IAutoCompleteOptionType>
              {...autoCompleteRegister('state')}
              fullWidth
              placeholder="State"
              options={states}
              multiple={false}
              popupIcon={<StyledIcon src={ArrowIcon as string} width={24} height={14} alt="select" />}
            />
          </StyledStateAutocompleteContainer>
        </Grid>
        <Grid item xs={12} sm={8}>
          {isCountryUS ? (
            <InputMask
              {...{
                mask: '99999-9999',
                maskChar: ' ',
              }}
              {...textFieldRegister('zipCode')}
              value={textFieldRegister('zipCode').value as InitialValues['zipCode']}
            >
              {(inputProps: TextFieldProps) => <StyledTextField label="Zip Code" fullWidth {...inputProps} />}
            </InputMask>
          ) : (
            <StyledTextField label="Zip Code" fullWidth {...textFieldRegister('zipCode')} />
          )}
        </Grid>
      </Grid>
    </StyledContainer>
  );
};
