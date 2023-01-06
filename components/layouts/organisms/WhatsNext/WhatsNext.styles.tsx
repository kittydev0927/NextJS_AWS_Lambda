import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { Divider } from '#components/layouts/atoms/Divider/Divider';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledWhatsNextContainer = styled('div')`
  padding-left: 39px;
  padding-right: 22px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 10px 0 0 0;
  }
`;

export const StyledWhatsNextTitle = styled(Typography)`
  font-size: 22px;
`;

export const StyledWhatsNextSubtitle = styled('div')`
  margin-top: 20px;
  font-size: 22px;
  line-height: 1.27;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 18px;
    line-height: 1.22;
  }
`;

export const StyledWhatsNextList = styled('ul')`
  padding-left: 0;
  list-style-position: inside;
`;

export const StyledWhatsNextListItem = styled('li')`
  list-style: none;
  display: list-item;
  margin-left: 13px;
  line-height: 1.33;
  font-size: 18px;

  ::before {
    content: '';
    margin-top: 0.4em;
    margin-left: -0.5em;
    border: ${({ theme }) => `0.1em ${theme.colors.black} solid !important`};
    border-radius: 50%;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.black};
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    line-height: 1.22;
  }
`;

export const StyledWhatsNextFooter = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1em;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column-reverse;
    margin-top: unset;
  }
`;

export const StyledWhatsNextDivider = styled(Divider)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: none;
  }
`;

export const StyledWhatsNextButton = styled(Button)`
  min-width: 238px;
  display: inline-block;
  margin: auto 0;
  box-shadow: none;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: block;
    margin: 10px auto 35px;
  }
`;

export const StyledWhatsNextParagraph = styled('span')`
  font-size: 16px;
  display: inline-block;
  margin-right: 45px;
  line-height: 1.27;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: block;
    width: 100%;
    font-size: 14px;
    margin-right: unset;
    line-height: 1.4;
  }
`;
