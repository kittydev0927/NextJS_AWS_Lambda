import { useMediaQuery } from '@mui/material';
import MuiBox from '@mui/material/Box';
import * as React from 'react';

import { theme } from '#styles/styles';

import { StyledStepper } from './Stepper.styles';
import type { StepperProps } from './Stepper.types';
import { StepperMobile } from './StepperMobile';
import { StepperVertical } from './StepperVertical';

export const Stepper: React.FC<StepperProps> = props => {
  const { currentStep = 1, steps = [], onClick, top, moveToPage } = props;
  const breakpoint = useMediaQuery(theme.breakpoints.only('xs'));

  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => {
    setActiveStep(currentStep - 1);
  }, [currentStep]);

  return (
    <StyledStepper className="stepper">
      <MuiBox sx={{ maxWidth: 400 }}>
        {breakpoint ? (
          <StepperMobile
            steps={steps}
            moveToPage={moveToPage}
            activeStep={activeStep}
            smallScreen
            onClick={onClick}
            top={top}
          />
        ) : (
          <StepperVertical moveToPage={moveToPage} activeStep={activeStep} steps={steps} smallScreen={false} />
        )}
      </MuiBox>
    </StyledStepper>
  );
};
