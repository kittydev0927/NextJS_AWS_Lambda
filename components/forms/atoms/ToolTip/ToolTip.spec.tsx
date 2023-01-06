import React from 'react';

import { ToolTip } from '#components/forms/atoms/ToolTip/ToolTip';
import { theme } from '#styles/styles';
import { render, screen } from '#utils/testing-library';

const setOpen = jest.fn();

describe('Tootip', () => {
  it('renders the Tooltip', () => {
    render(
      <ToolTip
        open
        setOpen={setOpen}
        content={[
          {
            value:
              'Progress Residential accepts Housing Choice vouchers. For more information on Housing Choice, please',
            href: '',
            linkText: 'Click Here.',
          },
        ]}
      />,
    );
    expect(screen.getByTestId('tool-tip')).toBeInTheDocument();
  });
  it('renders with correct styles', () => {
    render(
      <ToolTip
        open
        setOpen={setOpen}
        content={[
          {
            value:
              'Progress Residential accepts Housing Choice vouchers. For more information on Housing Choice, please',
            href: '',
            linkText: 'Click Here.',
          },
        ]}
      />,
    );
    expect(screen.getByTestId('tool-tip-styled-text')).toHaveStyle(`color: ${theme.colors.mondo}`);
    expect(screen.getByTestId('tool-tip-styled-link')).toHaveStyle(`color: ${theme.colors.accessibleGreen}`);
    expect(screen.getByTestId('tool-tip-styled-link')).toHaveStyle(`font-weight: ${theme.fontWeight.bold}`);
  });
});
