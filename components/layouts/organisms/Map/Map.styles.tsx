import { styled } from '@mui/material';

export const StyledMap = styled('div')`
  .marker-btn {
    background: none;
    border: none;
    cursor: pointer;
  }
  .mapboxgl-popup-content {
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    padding: 0;
    box-shadow: none;
  }
  .mpaboxgl-popup-tip {
    border-width: 30px;
  }
  .MuiCard-root {
    border: none;
  }
`;
