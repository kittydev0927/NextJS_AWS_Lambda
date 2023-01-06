import { Grid, styled } from '@mui/material';

import { theme } from '#styles/styles';

export const StyledGridWrapper = styled(Grid)`
  height: 90px;
  align-items: center;
  border-bottom: solid 1px ${theme.colors.lightGray};
  .cell1 {
    width: 34%;
    font-size: 16px;
    font-weight: ${theme.fontWeight.semiBold};
    color: ${theme.colors.carbon};
  }
  .cell3 {
    width: 17%;
    font-size: 14px;
    color: ${theme.colors.carbon};
  }
  .cell4 {
    width: 17%;
    font-size: 14px;
  }
  .cell6 {
    width: 17%;
    font-size: 12px;
    font-weight: ${theme.fontWeight.medium};
    color: ${theme.colors.darkGray};
    display: flex;
    .chip {
      width: fit-content;
      display: flex;
      padding: 5px 15px 6px 20px;
      border-radius: ${theme.borderRadius.primary};
      background-color: #f4f1eb;
    }
  }
  .cell7 {
    width: 15%;
    text-align: center;
    .MuiSvgIcon-root {
      width: 19px;
      height: 20px;
      background-color: ${theme.colors.darkGray};
    }
  }
  .avatar {
    font-size: 12px;
    font-weight: ${theme.fontWeight.medium};
    text-align: center;
    color: ${theme.colors.carbon};
    width: 30px;
    height: 30px;
  }
`;
export const StyledGridMobileWrapper = styled(Grid)`
  padding: 17px 0.8px 20px 0;
  border-bottom: solid 1px ${theme.colors.lightGray};
  .cell1 {
    width: 80%;
    padding-left: 20px;
    .chip {
      font-size: 12px;
      font-weight: ${theme.fontWeight.medium};
      color: ${theme.colors.darkGray};
      width: fit-content;
      align-items: center;
      display: flex;
      padding: 5px 15px 6px 20px;
      border-radius: ${theme.borderRadius.primary};
      background-color: #f4f1eb;
      margin-top: 5px;
    }
    .doc-container {
      align-items: self-start;
      flex-direction: column;
      .document {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 7px;
        font-size: 16px;
        font-weight: 600;
        color: ${theme.colors.carbon};
        max-width: 180px;
      }
      .detail {
        padding-top: 1px;
        margin-bottom: 7px;
        font-size: 9px;
        color: ${theme.colors.carbon};
      }
      .name {
        margin-bottom: 10px;
        font-size: 12px;
        line-height: 1.5;
        color: ${theme.colors.black};
      }
      .date {
        margin-bottom: 10px;
        padding-left: 7px;
        font-size: 9px;
        color: ${theme.colors.carbon};
      }
    }
  }
  .cell2 {
    width: 10%;
    padding-top: 4px;
  }
  .cell3 {
    width: 10%;
  }
`;
