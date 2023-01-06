import type { OktaWidgetProps } from '#components/forms/molecules/OktaWidget/OktaWidget.types';
import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';
import type { TypographyProps } from '#components/layouts/atoms/Typography/Typography.types';

type paperTheme = 'plain' | 'gradient';

export interface SSOLandingPageProps extends OktaWidgetProps, ILoginPageContentQuery {
  maxwidth?: number;
  mediaImgHeight?: number;
  mediaElevation?: number;
  innerTheme?: paperTheme;
  outerTheme?: paperTheme;
  headingStyles?: TypographyProps['sx'];
  buttonVariant?: 'outlined' | 'text' | 'primary' | 'secondary' | 'inactive';
  buttonSize?: 'small' | 'medium' | 'large';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}
