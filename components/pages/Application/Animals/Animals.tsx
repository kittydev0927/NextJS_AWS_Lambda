import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

import { RadioCheckBoxes } from '#components/forms/atoms/RadioCheckBoxes/RadioCheckBoxes';
import { ApplicationPageWrapper } from '#components/forms/molecules/ApplicationPageWrapper/ApplicationPageWrapper';
import { FileExplorerLink } from '#components/forms/molecules/FileExplorerLink/FileExplorerLink';
import { TipsInnerContent } from '#components/layouts/molecules/TipsSideBar/InnerContent/TipsInnerContent';
import { theme } from '#styles/styles';

import {
  StyledCheckboxContainer,
  StyledContainer,
  StyledHeader,
  StyledPageLayoutApplication,
  StyledSubText,
  StyledSupportCheckboxContainer,
  StyledText,
  StyledTextField,
  StyledUploadDesc,
  StyledUploadDescContainer,
} from './Animals.styles';
import type { AnimalsProps } from './Animals.types';
import { ANIMALS_DESCRIPTION } from './constants';

export const Animals: React.FC<AnimalsProps> = ({ pageData }) => {
  const appTips = pageData.cPPApplicationTipsList.items[0];

  const [petsIndex, setPetsIndex] = useState<null | number>(null);
  const [serviceIndex, setServiceIndex] = useState<null | number>(null);
  const [disabilityIndex, setDisabilityIndex] = useState<null | number>(null);
  const [supportIndex, setSupportIndex] = useState<null | number>(null);
  const [animalTraining, setAnimalTraining] = useState('');

  function isValid() {
    if (typeof petsIndex === 'number' && typeof supportIndex === 'number') {
      if (serviceIndex === 1 || (typeof disabilityIndex === 'number' && animalTraining.length)) {
        return true;
      }
    }
    return false;
  }

  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  const router = useRouter();
  const prevPage = useCallback(async () => {
    void router.push('/application/occupants');
  }, [router]);
  const nextPage = useCallback(async () => {
    void router.push('/application/additional-information');
  }, [router]);

  return (
    <StyledPageLayoutApplication infoText="2022. All Rights Reserved Progress Residential ®">
      <ApplicationPageWrapper
        prevPage={prevPage}
        nextPage={nextPage}
        step={7}
        innerTheme={smallBreakpoint ? 'gradient' : 'plain'}
        outerTheme="plain"
        tipsContent={<TipsInnerContent appTips={appTips} />}
        isNextButtonDisabled={!isValid()}
        description={ANIMALS_DESCRIPTION}
      >
        <StyledContainer data-testid="animals-page">
          <StyledHeader variant="h6">We love pets and want to learn about yours!</StyledHeader>
          <StyledText component="div" variant="body2">
            1. Do you have pets?
          </StyledText>
          <StyledCheckboxContainer>
            <RadioCheckBoxes
              title=""
              options={['Yes', 'No']}
              row
              checkedIndex={petsIndex}
              setCheckedIndex={setPetsIndex}
            />
          </StyledCheckboxContainer>
          <StyledText component="div" variant="body2">
            2. Do you have a service dog(s)?
          </StyledText>
          <StyledCheckboxContainer>
            <RadioCheckBoxes
              title=""
              options={['Yes', 'No']}
              row
              checkedIndex={serviceIndex}
              setCheckedIndex={setServiceIndex}
            />
          </StyledCheckboxContainer>
          {serviceIndex === 0 && (
            <div data-testid="service-dog-section">
              <StyledSubText component="div" variant="body1">
                Is the animal required because of a disability?
              </StyledSubText>
              <StyledCheckboxContainer>
                <RadioCheckBoxes
                  title=""
                  options={['Yes', 'No']}
                  row
                  checkedIndex={disabilityIndex}
                  setCheckedIndex={setDisabilityIndex}
                />
              </StyledCheckboxContainer>
              <StyledSubText component="div" variant="body1">
                What work or tasks has the animal been trained to perform?
              </StyledSubText>
              <StyledTextField onChange={e => setAnimalTraining(e.target.value)} multiline rows={4} />
            </div>
          )}
          <StyledText component="div" variant="body2">
            3. Do you have emotional support animals?
          </StyledText>
          <StyledSupportCheckboxContainer>
            <RadioCheckBoxes
              title=""
              options={['Yes', 'No']}
              row
              checkedIndex={supportIndex}
              setCheckedIndex={setSupportIndex}
              data-testid="confirm-support-animal"
            />
          </StyledSupportCheckboxContainer>
          {supportIndex === 0 && (
            <StyledUploadDescContainer data-testid="support-animal-section">
              <StyledUploadDesc>
                Please upload a letter from a Health Care Professional describing the kind of assistance or therapeutic
                emotional support that is provided by the animal.
              </StyledUploadDesc>
              <FileExplorerLink linkText={'Upload Letter Here'} icon={''} />
            </StyledUploadDescContainer>
          )}
        </StyledContainer>
      </ApplicationPageWrapper>
    </StyledPageLayoutApplication>
  );
};
