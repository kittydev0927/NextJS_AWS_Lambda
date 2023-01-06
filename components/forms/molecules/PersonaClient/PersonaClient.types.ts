import type { IInquiry } from '#auth/IInquiry';

export interface IPersonaClientProps {
  readonly inquiry?: IInquiry;
  // Intent here is that whatever is using the PersonaClient (which I guess
  // will be something in the application flow) should provide a setInquiry
  // function that updates the specific applicant with the results of the
  // inquiry. Meanwhile, the PersonaClient can handle saving the actual
  // BackgroundInquiry entity, without needing to know how this _specific_
  // inquiry is going to be used.
  readonly setInquiry?: (updatedInquiry: IInquiry) => Promise<void> | void;
}
