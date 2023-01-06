import userEvent from '@testing-library/user-event';

import { HelpfulRating } from '#components/forms/molecules/HelpfulRating/HelpfulRating';
import { render, screen } from '#utils/testing-library';

describe('HelpfulRating', () => {
  it('renders HelpfulRating', () => {
    render(<HelpfulRating />);
    expect(screen.getByText(/Was this helpful?/i)).toBeInTheDocument();
  });

  it('displays the contact information when a negative rating is selected', () => {
    render(<HelpfulRating />);
    userEvent.click(screen.getByLabelText(/this was not helpful/i));
    expect(screen.getByText(/For help please contact/i)).toBeVisible();
  });
});
