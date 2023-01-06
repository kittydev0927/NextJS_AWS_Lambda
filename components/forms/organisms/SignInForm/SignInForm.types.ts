import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import type { OktaWidgetProps } from '#components/forms/molecules/OktaWidget/OktaWidget.types';

interface SignInFormProps extends OktaWidgetProps {
  userAuthContent: IUserAuthData;
}

export default SignInFormProps;
