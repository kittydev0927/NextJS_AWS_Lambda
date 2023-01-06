import { Box, styled } from '@mui/material';

import type { SliderProps } from './Slider.types';

export const StyledSlider = styled('div')<SliderProps>`
  .MuiSlider-root {
    width: ${props => props.width || '99%'};
    margin: 0 auto;
    display: flex;
  }

  .MuiSlider-rail {
    height: 14px;
    margin: 0px 0 13px;
    border-radius: 13.5px;
    background-color: ${({ theme }) => theme.colors.sliderGray};
  }

  .MuiSlider-track {
    height: 14px;
    background-image: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.darkGreen},
      ${({ theme }) => theme.colors.green}
    );
    border: none;
  }

  .MuiSlider-thumb {
    padding: 6px;
    box-shadow: 3px 2px 19px 0 ${({ theme }) => theme.colors.boxShadow};
    border: 7px solid ${({ theme }) => theme.colors.white};
    width: 15px;
    height: 15px;
    background-color: ${({ theme }) => theme.colors.green};
  }
  .MuiSlider-thumb:last-child {
    background-color: ${({ theme }) => theme.colors.darkGreen};
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  margin-top: 7px;

  .MuiTypography-body1 {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;
