// Justification: Test data.
/* eslint-disable max-lines */

import type { IProfile } from '#auth/IProfile';
import type { IApplication } from '#models/IApplication';

import type { ICalculateApplicationCompletionArgs } from './ICalculateApplicationCompletionArgs';

const applicationDate = new Date('1982-05-05');
const applicationId = 'e4692271-5b1e-4e55-9f32-daf4a5cff424';
const coApplicantId = 'bb0d759e-ba97-4c1c-a915-4c21a373822c';
const primaryApplicantId = 'aba5505b-6c40-49fd-9080-1bbd37280efc';
const propertyId = '807d5789-b7a2-4b9d-8731-4bf6e14124fa';
const term = 12;

// Justification: explicit epoch date value
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const startDate = new Date(389404800 * 1000);

export const applicationCancelled: IApplication = {
  applicationId: applicationId,
  applicants: [
    {
      agent: {},
      applicantId: primaryApplicantId,
      applicationId: applicationId,
      state: 'in progress',
      occupant: [
        {
          dateOfBirth: new Date('1982-05-05'),
          firstName: 'Porter',
          lastName: 'Dog',
          middleName: 'the',
        },
      ],
      pets: [],
      terms: {
        acceptedOn: startDate,
        version: '1',
      },
    },
  ],
  created: applicationDate,
  primaryApplicantId: primaryApplicantId,
  propertyId: propertyId,
  state: 'cancelled',
};

// TODO: check this fixture
export const applicationComplete: IApplication = {
  applicationId: applicationId,
  applicants: [
    {
      applicantId: primaryApplicantId,
      applicationId: applicationId,
      agent: {},
      occupant: [
        {
          dateOfBirth: new Date('1982-05-05'),
          firstName: 'Porter',
          lastName: 'Dog',
          middleName: 'the',
        },
      ],
      pets: [
        {
          petName: 'Porter',
          petType: 'dog',
        },
      ],
      state: 'complete',
      terms: {
        acceptedOn: startDate,
        version: '1',
      },
      vehicle: [],
    },
    {
      applicantId: coApplicantId,
      applicationId: applicationId,
      occupant: [],
      pets: [],
      state: 'complete',
      terms: {
        acceptedOn: startDate,
        version: '1',
      },
      vehicle: [],
    },
  ],
  applicantsInvited: true,
  created: applicationDate,
  primaryApplicantId: primaryApplicantId,
  propertyId: propertyId,
  startDate: startDate,
  state: 'draft',
  stripePaymentIntent: 'txn_1234',
  term: term,
};

export const applicationSubmitted: IApplication = {
  applicationId: applicationId,
  applicants: [
    {
      applicantId: primaryApplicantId,
      applicationId: applicationId,
      agent: {},
      occupant: [
        {
          dateOfBirth: new Date('1982-05-05'),
          firstName: 'Porter',
          lastName: 'Dog',
          middleName: 'the',
        },
      ],
      pets: [],
      state: 'complete',
      terms: {
        acceptedOn: startDate,
        version: '1',
      },
      vehicle: [],
    },
    {
      applicantId: coApplicantId,
      applicationId: applicationId,
      occupant: [],
      pets: [],
      state: 'complete',
      terms: {
        acceptedOn: startDate,
        version: '1',
      },
      vehicle: [],
    },
  ],
  created: applicationDate,
  primaryApplicantId: primaryApplicantId,
  propertyId: propertyId,
  state: 'submitted',
};

export const applicationMissingValidPrimaryApplicant: IApplication = {
  applicationId: applicationId,
  applicants: [
    {
      applicantId: coApplicantId,
      applicationId: applicationId,
      agent: {},
      occupant: [
        {
          dateOfBirth: new Date('1982-05-05'),
          firstName: 'Porter',
          lastName: 'Dog',
          middleName: 'the',
        },
      ],
      pets: [],
      state: 'complete',
      terms: {
        acceptedOn: startDate,
        version: '1',
      },
    },
  ],
  created: applicationDate,
  primaryApplicantId: primaryApplicantId,
  propertyId: propertyId,
  state: 'draft',
};

export const applicationEmptyPrimaryApplicantId: IApplication = {
  applicationId: applicationId,
  applicants: [],
  created: applicationDate,
  primaryApplicantId: '',
  propertyId: propertyId,
  state: 'draft',
};

export const profileComplete: IProfile = {
  bankruptcy: false,
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
  portalId: primaryApplicantId,
};

export const step0CompleteArgs: ICalculateApplicationCompletionArgs = {
  application: undefined,
  profile: profileComplete,
};

export const step1CompleteArgs: ICalculateApplicationCompletionArgs = {
  application: {
    applicationId: applicationId,
    applicants: [
      {
        applicantId: primaryApplicantId,
        applicationId: applicationId,
        state: 'in progress',
      },
    ],
    applicantsInvited: false,
    created: applicationDate,
    primaryApplicantId: primaryApplicantId,
    propertyId: propertyId,
    state: 'draft',
  },
  profile: {
    portalId: primaryApplicantId,
  },
};

export const step2CompleteArgs: ICalculateApplicationCompletionArgs = {
  application: {
    applicationId: applicationId,
    applicants: [
      {
        applicantId: primaryApplicantId,
        applicationId: applicationId,
        state: 'in progress',
      },
    ],
    applicantsInvited: false,
    created: applicationDate,
    primaryApplicantId: primaryApplicantId,
    propertyId: propertyId,
    state: 'draft',
  },
  profile: {
    bankruptcy: false,
    eviction: false,
    felony: false,
    portalId: primaryApplicantId,
  },
};

