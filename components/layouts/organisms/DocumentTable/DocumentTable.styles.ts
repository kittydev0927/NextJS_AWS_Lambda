import { Grid, styled } from '@mui/material';

export const StyledHeader = styled('div')`
  width: 100%;
  height: 76px;
  font-family: ${({ theme }) => theme.fonts.Raleway};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  line-height: 3.8;
  letter-spacing: 0.02px;
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 28px;
    line-height: 2.71;
    margin: 0 0 27px 0;
  }
`;
export const StyledRowHeader = styled(Grid)`
  width: 100%;
  height: 70px;
  padding: 26px 41px 25px 72px;
  border-radius: ${({ theme }) => theme.borderRadius.primary} ${({ theme }) => theme.borderRadius.primary} 0 0;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  box-shadow: 0 19px 40px 0 rgba(0, 0, 0, 0.09);
  background-color: ${({ theme }) => theme.colors.white};
  .header-cell1 {
    width: 34%;
    font-family: ${({ theme }) => theme.fonts.Raleway};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.darkGray};
  }
  .header-cell2 {
    width: 17%;
    font-family: ${({ theme }) => theme.fonts.Raleway};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.darkGray};
  }
  .header-cell3 {
    width: 17%;
    font-family: ${({ theme }) => theme.fonts.Raleway};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.darkGray};
  }
  .header-cell4 {
    width: 17%;
    font-family: ${({ theme }) => theme.fonts.Raleway};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.darkGray};
  }
  .header-cell5 {
    width: 15%;
    font-family: ${({ theme }) => theme.fonts.Raleway};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.darkGray};
    text-align: center;
  }
  .sort-icon {
    width: 8px;
    height: 13px;
    margin-left: 8px;
    object-fit: contain;
    cursor: pointer;
  }
`;

export const StyledRowWrapper = styled('div')`
  padding: 26px 41px 25px 72px;

  div.MuiGrid-container:last-child {
    border-bottom-width: 0px;
  }
`;
