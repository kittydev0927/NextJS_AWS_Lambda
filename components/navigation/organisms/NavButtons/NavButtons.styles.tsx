import { Button, styled } from '@mui/material';

export const StyledButtonsWrapper = styled('div')`
  width: 100%;
  max-width: 412px;
  margin: 50px auto 10px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-top: auto;
  }
`;

export const StyledButtonContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
  height: 70%;
  flex-direction: column-reverse;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    line-height: 17px;
    flex-direction: row;
    width: 100%;
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    .button-previous {
      margin-bottom: 10px;
    }
  }
`;

export const StyledButtonComponent = styled('div')`
  width: 100%;
  margin-bottom: 8px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 45%;
  }
  & button {
    width: 100%;
    max-width: 190px;
    text-transform: none;
    ${({ theme }) => theme.breakpoints.down('sm')} {
      max-width: 100%;
    }
  }
`;

export const StyledCancelComponent = styled('div')`
  text-align: center;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.jade};
  .cancel {
    cursor: pointer;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 700;
    color: inherit;
  }
  .cancel:hover {
    text-decoration: underline;
  }
  & button {
    width: 100%;
    max-width: 268px;
    ${({ theme }) => theme.breakpoints.down('sm')} {
      max-width: 100%;
    }
  }
`;

export const StyledPreviousButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'isHidden',
})<{ isHidden?: boolean }>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
`;
