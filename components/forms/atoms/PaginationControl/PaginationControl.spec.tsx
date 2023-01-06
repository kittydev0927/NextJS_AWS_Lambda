import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import { PaginationControl } from './PaginationControl';

describe('Pagination Control', () => {
  const onClickNextMockFn = jest.fn();
  const onClickPrevMockFn = jest.fn();
  it('the component renders correctly with default props', () => {
    render(<PaginationControl onClickNext={onClickNextMockFn} onClickPrev={onClickPrevMockFn} />);
    expect(screen.getByTestId('PaginationControl')).toBeVisible();
  });
  it('update current page based on click', () => {
    render(<PaginationControl onClickNext={onClickNextMockFn} onClickPrev={onClickPrevMockFn} />);
    const paginationcontrol = screen.getByTestId('PaginationControl');
    expect(paginationcontrol).toBeVisible();
    const rightbutton = screen.getByTestId('nextpagebutton');
    const leftbutton = screen.getByTestId('previouspagebutton');
    expect(rightbutton).toBeInTheDocument();
    expect(leftbutton).toBeInTheDocument();
    userEvent.click(rightbutton);
    userEvent.click(leftbutton);
    expect(paginationcontrol).toBeInTheDocument();
  });
});
