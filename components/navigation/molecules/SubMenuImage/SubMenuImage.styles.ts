import { styled } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Link } from '#components/layouts/atoms/Link/Link';
import type { PaperProps } from '#components/layouts/organisms/Paper/Paper.types';
const GRADIENT_BG = 'radial-gradient(circle at 8% 97%, #fcf4f4, #fff 43%) no-repeat';

export const StyledPaper = styled('div')<PaperProps>`
  width: 568px;
  min-width: 568px;
  min-height: 238px;
  margin: 0px 15px 33px 47px;
  padding: 21px 0 0 46px;
  border-radius: 15px;
  &.outer-paper {
    ${props =>
      props.outerTheme === 'gradient' ? `background: ${GRADIENT_BG}` : `background: ${props.theme.colors.white}`};
  }

  .inner-paper {
    ${props =>
      props.innerTheme === 'gradient' ? `background: ${GRADIENT_BG}` : `background: ${props.theme.colors.white}`};
  }
`;

export const StyledAboutPaper = styled('div')<PaperProps>`
  width: 568px;
  min-width: 568px;
  min-height: 238px;
  margin: 0px 15px 33px 47px;
  padding: 21px 0 0 46px;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-color: ${({ theme }) => theme.colors.selectiveYellow};
`;

export const StyledColumn = styled('div')`
  margin-right: 227px;
  width: 568px;
  min-height: 238px;
  margin: 60px 10px 10px 0px;
  display: inline-block;
  text-align: left;
`;

export const StyledOuterStack = styled(Stack)`
  position: absolute;
`;

export const StyledInnerStack = styled(Stack)`
  max-width: 216px;
  position: absolute;
  bottom: -203px;
`;

export const StyledAboutOuterStack = styled(Stack)`
  position: absolute;
`;

export const StyledAboutInnerStack = styled(Stack)`
  max-width: 216px;
  position: absolute;
  bottom: -183px;
`;

export const StyledImageWrapper = styled('div')`
  position: relative;
`;

export const StyledImage = styled('div')`
  width: 324px;
  height: 196px;
  margin: 0;
  object-fit: contain;
  position: absolute;
  bottom: -238px;
  left: 245px;
`;

export const StyledAboutImage = styled('div')`
  width: 372px;
  height: 217px;
  margin: 0;
  object-fit: contain;
  position: absolute;
  bottom: -238px;
  left: 196px;
`;

export const StyledCardLabel = styled(Typography)`
  width: 212px;
  height: 68px;
  margin: 0 0 5px;
  font-size: 26px;
  font-weight: 800;
`;

export const StyledCardDesc = styled(Typography)`
  width: 179px;
  height: 44px;
  margin: 5px 0px 13px 2px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.57;
  color: #000;
`;

export const StyledLinkWrapper = styled('div')`
  div > div {
    margin-top: -13px;
  }
`;

export const StyledCardLink = styled(Link)`
  font-weight: bold;
  width: auto;
  height: 22px;
  margin: 13px 8px 0 2px;
  font-size: 14px !important;
  line-height: 1.57;
`;
