import React from 'react';

import { StyledCheckbox, StyledFormControl, StyledFormGroup, StyledTypography } from './RadioCheckBoxes.styles';
import type { RadioCheckBoxesProps } from './RadioCheckBoxes.types';

export const RadioCheckBoxes: React.FC<RadioCheckBoxesProps> = ({
  title = 'Test Title',
  options,
  row,
  setCheckedIndex,
  checkedIndex,
}) => {
  return (
    <StyledFormControl data-testid="radio-check-boxes">
      <StyledTypography textVariant="h6">{title}</StyledTypography>
      <StyledFormGroup row={row}>
        {options.map((option: string, i: number) => (
          <div key={option}>
            <StyledCheckbox
              label={option}
              checked={checkedIndex === i}
              onClick={() => setCheckedIndex(i)}
              name={option}
            />
          </div>
        ))}
      </StyledFormGroup>
    </StyledFormControl>
  );
};
