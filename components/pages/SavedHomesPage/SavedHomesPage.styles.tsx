import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { EditHomes } from '#components/forms/molecules/EditHomes/EditHomes';

export const StyledSolidBackground = styled('div')`
  background-color: ${({ theme }) => theme.colors.softPeach};
  padding-bottom: 90px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 40px 60px 180px;
  }
  .sort-filter-option {
    .select-option {
      ${({ theme }) => theme.breakpoints.up('md')} {
        max-width: 311px;
      }
    }
  }
`;

export const StyledContentCon = styled('div')`
  max-width: 1300px;
  margin: 0 auto;
`;

export const StyledSavedControlsCon = styled('div')`
  display: flex;
  justify-content: flex-end;
  // custom media query used here to handle non-theme breakpoint
  @media screen and (min-width: 350px) {
    transform: translateY(52px);
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    transform: unset;
  }
`;

export const StyledEditHomes = styled(EditHomes)`
  button {
    width: unset;
  }
  margin-right: 0;
`;

export const StyledTrashButton = styled(Button)`
  min-width: 38px;
  padding: 6px 0 6px;
`;
