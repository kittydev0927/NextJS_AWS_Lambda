/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { Checkbox } from '#components/forms/atoms/Checkbox/Checkbox';
import type { DatePickerProps } from '#components/forms/atoms/DatePicker/DatePicker.types';
import { RadioCheckBoxes } from '#components/forms/atoms/RadioCheckBoxes/RadioCheckBoxes';
import { FileExplorerLink } from '#components/forms/molecules/FileExplorerLink/FileExplorerLink';
import {
  StyledCheckboxContainer,
  StyledContainer,
  StyledControlledTextField,
  StyledDatePicker,
  StyledFileExplorerContainer,
  StyledLinkContainer,
} from '#components/forms/organisms/ApplicantFields/ApplicantFields.styles';
import type { ApplicantFieldsProps } from '#components/forms/organisms/ApplicantFields/ApplicantFields.types';
import CameraIcon from '#public/camera.svg';
import { exampleProfile } from '#utils/exampleProfile';

export const ApplicantFields: React.FC<ApplicantFieldsProps> = ({ profile = exampleProfile, setNextDisabled }) => {
  const [firstName, setFirstName] = useState<string | undefined | null>(profile.firstName);
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState<string | undefined | null>(profile.lastName);
  const [mobilePhone, setMobilePhone] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string | undefined | null>(profile.emailAddress);
  const [ssn, setSsn] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [checkedIndex, setCheckedIndex] = useState<null | number>(null);
  const [military, setMilitary] = useState(false);
  const [militaryDoc, setMilitaryDoc] = useState<File | undefined>();
  const [id, setId] = useState<File | undefined>();

  const onChange: DatePickerProps['onChange'] = (date: React.SetStateAction<Date | null>) => {
    setDateOfBirth(date);
  };
  const onError = () => {
    //handle error
  };

  useEffect(() => {
    if (firstName && lastName && mobilePhone && emailAddress && ssn.length && dateOfBirth && id && setNextDisabled) {
      if (military && !militaryDoc) {
        setNextDisabled(true);
      } else {
        setNextDisabled(false);
      }
    } else if (setNextDisabled) {
      setNextDisabled(true);
    }
  }, [
    setFirstName,
    setLastName,
    setMobilePhone,
    setEmailAddress,
    firstName,
    lastName,
    mobilePhone,
    emailAddress,
    ssn,
    setSsn,
    dateOfBirth,
    militaryDoc,
    military,
    id,
  ]);

  return (
    <StyledContainer data-testid="applicant-fields">
      <RadioCheckBoxes
        title="I am applying to be a:"
        options={['Resident', 'Guarantor']}
        row
        checkedIndex={checkedIndex}
        setCheckedIndex={setCheckedIndex}
      />
      <StyledControlledTextField
        label="Legal First Name"
        value={firstName}
        type="name"
        setValue={setFirstName}
        data-testid="applicant-first-name-input"
        required
      />
      <StyledControlledTextField
        label="Middle Name"
        type="name"
        value={middleName}
        setValue={setMiddleName}
        data-testid="applicant-middle-name-input"
      />
      <StyledControlledTextField
        label="Last Name"
        type="name"
        value={lastName}
        setValue={setLastName}
        data-testid="applicant-last-name-input"
        required
      />
      <StyledControlledTextField
        label="Mobile Phone Number"
        value={mobilePhone}
        setValue={setMobilePhone}
        data-testid="applicant-mobile-phone-input"
        type="tel"
        required
      />
      <StyledControlledTextField
        label="Email Address"
        value={emailAddress}
        setValue={setEmailAddress}
        data-testid="applicant-email-address-input"
        type="email"
        required
      />
      <StyledCheckboxContainer>
        <Checkbox
          label="I am Active Duty Military"
          name="military"
          checked={military}
          onChange={() => setMilitary(!military)}
        />
      </StyledCheckboxContainer>
      <StyledLinkContainer>
        {military && <FileExplorerLink linkText="Upload Title 10 or LES" setValue={setMilitaryDoc} />}
      </StyledLinkContainer>
      <StyledControlledTextField
        label="SSN / TIN"
        value={ssn}
        setValue={setSsn}
        data-testid="applicant-ssn-input"
        type="password"
        regexType="ssn"
        required
      />

      <StyledDatePicker label="Date of Birth" value={dateOfBirth} onChange={onChange} onError={onError} />
      <StyledFileExplorerContainer>
        <FileExplorerLink
          linkText="Upload Government Issued ID For Verification"
          icon={CameraIcon as string}
          setValue={setId}
        />
      </StyledFileExplorerContainer>
    </StyledContainer>
  );
};
