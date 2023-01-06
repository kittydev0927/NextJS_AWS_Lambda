import type { IProfile } from '#auth/IProfile';

export const CalculateProfileCompletion = (
  profile?: IProfile,
): {
  readonly completed: readonly boolean[];
  readonly next: number;
  readonly nextPage: string;
} => {
  const steps = [locationComplete, moveInDateComplete, bedroomsComplete, monthlyPriceComplete];
  const completed = steps.map(step => step(profile));
  const next = completed.indexOf(false);
  const pageNames = ['home-location', 'estimated-move-in-date', 'number-of-bedrooms', 'monthly-rent-range'];
  const nextPage = pageNames[next];

  return { completed, next, nextPage };
};

function locationComplete(profile?: IProfile) {
  return (profile?.preferredLocations?.size ?? 0) > 0;
}

function moveInDateComplete(profile?: IProfile) {
  return profile?.moveInDate instanceof Date;
}

function bedroomsComplete(profile?: IProfile) {
  return (profile?.desiredBedrooms?.size ?? 0) > 0;
}

function monthlyPriceComplete(profile?: IProfile) {
  return typeof profile?.minRent === 'number' || typeof profile?.maxRent === 'number';
}
