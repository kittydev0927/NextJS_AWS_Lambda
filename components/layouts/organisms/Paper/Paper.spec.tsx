import React from 'react';

import { render, screen } from '#utils/testing-library';

import { Paper } from './Paper';
import { GRADIENT_BG } from './Paper.types';

describe('Paper', () => {
  it('Finds rendered Paper component.', () => {
    render(<Paper>paper!</Paper>);

    expect(screen.queryByText('paper!')).toBeInTheDocument();
  });
  it('will not show the outer wrapper if "showOuterPaper" is set to false', () => {
    render(<Paper showOuterPaper={false}>paper!</Paper>);

    expect(screen.queryByTestId('outerPaper')).toBeNull();
  });
  it('will show the outer wrapper if "showOuterPaper" is set to true', () => {
    render(<Paper showOuterPaper>paper!</Paper>);

    expect(screen.queryByTestId('outerPaper')).toBeInTheDocument();
  });
  it('will apply gradient styles to wrapper if specified', () => {
    render(
      <Paper showOuterPaper outerTheme="gradient">
        paper!
      </Paper>,
    );

    expect(screen.queryByTestId('outerPaper')).toHaveStyle(`background: ${GRADIENT_BG}`);
  });
  it('will apply gradient styles to inner Paper if specified', () => {
    render(<Paper innerTheme="gradient">paper!</Paper>);

    expect(screen.queryByTestId('innerPaper')).toHaveStyle(`background: ${GRADIENT_BG}`);
  });
});
