export interface IOktaError {
  readonly errorCode: string;
  readonly errorSummary: string;
  readonly errorLink: string;
  readonly errorId: string;
  readonly errorCauses?: readonly {
    readonly errorSummary?: string;
  }[];
}
