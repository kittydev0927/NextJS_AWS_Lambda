import type { IOktaError } from './IOktaError';

export const isOktaError = (o: unknown): o is IOktaError => {
  if (o && typeof o === 'object') {
    const r = o as Record<string, unknown>;
    return typeof r.errorSummary === 'string';
  }

  return false;
};
