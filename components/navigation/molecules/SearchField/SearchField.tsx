import Image from 'next/image';
import React from 'react';

import SearchIcon from '#public/search-icon.svg';

import { Search, SearchIconWrapper, StyledInputBase, StyledSearchIcon } from './SearchField.styles';
import type { SearchFieldProps } from './SearchField.types';

export const SearchField: React.FC<SearchFieldProps> = ({
  children,
  disabled,
  placeholder,
  type,
  readOnly,
  ...props
}) => {
  return (
    <div data-testid="SearchField-Container" {...props}>
      <Search>
        <SearchIconWrapper>
          <StyledSearchIcon>
            <Image src={SearchIcon as string} width={24} height={24} alt="Search" />
          </StyledSearchIcon>
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          readOnly={readOnly}
          inputProps={{ 'aria-label': 'search' }}
        />
        {children}
      </Search>
    </div>
  );
};
