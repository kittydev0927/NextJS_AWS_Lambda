import { Link, styled } from '@mui/material';

export const StyledLink = styled(Link)<{
  width: string;
  disabled?: boolean;
}>`
  display: inline-block;
  height: 65px;
  width: ${({ width }) => width};
  padding: 15px 0;
  box-sizing: border-box;
  box-shadow: 0 19px 40px 0 rgba(0, 0, 0, 0.09);
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  text-transform: none;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 16px;
  color: ${({ disabled, theme }) => (disabled ? theme.colors.accessibleGray : theme.colors.darkGray)};

  :hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledLinkLayout = styled('div')<{
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled('div')<{
  iconBackgroundColor?: string;
}>`
  width: 35px;
  height: 35px;
  margin: 0 15px;
  box-sizing: border-box;
`;
