import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

import { YesNoQuestion } from '../../../molecules/YesNoCheckbox/YesNoQuestion';
import {
  StyledAdditionalInfoContainer,
  StyledHeader,
  StyledInput,
  StyledYesNoContainer,
  TextFieldContainer,
} from './ApplicationAdditionalInfo.styles';
import type { IApplicationAdditionalInfoProps } from './ApplicationAdditionalInfo.types';

export const ApplicationAdditionalInfo: FC<IApplicationAdditionalInfoProps> = ({ setNextDisabled }) => {
  const [agent, setAgent] = useState<boolean | null>(null);
  const [vehicle, setVehicle] = useState<boolean | null>(null);
  useEffect(() => {
    if (agent && vehicle && setNextDisabled) {
      setNextDisabled(false);
    }
  }, [agent, setNextDisabled, vehicle]);

  return (
    <StyledAdditionalInfoContainer>
      <StyledHeader variant="h6">Additional Information</StyledHeader>
      <StyledYesNoContainer>
        <YesNoQuestion
          questionText="Are you working with a non-Progress Residential Agent or Realtor?"
          defaultAnswer={null}
          setPageFilledContext={setAgent}
        />
      </StyledYesNoContainer>
      {agent && (
        <TextFieldContainer>
          <StyledInput
            placeholder="Agent Name"
            id="agentName"
            name="agentName"
            data-testid="agentName-input"
            fullWidth
            label="Agent Name"
            required
          />
          <StyledInput
            placeholder="Email Address"
            id="email"
            data-testid="email-input"
            fullWidth
            label="Email Address"
            required
          />
        </TextFieldContainer>
      )}
      <StyledYesNoContainer>
        <YesNoQuestion questionText="Do you have Vehicles?" defaultAnswer={null} setPageFilledContext={setVehicle} />
      </StyledYesNoContainer>
    </StyledAdditionalInfoContainer>
  );
};
