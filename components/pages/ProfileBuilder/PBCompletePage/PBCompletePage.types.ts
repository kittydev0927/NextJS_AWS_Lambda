import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';
import type { TypographyProps } from '#components/layouts/atoms/Typography/Typography.types';

export interface IPBLocationsPageProps extends ILoginPageContentQuery {
  maxwidth?: number;
  mediaImgHeight?: number;
  mediaElevation?: number;
  headingStyles?: TypographyProps['sx'];
  buttonVariant?: 'outlined' | 'text' | 'primary' | 'secondary' | 'inactive';
  buttonSize?: 'small' | 'medium' | 'large';
}
