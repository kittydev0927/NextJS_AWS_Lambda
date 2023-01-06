import { styled } from '@mui/material';
import Menu from '@mui/material/Menu';

import { Button } from '#components/forms/atoms/Button/Button';
import type { StyledStepperMenuProps } from '#components/forms/atoms/Stepper/Stepper.types';

export const StyledStepper = styled('div')`
  .MuiStepConnector-lineVertical {
    border-left-width: 0;
    min-height: unset;
  }
  .MuiSvgIcon-root.Mui-completed {
    color: ${({ theme }) => theme.colors.lime};
  }
  .MuiSvgIcon-root.Mui-active {
    color: ${({ theme }) => theme.colors.orangeRed};
  }
  .MuiSvgIcon-root {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.isabelline};
    font-weight: 600;
    .MuiStepIcon-text {
      fill: ${({ theme }) => theme.colors.darkGreen};
    }
  }
  .Mui-completed,
  .Mui-active {
    .MuiStepIcon-text {
      fill: #fff;
    }
  }
  .Mui-completed svg path {
    d: 'M1.15 4.005c.323.06.384.123.552.28l3.19 3.191L10.207.384S10.81-.18 11.392.06c.52.216.776.916.487 1.423-.028.048-.037.06-.069.105L5.801 9.604a.855.855 0 0 1-.269.247 1.022 1.022 0 0 1-1.148-.059c-.043-.034-.052-.044-.092-.081L.285 5.702a.857.857 0 0 1-.233-.369c-.217-.6.274-1.362.973-1.34.043 0 .084.006.126.012z' !important;
  }
  .MuiStepLabel-iconContainer {
    padding-right: 23px;
    padding-left: 14px;
  }
  .MuiDivider-root {
    padding: 1px 32px 5px;
  }
  .MuiStepIcon-text {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export const StyledDownArrow = styled('div')`
  color: ${({ theme }) => theme.colors.white};
  max-width: 14px;
  display: flex;
`;

export const StyledStepperMobile = styled('div')`
  width: 100%;
  position: relative;
  #circular-progress-text.MuiTypography-body1 {
    font-size: 15.3px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.lime};
    line-height: 1.58;
    letter-spacing: -0.55px;
  }
`;

export const StyledStepperMenu = styled(Button)`
  width: 100%;
  padding: 6px 14px;
  &.open {
    padding: 6px 0px 6px 14px;
  }
  &:hover {
    background-color: unset;
  }
`;

export const StyledStepperOpen = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .MuiTypography-root {
    text-transform: none;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const StyledStepperClosed = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: ${({ theme }) => theme.colors.darkGray};
    text-transform: none;
  }
`;

export const StyledTypographyStep = styled('div')`
  p {
    font-size: 12px;
    font-weight: 600;
  }
`;

export const StyledTypographyLabel = styled('div')`
  p {
    font-size: 16px;
  }
`;

export const StyledTypographyStepCon = styled('div')`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const StyledStepperProgressCon = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .step-text.MuiTypography-root {
    padding-left: 15px;
  }
`;

export const StyledMenu = styled(Menu)<StyledStepperMenuProps>`
  &#form-menu.MuiPopover-root {
    .MuiPopover-paper {
      left: 0;
      width: 100%;
      max-width: 100%;
      height: 100vh;
      box-shadow: none;
      margin-left: 16px;
      margin-top: ${props => (props.top ? `${props.top}px` : '10px')};
    }
  }
`;

export const StyledStepLabelCon = styled('a')`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  padding-left: 22px;
  .MuiButton-root {
    margin-right: 16px;
  }
  .step-label {
    font-weight: 600;
  }
`;

export const StyledResumeButton = styled(Button)`
  position: absolute;
  top: 6px;
  right: 0;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  text-transform: none;
  width: 139px;
  height: 49px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.teal};
  font-weight: 400;
`;
