import { styled } from '@mui/material';

export const StyledIconButton = styled('span')`
  ${({ theme }) => theme.breakpoints.up('sm')} {
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 800;
    background-color: transparent;
    width: 40px;
    height: 38px;
    text-align: right;

    &.profile-icon {
      img {
        margin-left: 0;
      }
    }
  }
`;

export const StyledAvatarIcon = styled('div')`
  object-fit: contain;
  min-width: 31px;
  margin-left: 0px;
  display: flex;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 0 0 0px;
    margin-left: 11px;
  }
`;

export const StyledIconButtonCon = styled('div')`
  cursor: pointer;
  display: flex;
  align-items: center;
  p {
    color: ${({ theme }) => theme.colors.white};
  }
`;
