import { useSecurityDepositPaid } from '#services/application/getSecurityDepositDetail';
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

  it('GetSecurityDepositDetail service return false', () => {
    const isSecurityDepositPaid = useSecurityDepositPaid();
    expect(isSecurityDepositPaid).toBe(false);
  });

  it('GetSecurityDepositDetail service return true', () => {
    const isSecurityDepositPaid = useSecurityDepositPaid();
    expect(isSecurityDepositPaid).toBe(true);
  });
});
