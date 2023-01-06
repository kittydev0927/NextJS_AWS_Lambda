import type { IProfile } from './IProfile';

export const MapProfileFromJson = (json: unknown): IProfile | undefined => {
  if (!json) {
    return;
  }

  if (typeof json !== 'object') {
    throw new Error('Invalid profile object');
  }

  const mapped = new Map(Object.entries(json));
  mapDate(mapped, 'dateOfBirth');
  mapDate(mapped, 'moveInDate');
  mapSet(mapped, 'desiredBedrooms');
  mapSet(mapped, 'preferredLocations');

  return Object.fromEntries(mapped.entries());
};

const mapDate = (map: Map<string, unknown>, key: string) => {
  const value = map.get(key);

  if (!value) {
    return;
  }

  if (typeof value !== 'string') {
    throw new Error('Could not parse ' + key);
  }

  const parsed = new Date(value);
  if (isNaN(parsed.valueOf())) {
    throw new Error(key + ' is invalid date');
  }

  map.set(key, parsed);
};

const mapSet = (map: Map<string, unknown>, key: string) => {
  const value = map.get(key);

  if (!value) {
    return;
  }

  if (!Array.isArray(value)) {
    throw new Error('Could not parse ' + key);
  }

  map.set(key, new Set<number>(value));
};
