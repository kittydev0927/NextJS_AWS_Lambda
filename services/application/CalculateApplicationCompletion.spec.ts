import { CalculateApplicationCompletion } from './CalculateApplicationCompletion';
import {
  applicationCancelled,
  applicationEmptyPrimaryApplicantId,
  applicationMissingValidPrimaryApplicant,
  applicationSubmitted,
  profileComplete,
  step0CompleteArgs,
  step1CompleteArgs,
  step2CompleteArgs,
  step3CompleteArgs,
  step4CompleteArgs,
  step5CompleteArgs,
  step6CompleteArgs,
  step7CompleteArgs,
  step8CompleteArgs,
  step9CompleteArgs,
  step10CompleteArgs,
} from './CalculateApplicationCompletion.fixtures';

describe('Calculate Application Completion', () => {
  describe('exception conditions', () => {
    it('application in cancelled state throws', () => {
      expect(() => {
        const args = { application: applicationCancelled, profile: profileComplete };
        CalculateApplicationCompletion(args);
      }).toThrow();
    });

    it('application with empty primary applicant id throws', () => {
      expect(() => {
        const args = { application: applicationEmptyPrimaryApplicantId, profile: profileComplete };
        CalculateApplicationCompletion(args);
      }).toThrow();
    });

    it('missing primary applicant throws', () => {
      expect(() => {
        const args = { application: applicationMissingValidPrimaryApplicant, profile: profileComplete };
        CalculateApplicationCompletion(args);
      }).toThrow();
    });
  });

  describe('primary applicant flow', () => {
    it('previously submitted application passes all steps', () => {
      const expected = {
        completed: [true, true, true, true, true, true, true, true, true, true, true],
        next: -1,
        nextPage: undefined,
        totalSteps: 11,
      };
      const args = { application: applicationSubmitted, profile: profileComplete };
      const actual = CalculateApplicationCompletion(args);
      expect(actual).toEqual(expected);
    });

    it('step zero (what to expect / application not started) succeeds', () => {
      const expected = {
        completed: [false, false, false, false, false, false, false, false, false, false, false],
        next: 0,
        nextPage: 'what-to-expect',
        totalSteps: 11,
      };
      const args = step0CompleteArgs;
      const actual = CalculateApplicationCompletion(args);
      expect(actual).toEqual(expected);
    });

    it('step one (invite applicants) complete succeeds', () => {
      const expected = {
        completed: [true, true, false, false, false, false, false, false, false, false, false],
        next: 2,
        nextPage: 'background',
        totalSteps: 11,
      };
      const args = step1CompleteArgs;
      const actual = CalculateApplicationCompletion(args);
      expect(actual).toEqual(expected);
    });

    it('step two (background) complete succeeds', () => {
      const expected = {
        completed: [true, true, true, false, false, false, false, false, false, false, false],
        next: 3,
        nextPage: 'lease-details',
        totalSteps: 11,
      };
      const args = step2CompleteArgs;
      const actual = CalculateApplicationCompletion(args);
      expect(actual).toEqual(expected);
    });

    it('step three (lease details) complete succeeds', () => {
      const expected = {
        completed: [true, true, true, true, false, false, false, false, false, false, false],
        next: 4,
        nextPage: 'applicant-info',
        totalSteps: 11,
      };
      const args = step3CompleteArgs;
      const actual = CalculateApplicationCompletion(args);
      expect(actual).toEqual(expected);
    });

    it('step four (applicant info) complete succeeds', () => {
      const expected = {
        completed: [true, true, true, true, true, false, false, false, false, false, false],
        next: 5,
        nextPage: 'current-residence',
        totalSteps: 11,
      };
      const args = step4CompleteArgs;
      const actual = CalculateApplicationCompletion(args);
      expect(actual).toEqual(expected);
    });

    it('step five (current residence) complete succeeds', () => {
      const expected = {
        completed: [true, true, true, true, true, true, false, false, false, false, false],
        next: 6,
        nextPage: 'occupant-info',
        totalSteps: 11,
      };
      const args = step5CompleteArgs;
      const actual = CalculateApplicationCompletion(args);
      expect(actual).toEqual(expected);
    });

    it('step six (occupant info) complete succeeds', () => {
      const expected = {
        completed: [true, true, true, true, true, true, true, false, false, false, false],
        next: 7,
        nextPage: 'animals',
        totalSteps: 11,
      };
      const args = step6CompleteArgs;
      const actual = CalculateApplicationCompletion(args);
      expect(actual).toEqual(expected);
    });

    it('step seven (animals) complete succeeds', () => {
      const expected = {
        completed: [true, true, true, true, true, true, true, true, false, false, false],
        next: 8,
        nextPage: 'additional-info',
        totalSteps: 11,
      };
      const args = step7CompleteArgs;
      const actual = CalculateApplicationCompletion(args);
      expect(actual).toEqual(expected);
    });

    it('step eight (additional info) complete succeeds', () => {
      const expected = {
        completed: [true, true, true, true, true, true, true, true, true, false, false],
        next: 9,
        nextPage: 'income',
        totalSteps: 11,
      };
      const args = step8CompleteArgs;
      const actual = CalculateApplicationCompletion(args);
      expect(actual).toEqual(expected);
    });

    it('step nine (income) complete succeeds', () => {
      const expected = {
        completed: [true, true, true, true, true, true, true, true, true, true, false],
        next: 10,
        nextPage: 'pay',
        totalSteps: 11,
      };
      const args = step9CompleteArgs;
      const actual = CalculateApplicationCompletion(args);
      expect(actual).toEqual(expected);
    });

    it('step ten (payment / complete application) succeeds', () => {
      const expected = {
        completed: [true, true, true, true, true, true, true, true, true, true, true],
        next: -1,
        nextPage: undefined,
        totalSteps: 11,
      };
      const args = step10CompleteArgs;
      const actual = CalculateApplicationCompletion(args);
      expect(actual).toEqual(expected);
    });
  });
});
