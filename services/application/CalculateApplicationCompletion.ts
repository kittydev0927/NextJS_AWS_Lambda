import _ from 'lodash';

import type { IApplication } from '#models/IApplication';

import type { ICalculateApplicationCompletionArgs } from './ICalculateApplicationCompletionArgs';
import type { ICalculateApplicationCompletionResult } from './ICalculateApplicationCompletionResult';

export const CalculateApplicationCompletion = (
  args: ICalculateApplicationCompletionArgs,
): ICalculateApplicationCompletionResult => {
  applicationSanityCheck(args.application);

  const stepsPrimary = [
    whatToExpectComplete,
    inviteApplicantsComplete,
    backgroundComplete,
    leaseDetailsComplete,
    applicantInfoComplete,
    currentResidenceComplete,
    occupantInfoComplete,
    petsComplete,
    additionalInfoComplete,
    incomeComplete,
    paymentComplete,
  ];

  const pageNamesPrimary = [
    'what-to-expect',
    'invite-applicants',
    'background',
    'lease-details',
    'applicant-info',
    'current-residence',
    'occupant-info',
    'animals',
    'additional-info',
    'income',
    'pay',
  ];

  // TODO: verify that the co-applicant steps are correct when they are defined
  // see https://fundamentalreo.atlassian.net/browse/CPP-1439?focusedCommentId=109655
  const stepsCoApplicant = [
    whatToExpectComplete,
    inviteApplicantsComplete,
    backgroundComplete,
    leaseDetailsComplete,
    applicantInfoComplete,
    currentResidenceComplete,
    occupantInfoComplete,
    petsComplete,
    additionalInfoComplete,
    incomeComplete,
    paymentComplete,
  ];

  // TODO: verify that page names are correct when they are defined
  // see https://fundamentalreo.atlassian.net/browse/CPP-1439?focusedCommentId=109655
  const pageNamesCoApplicant = [
    'what-to-expect',
    'invite-applicants',
    'background',
    'lease-details',
    'applicant-info',
    'current-residence',
    'occupant-info',
    'animals',
    'additional-info',
    'income',
    'pay',
  ];

  const isPrimaryApplicant = !args.application || args.application.primaryApplicantId === args.profile.portalId;
  const steps = isPrimaryApplicant ? stepsPrimary : stepsCoApplicant;
  const completed = steps.map(step => step(args));
  const next = completed.indexOf(false);
  const nextPage = isPrimaryApplicant ? pageNamesPrimary[next] : pageNamesCoApplicant[next];
  const totalSteps = steps.length;

  return {
    completed,
    next,
    nextPage,
    totalSteps,
  };
};

function applicationSanityCheck(application?: IApplication) {
  if (application) {
    if (application.state === 'cancelled') {
      throw new Error('Application has been cancelled.');
    }
    if (application.primaryApplicantId === '') {
      throw new Error('Missing primary applicant id.');
    }
    if (_.isEmpty(application.applicants)) {
      throw new Error('Applicants cannot be undefined or empty.');
    }
  }
}

function matchApplicantOrThrow(args: ICalculateApplicationCompletionArgs) {
  const { application, profile } = args;
  if (!application) {
    throw new Error('`args.application` cannot be undefined.');
  }

  const applicant = application.applicants.find(a => a.applicantId === profile.portalId);
  if (!applicant) {
    throw new Error('Unable to match applicant to the provided `profile.portalId`.');
  }

  return applicant;
}

// step 0
function whatToExpectComplete(args: ICalculateApplicationCompletionArgs): boolean {
  const { application } = args;

  return !_.isUndefined(application);
}

// step 1
function inviteApplicantsComplete(args: ICalculateApplicationCompletionArgs): boolean {
  const { application } = args;

  if (!application) return false;
  if (application.state === 'submitted') return true;

  return !_.isUndefined(args.application?.applicantsInvited);
}

// step 2
function backgroundComplete(args: ICalculateApplicationCompletionArgs): boolean {
  const { application, profile } = args;

  if (!application) return false;
  if (application.state === 'submitted') return true;

  // assumes that these props are set to false for negative cases
  return !(_.isNil(profile.bankruptcy) && _.isNil(profile.eviction) && _.isNil(profile.felony));
}

// step 3
function leaseDetailsComplete(args: ICalculateApplicationCompletionArgs): boolean {
  const { application, profile } = args;

  if (!application) return false;
  if (application.state === 'submitted') return true;

  const applicant = matchApplicantOrThrow(args);
  const housingChoiceValid = (profile.housingChoice && profile.housingChoiceVoucherUploaded) || true;

  return (
    !_.isNil(application.startDate) &&
    !_.isNil(application.term) &&
    !_.isNil(applicant?.terms?.acceptedOn) &&
    housingChoiceValid
  );
}

// step 4
function applicantInfoComplete(args: ICalculateApplicationCompletionArgs): boolean {
  const { application, profile } = args;

  if (!application) return false;
  if (application.state === 'submitted') return true;

  // assumes that the sole existence of a Persona token indicates id verification
  return !_.isUndefined(profile.personaAccountId);
}

// step 5
function currentResidenceComplete(args: ICalculateApplicationCompletionArgs): boolean {
  const { application, profile } = args;

  if (!application) return false;
  if (application.state === 'submitted') return true;

  // assumes that this value is set to `null` iff explicitly not populated by the user
  return !_.isUndefined(profile.currentAddress);
}

// step 6
function occupantInfoComplete(args: ICalculateApplicationCompletionArgs): boolean {
  const { application } = args;

  if (!application) return false;
  if (application.state === 'submitted') return true;

  const applicant = matchApplicantOrThrow(args);

  // assumes that this value is to `null` or `[]` iff explicitly not populated by the user
  return !_.isEmpty(applicant.occupant);
}

// step 7
function petsComplete(args: ICalculateApplicationCompletionArgs): boolean {
  const { application } = args;

  if (!application) return false;
  if (application.state === 'submitted') return true;

  const applicant = matchApplicantOrThrow(args);

  // assumes that this value is set to `[]` iff explicitly not populated by the user
  return !_.isUndefined(applicant.pets);
}

// step 8
function additionalInfoComplete(args: ICalculateApplicationCompletionArgs): boolean {
  const { application } = args;

  if (!application) return false;
  if (application.state === 'submitted') return true;

  const applicant = matchApplicantOrThrow(args);

  // assumes that these values are set to `{}` and `[]` iff explicitly not populated by the user
  return !_.isUndefined(applicant.agent) && !_.isUndefined(applicant.vehicle);
}

// step 9
function incomeComplete(args: ICalculateApplicationCompletionArgs): boolean {
  const { application, profile } = args;

  if (!application) return false;
  if (application.state === 'submitted') return true;

  // assumes that the sole existence of a Plaid token indicates income verification
  return !_.isUndefined(profile.plaidUserToken);
}

// step 10
function paymentComplete(args: ICalculateApplicationCompletionArgs): boolean {
  const { application } = args;

  if (!application) return false;
  if (application.state === 'submitted') return true;

  // assumes that the sole existence of a Stripe token indicates payment completion
  return !_.isUndefined(application.stripePaymentIntent);
}
