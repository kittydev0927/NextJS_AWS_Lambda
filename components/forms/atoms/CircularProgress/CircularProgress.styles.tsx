import { Box, CircularProgress, styled } from '@mui/material';

export const StyledBox = styled(Box)`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  align-items: center;
  justify-content: center;

  .MuiTypography-body1 {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.lime};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.58;
    letter-spacing: -0.55px;
  }
  &.circular-progress-text {
    display: flex;
  }
`;

export const StyledMuiBox = styled(Box)`
  position: relative;
  display: inline-flex;
`;

export const StyledMuiCircularProgress = styled(CircularProgress)`
  color: ${({ theme }) => theme.colors.lime};
  z-index: 1;
`;

export const StyledMuiCircularProgressBase = styled(CircularProgress)`
  color: ${({ theme }) => theme.colors.haciendaWhite};
`;
