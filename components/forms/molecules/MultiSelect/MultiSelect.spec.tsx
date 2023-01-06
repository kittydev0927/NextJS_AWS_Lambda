import userEvent from '@testing-library/user-event';

import { MultiSelect } from '#components/forms/molecules/MultiSelect/MultiSelect';
import { sampleMultiSelectData } from '#utils/sampleMultiSelectData';
import { render, screen } from '#utils/testing-library';

describe('MultiSelect', () => {
  const returnFalse = () => false;
  it('renders MultiSelect', () => {
    render(<MultiSelect options={sampleMultiSelectData} onSelectedOptions={returnFalse} />);
    expect(screen.getByTestId('multi-select')).toBeInTheDocument();
  });

  it('Should render all checkboxes', () => {
    render(<MultiSelect options={sampleMultiSelectData} onSelectedOptions={returnFalse} />);
    const checkboxesCount = screen.getAllByRole('checkbox');
    expect(checkboxesCount).toHaveLength(sampleMultiSelectData.length);
  });

  it('Should be checked only one checkbox', () => {
    render(<MultiSelect options={sampleMultiSelectData} onSelectedOptions={returnFalse} />);
    const checkboxesCount = screen.getAllByRole('checkbox');
    userEvent.click(checkboxesCount[1]);
    expect(checkboxesCount[1]).toBeChecked();
  });

  it('Should be checked none of the above checkbox', () => {
    render(<MultiSelect options={sampleMultiSelectData} onSelectedOptions={returnFalse} />);
    const checkboxesCount = screen.getAllByRole('checkbox');
    userEvent.click(checkboxesCount[2]);
    expect(checkboxesCount[2]).toBeChecked();
  });
});
