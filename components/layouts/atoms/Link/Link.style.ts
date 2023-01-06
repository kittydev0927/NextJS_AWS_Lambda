import { styled } from '@mui/material';
import MUILink from '@mui/material/Link';

import type { LinkProps } from './Link.types';

export const StyledDiv = styled('div', { shouldForwardProp: prop => prop !== 'fullWidth' })<LinkProps>`
  width: ${props => (props.fullWidth ? '100%' : 'unset')};
`;

export const StyledMUILink = styled(MUILink, {
  shouldForwardProp: prop => prop !== 'alignArrow',
})<LinkProps>`
  line-height: 1.7;
  display: inline-flex;
  align-items: center;
  justify-content: ${props => (props.alignArrow === 'end' ? 'space-between' : 'flex-start')};
  width: ${props => (props.alignArrow === 'end' ? '100%' : 'unset')};
  cursor: pointer;
  span {
    display: block;
  }
`;

export const StyledArrowIcons = styled('span')<LinkProps>`
  margin-left: 5px;
  padding-top: 3px;
`;
