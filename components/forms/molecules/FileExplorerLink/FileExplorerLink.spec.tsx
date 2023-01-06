import React from 'react';

import { fireEvent, render, screen, waitFor } from '#utils/testing-library';

import { FileExplorerLink } from './FileExplorerLink';

let file: File;
const filename = 'unittestfile.pdf';
const linkText = 'Test Link Text';

beforeEach(() => {
  file = new File(['testing'], filename, { type: 'application/pdf' });
});

describe('FileExplorerLink', () => {
  it('renders the FileExplorerLink', async () => {
    render(<FileExplorerLink linkName="test" linkText={linkText} />);

    expect(screen.getByText(linkText)).toBeInTheDocument();
  });

  it('uploads a file', async () => {
    const onChangeMock = jest.fn();
    render(<FileExplorerLink linkText={linkText} onChange={onChangeMock} />);
    const uploader = screen.getByTestId(`file-explorer-link-${linkText}`);
    await waitFor(() =>
      fireEvent.change(uploader, {
        target: { files: [file] },
      }),
    );
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
