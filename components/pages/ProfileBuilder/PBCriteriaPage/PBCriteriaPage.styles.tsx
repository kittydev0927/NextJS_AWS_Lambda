import { styled } from '@mui/material';

export const StyledCriteriaSelector = styled('div')`
  .criter-selector-option {
    margin-bottom: 10px;
  }
`;

export const StyledMainRight = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const StyledTopRight = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex;
  height: fit-content;
  margin-bottom: 45px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    justify-content: flex-start;
    margin-bottom: 0;
  }
`;
