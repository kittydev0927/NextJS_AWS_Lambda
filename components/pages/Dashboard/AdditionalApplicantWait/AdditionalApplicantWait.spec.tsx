jest.mock('#auth/UseProfile');

import React from 'react';

import { render, screen } from '#utils/testing-library';

import { AdditionalApplicantWait, ApplicantWaitTitle } from './AdditionalApplicantWait';

describe('Additional Applicant Wait', () => {
  it('renders the Additional Applicant Wait', () => {
    // Act
    const maxRent = 2500;
    render(<AdditionalApplicantWait maxRent={maxRent} />);
    // Assert
    expect(screen.getByText(/Your portion of the application is complete, well done!/iu)).toBeInTheDocument();
  });

  it('renders default Rent on Additional Applicant Wait', () => {
    // Act
    render(<AdditionalApplicantWait />);
    // Assert
    expect(screen.getByText(/Your portion of the application is complete, well done!/iu)).toBeInTheDocument();
  });
});

describe('ApplicantWaitTitle test', () => {
  const createWrapper = (smallBreakpoint: boolean) => <ApplicantWaitTitle smallBreakpoint={smallBreakpoint} />;

  it('render sm breakpoints', () => {
    render(createWrapper(false));
    expect(screen.getByText(/Your portion of the application is complete, well done!/iu)).toBeDefined();
  });

  it('render sm breakpoints up', () => {
    render(createWrapper(true));
    expect(screen.getByText(/Your portion of the application is complete, well done!/iu)).toBeDefined();
  });
});
