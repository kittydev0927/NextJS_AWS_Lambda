import { useFinalPaymentIntent } from '#services/application/getFinalPaymentIntent';
import { applicationDraftIncomplete, applicationSecurityPaid } from '#utils/sampleApplicationData';

const mockReturnFunc = jest.fn();
mockReturnFunc.mockReturnValueOnce([applicationDraftIncomplete]).mockReturnValueOnce([applicationSecurityPaid]);
const mockedUser = jest.fn().mockImplementation(() => {
  return { getApplications: mockReturnFunc };
});
jest.mock('#auth/PortalUser', () => {
  return mockedUser;
});

describe('GetSecurityDepositDetail', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  it('GetFinalPaymentIntent service return false', () => {
    const isSecurityDepositPaid = useFinalPaymentIntent();
    expect(isSecurityDepositPaid).toBe(false);
  });

  it('GetFinalPaymentIntent service return true', () => {
    const isSecurityDepositPaid = useFinalPaymentIntent();
    expect(isSecurityDepositPaid).toBe(true);
  });
});
