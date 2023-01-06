import type { InferType } from 'yup';
import { object, string } from 'yup';

import { Countries } from '#constants/constants';

export interface ICurrentAddressProps {
  isFormValid: (values: InitialValues, state: boolean) => void;
}

export interface IAutoCompleteOptionType {
  value: string;
  label: string;
}

export const US_ZIPCODE_REGEX = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
export const ONLY_LETTERS_AND_NUMBERS_REGEX = /^[a-zA-Z \d]*$/;
export const ONLY_LETTERS_REGEX = /^[a-z- A-Z]*$/;
const ERROR_MESSAGE_LETTER_AND_NUMBER = 'only letters and numbers are allowed';
export const fields = object({
  country: object({
    label: string().required(),
    value: string().required(),
  }),
  address: string().required().matches(ONLY_LETTERS_AND_NUMBERS_REGEX, ERROR_MESSAGE_LETTER_AND_NUMBER),
  apartment: string().required().matches(ONLY_LETTERS_AND_NUMBERS_REGEX, ERROR_MESSAGE_LETTER_AND_NUMBER),
  city: string().required().matches(ONLY_LETTERS_REGEX, 'only letters is allowed'),
  state: object({
    label: string().required(),
    value: string().required(),
  }),
  zipCode: string()
    .required()
    .when('country', (country, schema) =>
      country.value === Countries.US ? schema.matches(US_ZIPCODE_REGEX, '5+4 format') : schema,
    ),
});

export type InitialValues = InferType<typeof fields>;
