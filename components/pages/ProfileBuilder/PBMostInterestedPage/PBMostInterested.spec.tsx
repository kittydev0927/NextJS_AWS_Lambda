jest.mock('#auth/UseRouteUnauthenticated');
import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { extendedSteps } from '#utils/sampleFormData';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { render, screen } from '#utils/testing-library';

import { PBMostInterested } from './PBMostInterested';

const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

describe('Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouteUnauthenticated.mockReturnValue(true);
  });

  it('renders the Most Interested Page', () => {
    render(
      <PBMostInterested
        step={1}
        steps={extendedSteps}
        userAuthContent={sampleUserAuthContent as unknown as IUserAuthData}
      />,
    );
    expect(
      screen.getByText(`We're excited to get to know you better. What brought you to Progress Residential?`),
    ).toBeInTheDocument();
  });

  it('uses default props', () => {
    render(<PBMostInterested userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    expect(screen.getByText('Step 1 of 9')).toBeInTheDocument();
    expect(screen.getByText('Most Interested')).toBeInTheDocument();
  });

  it('renders button according to screen width', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500,
    });
    render(<PBMostInterested userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    window.dispatchEvent(new Event('resize'));
    const button = screen.getByText('Next');
    expect(button).toBeInTheDocument();
  });
});
