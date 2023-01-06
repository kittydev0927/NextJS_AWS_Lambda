import { FormProgress } from '#components/forms/molecules/FormProgress/FormProgress';
import { theme } from '#styles/styles';
import { createMatchMedia } from '#tests/createMatchMedia';
import { sampleSteps } from '#utils/sampleFormData';
import { render, screen } from '#utils/testing-library';

describe('FormProgress', () => {
  beforeAll(() => {
    window.matchMedia = createMatchMedia(theme.breakpoints.values.md);
  });

  it('renders FormProgress', () => {
    render(<FormProgress steps={sampleSteps} />);
    expect(screen.getByText('Location')).toBeInTheDocument();
  });

  it('defaults to 0% completed when no currentStep prop is provided', () => {
    render(<FormProgress steps={sampleSteps} />);
    expect(screen.getByText('0%')).toBeInTheDocument();
  });
});
