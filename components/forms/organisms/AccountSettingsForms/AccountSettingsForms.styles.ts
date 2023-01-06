import { styled } from '@mui/material';

import { TitleFolder } from '#components/layouts/molecules/TitleFolder/TitleFolder';

// Justification: Pre-existing code.
/* eslint-disable @typescript-eslint/no-magic-numbers */

export const StyledAccountSettingsFormWrapper = styled(TitleFolder)`
  max-width: 773px;
  width: 100%;
  & > .TitleFolder_children {
    max-width: 413px;
    padding: 0;
    margin: ${({ theme }) => theme.spacing(7)} auto 0 auto;
  }
  .MuiFormControlLabel-root .MuiTypography-root {
    color: ${({ theme }) => theme.colors.darkGray};
    ${({ theme }) => theme.breakpoints.up('sm')} {
      font-size: 16px;
    }
  }
  .interest-area {
    margin: 0;
  }
`;
