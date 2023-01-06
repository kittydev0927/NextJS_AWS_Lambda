import { styled } from '@mui/material';

import { Paper } from '#components/layouts/organisms/Paper/Paper';

export const StyledStepImage = styled('div')`
  &.processing {
  }
`;

export const StyledSolidBackground = styled('div')`
  background-color: ${({ theme }) => theme.colors.softPeach};
`;

export const StyledPaper = styled(Paper)`
  padding: 50px 32px 64px 32px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 77px 86px 102px 86px;
  }
  .inner-paper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.processing {
    .inner-paper {
      padding: 34px 18px 62px 26px;
      ${({ theme }) => theme.breakpoints.up('md')} {
        padding: 90px 0 120px;
      }
    }
  }
  &.approved {
    .inner-paper {
      padding: 34px 25px 0;

      ${({ theme }) => theme.breakpoints.up('md')} {
        padding: 8px 25px 8px;
      }
    }
  }
  &.submitted {
    .inner-paper {
      padding: 34px 27px 0;
      ${({ theme }) => theme.breakpoints.up('md')} {
        padding: 0;
      }
    }
  }
  &.denied {
    .inner-paper {
      padding: 34px 29px 18px;
      ${({ theme }) => theme.breakpoints.up('md')} {
        padding: 106px 0 64px;
      }
    }
  }
`;
