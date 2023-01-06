import { InvitationSent } from '#components/forms/molecules/InvitationSent/InvitationSent';
import { render, screen } from '#utils/testing-library';

describe('InvitationSent', () => {
  const sampleInvite = {
    firstName: 'Samantha',
    email: 'sjones@gmail.com',
    lastName: 'Jones',
    status: 'pending invitation',
  };

  it('renders InvitationSent', () => {
    render(<InvitationSent coapplicant={sampleInvite} />);
    expect(screen.getByText(/Samantha/i)).toBeInTheDocument();
  });
});
