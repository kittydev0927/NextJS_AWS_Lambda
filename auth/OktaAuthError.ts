import type { IOktaError } from './IOktaError';

export class OktaAuthError extends Error {
  public constructor(public readonly oktaResponse: IOktaError, public readonly statusCode: number) {
    super(oktaResponse.errorSummary);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, OktaAuthError);
    }

    this.name = OktaAuthError.name;
  }
}
