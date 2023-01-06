import { MenuItem } from '@mui/material';
import React from 'react';

import { StyledSelect } from '#components/forms/atoms/Select/Select.style';
import type { SelectProps } from '#components/forms/atoms/Select/Select.types';
import { SelectIcon } from '#components/forms/atoms/Select/SelectIcon';

export const Select: React.FC<SelectProps> = ({ options, placeholder = 'Select', ...props }) => {
  const renderValue = (selected: unknown): React.ReactNode => {
    if (!selected) {
      return <>{placeholder}</>;
    }
    return <>{selected}</>;
  };

  return (
    <StyledSelect displayEmpty renderValue={renderValue} data-testid="select" IconComponent={SelectIcon} {...props}>
      {options?.map((item, index) => (
        <MenuItem data-testid={`select-item-${index}`} key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};
