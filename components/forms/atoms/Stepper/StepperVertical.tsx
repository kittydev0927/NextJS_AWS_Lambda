import MuiBox from '@mui/material/Box';
import MuiStep from '@mui/material/Step';
import MuiStepLabel from '@mui/material/StepLabel';
import MuiStepper from '@mui/material/Stepper';
import Image from 'next/image';
import * as React from 'react';

import { Button } from '#components/forms/atoms/Button/Button';
import { Divider } from '#components/layouts/atoms/Divider/Divider';
import EditIcon from '#public/edit-icon.svg';

import { StyledStepper } from './Stepper.styles';
import type { StepperProps } from './Stepper.types';

export const StepperVertical: React.FC<StepperProps> = props => {
  const { activeStep, steps, smallScreen, onClick, moveToPage } = props;
  const handleClick = async (href: string, index: number) => {
    if (moveToPage && activeStep && index <= activeStep) {
      await moveToPage(href);
    }
  };
  return (
    <StyledStepper>
      <MuiBox sx={{ maxWidth: 400 }}>
        <MuiStepper activeStep={activeStep} orientation="vertical">
          {steps?.map((step, index) => (
            <MuiStep key={index} onClick={() => void handleClick(step.href, index)}>
              <MuiStepLabel>
                {smallScreen && <span className="step-label">{`Step ${index + 1}: `}</span>}
                {step.label}
              </MuiStepLabel>
              {activeStep && smallScreen && index <= activeStep - 1 ? (
                <Button data-testid={`step-${index + 1}`} className={`button-edit step-${index + 1}`} onClick={onClick}>
                  <Image src={EditIcon as string} width={18} height={18} alt="Edit" />
                </Button>
              ) : null}
              {smallScreen && <Divider orientation="horizontal" />}
            </MuiStep>
          ))}
        </MuiStepper>
      </MuiBox>
    </StyledStepper>
  );
};
