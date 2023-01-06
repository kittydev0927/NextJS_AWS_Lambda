jest.mock('next/router', () => {
  return { useRouter: jest.fn().mockReturnValue({ route: '/edit-personal-information' }) };
});
import React from 'react';

import { render, screen } from '#utils/testing-library';

import { TitleFolder } from './TitleFolder';

describe('TitleFolder', () => {
  const title = 'test title';

  it('title was rendered correctly', () => {
    render(<TitleFolder title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
