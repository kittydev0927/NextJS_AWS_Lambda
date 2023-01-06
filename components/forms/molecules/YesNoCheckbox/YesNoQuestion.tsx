import { FormControl, FormGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { Checkbox } from '#components/forms/atoms/Checkbox/Checkbox';

import { StyledTypography } from './YesNoQuestion.styles';
import type { IYesNoQuestionProps } from './YesNoQuestion.types';

export const YesNoQuestion: React.FC<IYesNoQuestionProps> = ({ questionText, defaultAnswer, setPageFilledContext }) => {
  const [value, setValue] = useState<'yes' | 'no' | null>(defaultAnswer);

  useEffect(() => {
    if (value && setPageFilledContext) {
      setPageFilledContext(true);
    }
  }, [setPageFilledContext, value]);

  return (
    <FormControl>
      <StyledTypography textVariant="h6">{questionText}</StyledTypography>
      <FormGroup>
        <Checkbox label="Yes" name="yes" value="yes" checked={value === 'yes'} onClick={() => setValue('yes')} />
        <Checkbox label="No" value="no" name="no" checked={value === 'no'} onClick={() => setValue('no')} />
      </FormGroup>
    </FormControl>
  );
};
