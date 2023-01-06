import { styled } from '@mui/material';
import Button from '@mui/material/Button';

export const StyledHelpButton = styled(Button)`
  min-width: unset;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: #ffffff;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  padding: 0;
  text-transform: none;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 11px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGreen};
  }
  .MuiTouchRipple-root {
    width: 50px;
  }
`;

export const StyledImg = styled('div')`
  max-width: 24px;
  padding-top: 4px;
  height: 50%;
`;
