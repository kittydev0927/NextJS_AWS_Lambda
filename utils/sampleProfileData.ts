import type { IProfile } from '#auth/IProfile';

const portalId = 'aba5505b-6c40-49fd-9080-1bbd37280efc';

export const profileComplete: IProfile = {
  // Justification: explicit epoch date value
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  bankruptcy: new Date(389404800 * 1000),
  currentAddress: {
    country: 'USA',
    extendedAddress: '1A',
    locality: 'Atlanta',
    region: 'GA',
    postalCode: '30309',
    streetAddress: '3948 Gresham Park Blvd',
  },
  eviction: false,
  felony: false,
  housingChoice: false,
  personaAccountId: '1234',
  plaidUserToken: 'txn_1234',
  portalId: portalId,
};
