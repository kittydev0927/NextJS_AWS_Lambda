interface IInquiryBase {
  readonly inquiryId: string;
}

interface IInquiryCompleted {
  readonly status: 'completed' | 'failed';
}

interface IInquiryInProgress {
  readonly sessionToken?: string;
  readonly status: 'error' | 'opened';
}

export type IInquiry = IInquiryBase & (IInquiryCompleted | IInquiryInProgress);
