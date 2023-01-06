import { styled } from '@mui/material';

import { Modal } from '#components/forms/molecules/Modal/Modal';

export const StyledModal = styled(Modal)`
  .MuiPaper-root {
    max-width: 312px;
    background-color: ${({ theme }) => theme.colors.isabelline};
  }
  .MuiPaper-root > div {
    padding: 38px 31px 82px 31px;
    .MuiSvgIcon-root {
      color: ${({ theme }) => theme.colors.darkGray};
    }
  }
`;

export const StyledHeader = styled('h1')`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 0 0 22px 0;
  line-height: 0.92;
`;
