import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { theme } from '#styles/styles';

export const StyledForm = styled('form')`
  width: 60vw;
  max-width: 412px;
  align-self: center;
  border-radius: 7px;
  padding: 40px 0;

  #payment-message {
    color: ${theme.colors.roofTerracotta};
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    text-align: center;
  }

  #payment-element {
    margin-bottom: 24px;
  }
`;

export const StyledSubmitButton = styled(Button)`
  font-family: ${theme.fonts.Roboto};
  padding: 12px 16px;
  width: 100%;

  :hover {
    filter: contrast(115%);
  }

  :disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
