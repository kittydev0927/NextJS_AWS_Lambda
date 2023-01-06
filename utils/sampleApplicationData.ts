import type { IApplication } from '#models/IApplication';

const applicationDate = new Date('1982-05-05');
const applicationId = 'e4692271-5b1e-4e55-9f32-daf4a5cff424';
const coApplicantId = 'bb0d759e-ba97-4c1c-a915-4c21a373822c';
const primaryApplicantId = 'aba5505b-6c40-49fd-9080-1bbd37280efc';
const propertyId = '807d5789-b7a2-4b9d-8731-4bf6e14124fa';
const startDate = new Date('2022-05-05');
const term = 12;

// TODO: this fixture isn't right... eviction etc
export const applicationDraftComplete: IApplication = {
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
          petName: 'Frankie',
          petType: 'salamander',
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
  finalPaymentIntent: true,
  primaryApplicantId: primaryApplicantId,
  propertyId: propertyId,
  startDate: startDate,
  state: 'draft',
  stripePaymentIntent: 'txn_1234',
  term: term,
};

export const applicationDraftIncomplete: IApplication = {
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
          petName: 'Frankie',
          petType: 'salamander',
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
  state: 'draft',
};

export const applicationSecurityPaid: IApplication = {
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
          petName: 'Frankie',
          petType: 'salamander',
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
  securityPaymentIntent: 'txn_10908',
  state: 'draft',
};
