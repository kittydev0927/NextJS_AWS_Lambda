import { Grid, styled, Typography } from '@mui/material';

import { TitleFolder } from '#components/layouts/molecules/TitleFolder/TitleFolder';

class Measurements {
  public readonly paddingTop: number;
  public readonly paddingBottom: number;
  public readonly paddingHoriz: number;

  public constructor(measurements: {
    readonly innerPaperPadding: number;
    readonly outerPaperPadding: number;
    readonly zeplinPaddingTop: number;
    readonly zeplinPaddingBottom: number;
    readonly zeplinPaddingHoriz?: number;
  }) {
    const paperPadding = measurements.innerPaperPadding + measurements.outerPaperPadding;

    this.paddingTop = measurements.zeplinPaddingTop - paperPadding;
    this.paddingBottom = measurements.zeplinPaddingBottom - paperPadding;
    this.paddingHoriz =
      measurements.zeplinPaddingHoriz === undefined ? 0 : measurements.zeplinPaddingHoriz - paperPadding;
  }
}

const desktop = new Measurements({
  innerPaperPadding: 16,
  outerPaperPadding: 16,
  zeplinPaddingTop: 72,
  zeplinPaddingBottom: 97,
});

const mobile = new Measurements({
  innerPaperPadding: 6,
  outerPaperPadding: 6,
  zeplinPaddingTop: 46,
  zeplinPaddingBottom: 40,
  zeplinPaddingHoriz: 31,
});

export const AccountSettingsWrapper = styled(TitleFolder)`
  max-width: 773px;
  margin: auto;
  padding-top: ${desktop.paddingTop}px;
  padding-bottom: ${desktop.paddingBottom}px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-top: ${mobile.paddingTop}px;
    padding-bottom: ${mobile.paddingBottom}px;
    padding-left: ${mobile.paddingHoriz}px;
    padding-right: ${mobile.paddingHoriz}px;
  }

  & > .TitleFolder_children {
    padding: 0;
  }
`;

export const AccountSettingsItemsWrapper = styled(TitleFolder)`
  max-width: 575px;
  padding-top: 60px;
  margin: auto;
`;

export const PropertyItemWrapper = styled(Grid)`
  &:not(:first-child) {
    margin-top: 26px;
  }
`;

const propertiesListSpacing = 3;

export const PropertiesListWrapper = styled(Grid)`
  margin-top: ${({ theme }) => theme.spacing(propertiesListSpacing)};
`;

export const StyledSignInValue = styled(Typography)`
  font-size: 14px;
  text-align: right;
  color: ${({ theme }) => theme.colors.carbon};
  letter-spacing: 0;

  > a {
    color: ${({ theme }) => theme.colors.carbon};
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    text-align: left;
    margin-top: 5px;
  }
`;
