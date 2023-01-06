import MUISlider from '@mui/material/Slider';
import React from 'react';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

import { StyledBox, StyledSlider } from './Slider.styles';
import type { SliderProps } from './Slider.types';

export const Slider: React.FC<SliderProps> = ({
  value,
  disabled,
  onChange,
  valueLabeldisplay,
  max,
  min,
  width,
  ...props
}) => {
  const defaultMin = 30;
  const defaultMax = 70;

  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (isMinMax(newValue)) {
      onChange?.(newValue);
    }
  };

  return (
    <>
      <StyledSlider width={width}>
        <MUISlider
          getAriaLabel={() => 'range slider'}
          data-testid="range-slider"
          value={value ?? [defaultMin, defaultMax]}
          disabled={disabled}
          onChange={handleChange}
          valueLabelDisplay={valueLabeldisplay}
          max={max}
          min={min}
          {...props}
        />
      </StyledSlider>
      <StyledBox>
        <Typography data-testid="min-value-slider" component="div">{`Min: $${value?.[0] ?? defaultMin}`}</Typography>
        <Typography data-testid="max-value-slider" component="div">{`Max: $${value?.[1] ?? defaultMax}`}</Typography>
      </StyledBox>
    </>
  );
};

const isMinMax = (o: number | number[]): o is [number, number] => Array.isArray(o) && o.length === 2;