export const step3CompleteArgs: ICalculateApplicationCompletionArgs = {
  application: {
    applicationId: applicationId,
    applicants: [
      {
        applicantId: primaryApplicantId,
        applicationId: applicationId,
        state: 'in progress',
        terms: {
          acceptedOn: startDate,
          version: '1',
        },
      },
    ],
    applicantsInvited: false,
    created: applicationDate,
    primaryApplicantId: primaryApplicantId,
    propertyId: propertyId,
    startDate: startDate,
    state: 'draft',
    term: term,
  },
  profile: {
    bankruptcy: false,
    eviction: false,
    felony: false,
    portalId: primaryApplicantId,
  },
};

export const step4CompleteArgs: ICalculateApplicationCompletionArgs = {
  application: {
    applicationId: applicationId,
    applicants: [
      {
        applicantId: primaryApplicantId,
        applicationId: applicationId,
        state: 'in progress',
        terms: {
          acceptedOn: startDate,
          version: '1',
        },
      },
    ],
    applicantsInvited: false,
    created: applicationDate,
    primaryApplicantId: primaryApplicantId,
    propertyId: propertyId,
    startDate: startDate,
    state: 'draft',
    term: term,
  },
  profile: {
    bankruptcy: false,
    eviction: false,
    felony: false,
    personaAccountId: '1234',
    portalId: primaryApplicantId,
  },
};

export const step5CompleteArgs: ICalculateApplicationCompletionArgs = {
  application: {
    applicationId: applicationId,
    applicants: [
      {
        applicantId: primaryApplicantId,
        applicationId: applicationId,
        state: 'in progress',
        terms: {
          acceptedOn: startDate,
          version: '1',
        },
      },
    ],
    applicantsInvited: false,
    created: applicationDate,
    primaryApplicantId: primaryApplicantId,
    propertyId: propertyId,
    startDate: startDate,
    state: 'draft',
    term: term,
  },
  profile: {
    bankruptcy: false,
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
    personaAccountId: '1234',
    portalId: primaryApplicantId,
  },
};

export const step6CompleteArgs: ICalculateApplicationCompletionArgs = {
  application: {
    applicationId: applicationId,
    applicants: [
      {
        applicantId: primaryApplicantId,
        applicationId: applicationId,
        state: 'in progress',
        occupant: [
          {
            dateOfBirth: new Date('1982-05-05'),
            firstName: 'Porter',
            lastName: 'Dog',
            middleName: 'the',
          },
        ],
        terms: {
          acceptedOn: startDate,
          version: '1',
        },
      },
    ],
    applicantsInvited: false,
    created: applicationDate,
    primaryApplicantId: primaryApplicantId,
    propertyId: propertyId,
    startDate: startDate,
    state: 'draft',
    term: term,
  },
  profile: {
    bankruptcy: false,
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
    personaAccountId: '1234',
    portalId: primaryApplicantId,
  },
};

export const step7CompleteArgs: ICalculateApplicationCompletionArgs = {
  application: {
    applicationId: applicationId,
    applicants: [
      {
        applicantId: primaryApplicantId,
        applicationId: applicationId,
        state: 'in progress',
        occupant: [
          {
            dateOfBirth: new Date('1982-05-05'),
            firstName: 'Porter',
            lastName: 'Dog',
            middleName: 'the',
          },
        ],
        pets: [],
        terms: {
          acceptedOn: startDate,
          version: '1',
        },
      },
    ],
    applicantsInvited: false,
    created: applicationDate,
    primaryApplicantId: primaryApplicantId,
    propertyId: propertyId,
    startDate: startDate,
    state: 'draft',
    term: term,
  },
  profile: {
    bankruptcy: false,
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
    personaAccountId: '1234',
    portalId: primaryApplicantId,
  },
};

export const step8CompleteArgs: ICalculateApplicationCompletionArgs = {
  application: {
    applicationId: applicationId,
    applicants: [
      {
        agent: {},
        applicantId: primaryApplicantId,
        applicationId: applicationId,
        state: 'in progress',
        occupant: [
          {
            dateOfBirth: new Date('1982-05-05'),
            firstName: 'Porter',
            lastName: 'Dog',
            middleName: 'the',
          },
        ],
        pets: [],
        terms: {
          acceptedOn: startDate,
          version: '1',
        },
        vehicle: [],
      },
    ],
    applicantsInvited: false,
    created: applicationDate,
    primaryApplicantId: primaryApplicantId,
    propertyId: propertyId,
    startDate: startDate,
    state: 'draft',
    term: term,
  },
  profile: {
    bankruptcy: false,
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
    personaAccountId: '1234',
    portalId: primaryApplicantId,
  },
};

export const step9CompleteArgs: ICalculateApplicationCompletionArgs = {
  application: {
    applicationId: applicationId,
    applicants: [
      {
        agent: {},
        applicantId: primaryApplicantId,
        applicationId: applicationId,
        state: 'in progress',
        occupant: [
          {
            dateOfBirth: new Date('1982-05-05'),
            firstName: 'Porter',
            lastName: 'Dog',
            middleName: 'the',
          },
        ],
        pets: [],
        terms: {
          acceptedOn: startDate,
          version: '1',
        },
        vehicle: [],
      },
    ],
    applicantsInvited: false,
    created: applicationDate,
    primaryApplicantId: primaryApplicantId,
    propertyId: propertyId,
    startDate: startDate,
    state: 'draft',
    term: term,
  },
  profile: {
    bankruptcy: false,
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
    personaAccountId: '1234',
    plaidUserToken: '1234',
    portalId: primaryApplicantId,
  },
};

export const step10CompleteArgs: ICalculateApplicationCompletionArgs = {
  application: applicationComplete,
  profile: profileComplete,
};
