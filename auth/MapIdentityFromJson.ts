import type { IIdentity } from './IIdentity';

export const MapIdentityFromJson = (json: unknown): IIdentity => {
  if (!isRecord(json)) {
    throw new TypeError('Could not parse identity');
  }

  const { personaAccountId } = json;
  if (typeof personaAccountId !== 'string') {
    throw new TypeError('Could not resolve persona account id');
  }

  return { personaAccountId };
};

const isRecord = (o: unknown): o is Record<string, unknown> => Boolean(o) && typeof o === 'object';
