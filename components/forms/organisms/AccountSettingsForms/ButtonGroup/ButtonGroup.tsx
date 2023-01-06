import router from 'next/router';
import React from 'react';

import { StyledCancelButton, StyledSaveChangesButton } from './ButtonGroup.style';
import type { ButtonGroupProps } from './ButtonGroup.types';

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ isValid, loading }) => {
  const handleCancel = () => void router.push('/settings');

  return (
    <>
      <StyledSaveChangesButton disabled={!isValid} loading={loading} type="submit" variant="primary" fullWidth>
        Save Changes
      </StyledSaveChangesButton>

      <StyledCancelButton variant="secondary" fullWidth onClick={handleCancel}>
        Cancel
      </StyledCancelButton>
    </>
  );
};
