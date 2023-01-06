import { Box, Menu, RadioGroup, styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';

import type { EditHomesProps } from './EditHomes.types';

export const EditHomesButton = styled(Button)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.darkGray};
  text-decoration: underline;
  text-transform: capitalize;
  width: 185px;
  &:hover {
    background: none;
    text-decoration: underline;
  }
`;

export const ApplyButton = styled(Button)`
  width: 163px;
  height: 35px;
  padding: 0 13px 0 11px;
  object-fit: contain;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.teal};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.57;
  letter-spacing: 0.32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
  margin: auto;
  display: block;
  margin-top: 12px;
  &:hover {
    background: ${({ theme }) => theme.colors.teal};
  }
`;

export const StyledMenu = styled(Menu)`
  backdrop-filter: none;
  background-color: unset;
  .MuiPaper-root {
    width: 185px;
    box-shadow: none;
    background: none;
    margin-top: -12px;
    display: flex;
    justify-content: center;
    padding-bottom: 2px;
  }
  .MuiPaper-root:before {
    content: '';
    position: absolute;
    left: calc(50% - 15px);
    z-index: 1;
    border: solid 8px transparent;
    border-right-color: ${({ theme }) => theme.colors.white};
    transform: rotate(90deg);
  }
  .MuiMenu-list {
    border-radius: 8px;
    box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 11%);
    background: ${({ theme }) => theme.colors.white};
    margin-top: 16px;
    padding-top: 12px;
    width: 180px;
  }
`;

export const StyledRadioGroup = styled(RadioGroup)`
  .MuiFormControlLabel-root {
    margin: 0 0 5px;
    .MuiRadio-root {
      padding: 0 0 0 13px;
      color: ${({ theme }) => theme.colors.shipCove};
    }
    .Mui-checked span svg:nth-child(2) {
      color: ${({ theme }) => theme.colors.millbrook};
    }
    .MuiFormControlLabel-label {
      margin: 1px 13px 0px 12px;
      font-size: 12px;
      line-height: normal;
      color: ${({ theme }) => theme.colors.mondo};
    }
  }
`;

export const StyledContainer = styled(Box)<EditHomesProps>`
  display: flex;
  margin-right: 16px;
`;
