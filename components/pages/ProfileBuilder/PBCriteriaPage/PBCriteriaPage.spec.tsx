jest.mock('#auth/UseRouteUnauthenticated');
import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { sampleSteps } from '#utils/sampleFormData';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { render, screen } from '#utils/testing-library';

import { PBCriteriaPageComponent } from './PBCriteriaPage';

const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

describe('Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouteUnauthenticated.mockReturnValue(true);
  });

  it('renders the criteria Page', () => {
    render(
      <PBCriteriaPageComponent
        step={1}
        steps={sampleSteps}
        userAuthContent={sampleUserAuthContent as unknown as IUserAuthData}
      />,
    );
    expect(screen.getByText('Please select all that apply to you from the list below.')).toBeInTheDocument();
  });
  // this test doesn't apply to iteration 1
  // ('uses default props', () => {
  //   render(<PBCriteriaPageComponent />);
  //   expect(screen.getByText(`Step 6 of 9`)).toBeInTheDocument();
  //   expect(screen.getByText('Criteria')).toBeInTheDocument();
  // });
  it('renders button according to screen width', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500,
    });
    render(<PBCriteriaPageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    window.dispatchEvent(new Event('resize'));
    const button = screen.getByText('Next');
    expect(button).toBeInTheDocument();
  });
});
