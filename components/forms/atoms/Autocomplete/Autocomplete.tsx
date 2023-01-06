import SearchIcon from '@mui/icons-material/Search';
import MUIAutocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

import type { AutocompleteProps } from '#components/forms/atoms/Autocomplete/Autocomplete.types';

import { CustomInput } from './Autocomplete.styles';

export function Autocomplete<T>({
  className,
  disabled,
  filterOptions,
  filterSelectedOptions,
  InputProps,
  loading,
  onChange,
  onInputChange,
  open,
  options,
  PaperComponent,
  placeholder,
  renderOption,
  renderTags,
  value,
  multiple = true,
  popupIcon,
  fullWidth = true,
  error,
  onBlur,
  name,
  getOptionLabel,
}: AutocompleteProps<T>) {
  return (
    <MUIAutocomplete<T, boolean, boolean, boolean>
      autoComplete
      autoHighlight
      className={className}
      disableClearable
      disabled={disabled}
      filterOptions={filterOptions}
      filterSelectedOptions={filterSelectedOptions}
      multiple={multiple}
      getOptionLabel={getOptionLabel}
      onChange={onChange}
      open={open}
      options={options}
      PaperComponent={PaperComponent}
      popupIcon={popupIcon || <SearchIcon />}
      renderInput={params => (
        <CustomInput
          {...params}
          name={name}
          onBlur={onBlur}
          error={error}
          fullWidth={fullWidth}
          placeholder={placeholder}
          onChange={onInputChange}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
            ...InputProps,
          }}
        />
      )}
      renderOption={renderOption}
      renderTags={renderTags}
      value={value}
    />
  );
}
