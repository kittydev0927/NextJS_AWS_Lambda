import type { IProfile } from './IProfile';

export const MapProfileToJson = (profile: IProfile): Record<string, unknown> => {
  const mapped = new Map(Object.entries(profile));
  mapped.delete('personaAccountId');

  const { desiredBedrooms, preferredLocations } = profile;

  if (desiredBedrooms) {
    mapped.set('desiredBedrooms', Array.from(desiredBedrooms));
  }

  if (preferredLocations) {
    mapped.set('preferredLocations', Array.from(preferredLocations));
  }

  return Object.fromEntries(mapped.entries());
};
