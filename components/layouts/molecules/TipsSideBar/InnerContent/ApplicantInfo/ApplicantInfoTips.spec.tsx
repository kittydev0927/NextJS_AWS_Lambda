import { render, screen } from '#utils/testing-library';

import { ApplicantInfoTips } from './ApplicantInfoTips';
describe('Profile Wrapper', () => {
  it('renders the Component', () => {
    render(<ApplicantInfoTips />);
    expect(screen.getByTestId('applicant-info-tips')).toBeInTheDocument();
  });
});
