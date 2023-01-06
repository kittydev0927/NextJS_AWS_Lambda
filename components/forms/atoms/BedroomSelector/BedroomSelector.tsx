import CloseIcon from '@mui/icons-material/Close';
import { ClickAwayListener } from '@mui/material';
import React, { useState } from 'react';

import { Autocomplete } from '#components/forms/atoms/Autocomplete/Autocomplete';
import { StyledChip } from '#components/forms/atoms/Autocomplete/Autocomplete.styles';
import { Checkbox } from '#components/forms/atoms/Checkbox/Checkbox';
import { useUpdateWidth } from '#utils/useUpdateWidth';

import {
  StyledAutocompleteWrapper,
  StyledList,
  StyledPaper,
  StyledPlusButton,
  StyledTitle,
} from './BedroomSelector.styles';
import type { BedroomSelectorProps } from './BedroomSelector.types';
import { BEDROOM_SELECTOR_OPTIONS } from './BedroomSelector.types';

type IOption = typeof BEDROOM_SELECTOR_OPTIONS[number];

export const BedroomSelector: React.FC<BedroomSelectorProps> = ({ className, value, onSelectedOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const title = 'Select Bedrooms';

  // custom hook to trigger rerender for proper component resizing when a user zooms their screen
  useUpdateWidth();

  return (
    <StyledAutocompleteWrapper open={isOpen}>
      <Autocomplete<IOption>
        className={className}
        onChange={(_e, list) => {
          onSelectedOptions(list);
        }}
        value={value}
        disabled
        open={isOpen}
        placeholder={!value?.length && !isOpen ? title : ''}
        options={BEDROOM_SELECTOR_OPTIONS}
        renderOption={(props, option, { selected }) => (
          <StyledList {...props}>
            <Checkbox label="" checked={selected} />
            {option.label}
          </StyledList>
        )}
        renderTags={(tags, getTagProps) =>
          tags.map((option, index) => (
            <StyledChip deleteIcon={<CloseIcon />} label={option.label} {...getTagProps({ index })} key={index} />
          ))
        }
        InputProps={{
          endAdornment: (
            <StyledPlusButton
              onClick={() => {
                setIsOpen(true);
              }}
              data-testid="ProfileBuilderFirstStep_plusButton"
            />
          ),
        }}
        PaperComponent={({ children }) => (
          <ClickAwayListener onClickAway={() => setIsOpen(false)}>
            <StyledPaper elevation={0}>
              <StyledTitle>{title}</StyledTitle>
              {children}
            </StyledPaper>
          </ClickAwayListener>
        )}
      />
    </StyledAutocompleteWrapper>
  );
};
