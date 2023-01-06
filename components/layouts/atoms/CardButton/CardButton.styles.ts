import { styled } from '@mui/material';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'buttonWidth' && prop !== 'iconPosition',
})<{
  variant?: string;
  width?: string;
  buttonWidth?: string;
  iconPosition?: string;
}>`
  width: ${({ width }) => width};
  margin: 0px 0 18px;

  @media (max-width: 894px) {
    width: ${({ buttonWidth }) => buttonWidth || '50px'};
    height: auto;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    padding-left: 8px;
    padding-right: 8px;
    margin: ${({ iconPosition }) => (iconPosition === 'right' ? '10px 0px' : '0px 10px 10px')};
    text-align: left;
    box-shadow: none;
  }
`;

export const StyledIcon = styled('div')`
  margin: 5px 0;
  object-fit: contain;
  margin-left: 5px;

  @media (min-width: 894px) {
    display: none;
  }
`;
