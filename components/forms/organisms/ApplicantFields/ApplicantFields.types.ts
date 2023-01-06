import type { IProfile } from '#auth/IProfile';

export interface ApplicantFieldsProps {
  profile?: IProfile;
  setNextDisabled?: React.Dispatch<React.SetStateAction<boolean>>;
}
