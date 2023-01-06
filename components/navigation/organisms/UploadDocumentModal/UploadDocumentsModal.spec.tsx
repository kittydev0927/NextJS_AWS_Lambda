import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import { UploadDocumentModal } from './UploadDocumentModal';
// let useStateMock: { mockReturnValue: (arg0: string) => void };
// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn(),
// }));

describe('Renders Upload Modal and Acts according to user input', () => {
  // const setState = jest.fn();
  // beforeAll(() => {
  //   useStateMock = jest.spyOn(React, 'useState');
  // });
  it('select document category', () => {
    // useStateMock.mockReturnValue('HOA Approval');

    render(<UploadDocumentModal document={new File([], 'Example.jpg', {})} />);
    expect(screen.getByTestId('upload-document-modal')).toBeInTheDocument();
    expect(screen.getByTestId('upload-button')).toBeInTheDocument();
    expect(screen.getByText('Select Document Category')).toBeVisible();
    userEvent.click(screen.getByText('Select Document Category'));
    expect(screen.getByTestId('select-item-0')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('select-item-0'));
    userEvent.click(screen.getByTestId('upload-button'));
  });

  it('closes the modal', () => {
    render(<UploadDocumentModal document={new File([], 'Example.jpg', {})} />);
    expect(screen.getByTestId('close-modal-button')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('close-modal-button'));
  });
});
