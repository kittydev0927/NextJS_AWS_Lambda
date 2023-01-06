/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Dispatch, SetStateAction } from 'react';
export const EMAIL_REGEX = /^.+@.+\..+$/;

export const TEL_REGEX = /^\(\d{3}\)\s\d{3}-\d{4}$/;

export const SSN_REGEX = /^\d{3}-?\d{2}-?\d{4}$/;

export const NAME_REGEX = /^[A-Za-z']+$/;

export const handlePhoneMask = (
  val: string,
  setValue: Dispatch<SetStateAction<any>>,
  setError: Dispatch<SetStateAction<any>>,
) => {
  const formattedPhoneNumber = formatPhoneNumber(val);
  setValue(formattedPhoneNumber);
  setError(!TEL_REGEX.test(formattedPhoneNumber));
};

function formatPhoneNumber(value: string) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}
