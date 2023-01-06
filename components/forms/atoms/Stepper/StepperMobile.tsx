import Image from 'next/image';
import * as React from 'react';

import { CircularProgress } from '#components/forms/atoms/CircularProgress/CircularProgress';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import DownArrowDark from '#public/down-arrow-dark.svg';

import {
  StyledDownArrow,
  StyledMenu,
  StyledResumeButton,
  StyledStepperClosed,
  StyledStepperMenu,
  StyledStepperMobile,
  StyledStepperOpen,
  StyledStepperProgressCon,
  StyledTypographyLabel,
  StyledTypographyStep,
  StyledTypographyStepCon,
} from './Stepper.styles';
import type { StepperProps } from './Stepper.types';
import { StepperVertical } from './StepperVertical';

export const StepperMobile: React.FC<StepperProps> = props => {
  const { activeStep = 0, steps, onClick, top, moveToPage } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const formIncomplete = steps && activeStep + 1 <= steps.length;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledStepperMobile id="styledStepperMobile">
      <StyledStepperMenu
        data-testid="stepper-menu-button"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        disableRipple
        className={open ? 'open' : ''}
        sx={{ left: 0 }}
      >
        {open ? (
          <StyledStepperOpen>
            <StyledStepperProgressCon>
              <CircularProgress
                currentStep={steps && activeStep > steps.length ? steps.length : activeStep}
                totalSteps={steps?.length}
                widthValue={46}
              />
              <Typography className="step-text">
                {formIncomplete ? ` Step ${activeStep + 1} of ${steps.length}` : 'Completed'}
              </Typography>
            </StyledStepperProgressCon>
          </StyledStepperOpen>
        ) : (
          <StyledStepperClosed>
            <StyledTypographyStepCon>
              <StyledTypographyStep className="step-active">
                <Typography>{formIncomplete ? `Step ${activeStep + 1}` : 'Step'} </Typography>
              </StyledTypographyStep>
              <StyledTypographyLabel>
                <Typography>{formIncomplete ? steps[activeStep]?.label : 'Complete!'}</Typography>{' '}
              </StyledTypographyLabel>
            </StyledTypographyStepCon>
            <StyledDownArrow data-testid="styled-down-arrow">
              <Image src={DownArrowDark as string} width={14} height={7} alt="Down Arrow" />
            </StyledDownArrow>
          </StyledStepperClosed>
        )}
      </StyledStepperMenu>
      {open && (
        <StyledResumeButton variant="primary" onClick={handleClose}>
          Resume
        </StyledResumeButton>
      )}
      <StyledMenu
        top={top}
        data-testid="stepper-close-button"
        id="form-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'form-button',
        }}
      >
        <StepperVertical
          activeStep={activeStep}
          moveToPage={moveToPage}
          orientation="vertical"
          steps={steps}
          smallScreen
          onClick={onClick}
        />
      </StyledMenu>
    </StyledStepperMobile>
  );
};
