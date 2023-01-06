import { Grid } from '@mui/material';
import * as React from 'react';

import { StyledPropertyTitle, StyledPropertyValue } from './PropertyItem.style';
import type { PropertyItemProps } from './PropertyItem.types';

export const PropertyItem: React.FC<PropertyItemProps> = ({ valueUnderTitle, name, value }) => {
  const fullRow = 12;
  const halfRow = 6;
  const columns = valueUnderTitle ? fullRow : halfRow;

  return (
    <>
      <Grid item xs={columns}>
        <StyledPropertyTitle>{name}</StyledPropertyTitle>
      </Grid>
      <Grid item xs={halfRow}>
        <StyledPropertyValue $valueUnderTitle={valueUnderTitle} noWrap>
          {value}
        </StyledPropertyValue>
      </Grid>
    </>
  );
};
