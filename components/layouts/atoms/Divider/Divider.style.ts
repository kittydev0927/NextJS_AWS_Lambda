import { styled } from '@mui/material';
import Divider from '@mui/material/Divider';

//style divider component
export const StyledDivider = styled(Divider)`
  & span {
    padding: 0;
    .customText {
      background: #f4f1eb;
      border-radius: 10px 0 10px 0;
      padding: 10px 15px;
      margin: 0 20px;
      color: #716f70;
      font-weight: 500;
    }
  },
`;
