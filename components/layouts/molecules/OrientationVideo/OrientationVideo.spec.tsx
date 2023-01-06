import userEvent from '@testing-library/user-event';
import React from 'react';

import { act, render, screen } from '#utils/testing-library';

import { OrientationVideo } from './OrientationVideo';

describe('OrientationVideo', () => {
  it('renders the OrientationVideo', async () => {
    const component = render(<OrientationVideo />);
    await act(async () => {
      expect(component.queryAllByTestId('orientation-video-modal')).not.toBeNull();
      expect(component.getByTestId('checkbox-term')).toBeInTheDocument();
      expect(component.getByTestId('term-acceptance')).toBeInTheDocument();
    });
  });

  it('do not renders the OrientationVideo', () => {
    render(<OrientationVideo openModal={false}></OrientationVideo>);
    expect(screen.queryByTestId('orientation-video-modal')).toBeNull();
  });

  it('term accepted hence check box and accept button enabled in the OrientationVideo', async () => {
    const onChange = jest.fn();
    const component = render(<OrientationVideo termAccepted onTermAccepted={onChange} />);
    await act(async () => {
      expect(component.getByRole('checkbox')).toBeChecked();
      expect(component.getByTestId('term-acceptance')).toBeInTheDocument();
      expect(component.getByTestId('term-acceptance')).not.toBeDisabled();
      userEvent.click(component.getByTestId('term-acceptance'));
      expect(onChange).toHaveBeenCalled();

      userEvent.click(component.getByRole('checkbox'));
    });
  });
});
