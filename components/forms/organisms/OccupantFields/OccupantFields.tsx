import React, { useState } from 'react';

import type { DatePickerProps } from '#components/forms/atoms/DatePicker/DatePicker.types';
import {
  StyledContainer,
  StyledControlledTextField,
  StyledDatePicker,
} from '#components/forms/organisms/OccupantFields/OccupantFields.styles';

export const OccupantFields: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const onChange: DatePickerProps['onChange'] = date => {
    setDateOfBirth(date);
  };
  return (
    <StyledContainer data-testid="occupant-fields">
      <StyledControlledTextField
        label="Legal First Name"
        value={firstName}
        setValue={setFirstName}
        noError
        data-testid="occupant-first-name-input"
      />
      <StyledControlledTextField
        label="Middle Name"
        value={middleName}
        setValue={setMiddleName}
        noError
        data-testid="occupant-middle-name-input"
      />
      <StyledControlledTextField
        label="Last Name"
        value={lastName}
        setValue={setLastName}
        noError
        data-testid="occupant-last-name-input"
      />
      <StyledDatePicker
        label="Date of Birth"
        value={dateOfBirth}
        onChange={onChange}
        onError={() => console.info('date picker error')}
      />
    </StyledContainer>
  );
};
