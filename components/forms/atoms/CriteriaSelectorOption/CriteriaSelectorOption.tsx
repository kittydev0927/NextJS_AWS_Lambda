import CheckIcon from '@mui/icons-material/Check';
import React, { useState } from 'react';

import { StyledCheckMarkContainer, StyledContainer, StyledText } from './CriteriaSelectorOption.styles';
import type { CriteriaSelectorProps } from './CriteriaSelectorOption.types';

export const CriteriaSelector: React.FC<CriteriaSelectorProps> = ({
  text = 'Placeholder Text',
  startingState = true,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(startingState);

  return (
    <StyledContainer
      onClick={() => setIsSelected(!isSelected)}
      isSelected={isSelected}
      data-testid="criteria-selector-option"
      className="criter-selector-option"
    >
      <StyledText>{text}</StyledText>
      <StyledCheckMarkContainer data-testid="check-mark">
        {isSelected && <CheckIcon fontSize="medium" />}
      </StyledCheckMarkContainer>
    </StyledContainer>
  );
};
