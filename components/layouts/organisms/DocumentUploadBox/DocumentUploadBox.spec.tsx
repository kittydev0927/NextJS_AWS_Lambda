import { useMediaQuery } from '@mui/material';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import { DocumentUploadBox } from './DocumentUploadBox';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn().mockReturnValue(true),
}));

describe('DocumentUploadBox', () => {
  it('Document upload box component rendering in desktop view', async () => {
    render(<DocumentUploadBox linkText="Upload Documents" />);

    expect(screen.getByTestId('file-upload-icon')).toBeInTheDocument();
    expect(screen.getByTestId('file-explorer-link-Upload Documents')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('file-explorer-link-Upload Documents'));
  });

  it('Document upload box component rendering in mobile view', async () => {
    (useMediaQuery as unknown as jest.Mock).mockReturnValue(false);

    render(<DocumentUploadBox linkText="Upload Documents" />);

    expect(screen.getByTestId('file-upload-icon')).toBeInTheDocument();
    expect(screen.getByTestId('file-explorer-link-Upload Documents')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('file-explorer-link-Upload Documents'));
  });
});
