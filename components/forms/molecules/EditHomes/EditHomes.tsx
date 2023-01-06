import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import React, { useContext, useRef, useState } from 'react';

import { UserContext } from '#auth/UserContext';

import { ApplyButton, EditHomesButton, StyledContainer, StyledMenu, StyledRadioGroup } from './EditHomes.styles';
import type { EditHomesProps } from './EditHomes.types';

export const EditHomes: React.FC<EditHomesProps> = ({
  buttonText,
  children,
  disabled,
  disableRipple,
  variant = 'primary',
  ...props
}) => {
  const editButtonRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Remove Unavailable Homes');
  const portalUser = useContext(UserContext);

  const handleClick = () => setOpen(!open);

  const handleClose = async () => {
    setOpen(false);

    if (value === 'Remove all Homes') {
      await portalUser?.removeSavedHomes('all');
    }

    if (value === 'Remove Unavailable Homes') {
      await portalUser?.removeSavedHomes('unavailable');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <StyledContainer data-testid="edit-homes-container" {...props}>
      <EditHomesButton
        aria-controls="components-forms-molecules-EditHomes-menu"
        aria-expanded={open}
        aria-haspopup="true"
        data-testid="edit-homes-button"
        disabled={disabled}
        disableRipple={disableRipple}
        id="components-forms-molecules-EditHomes-button"
        onClick={handleClick}
        ref={editButtonRef}
        variant={variant}
      >
        {buttonText ?? null}{' '}
      </EditHomesButton>
      <StyledMenu
        anchorEl={editButtonRef.current}
        id="components-forms-molecules-EditHomes-menu"
        MenuListProps={{ 'aria-labelledby': 'components-forms-molecules-EditHomes-button' }}
        onClose={() => setOpen(false)}
        open={open}
      >
        <StyledRadioGroup
          aria-labelledby="components-forms-molecules-EditHomes-options"
          id="components-forms-molecules-EditHomes-options"
          onChange={handleChange}
          value={value}
        >
          <FormControlLabel value="Remove Unavailable Homes" control={<Radio />} label="Remove Unavailable Homes" />
          <FormControlLabel value="Remove all Homes" control={<Radio />} label="Remove all Homes" />
        </StyledRadioGroup>
        <ApplyButton onClick={() => void handleClose()} data-testid="apply-button">
          Apply Update
        </ApplyButton>
        {children}
      </StyledMenu>
    </StyledContainer>
  );
};
