import { MostInterestedSection } from '#components/forms/molecules/PBSections/MostInterestedComponent/MostInterestedSection';
import type { MostInterestedOptionProps } from '#components/forms/molecules/PBSections/MostInterestedComponent/MostInterestedSection.types';
import { fireEvent, render, screen } from '#utils/testing-library';

const testOptions: MostInterestedOptionProps[] = [
  { label: 'I need to move. And fast!' },
  {
    label: 'I need a short-term rental',
    additionAnswer: {
      selectOptions: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
      ],
    },
  },
  { label: 'Other', additionAnswer: 'input' },
];

describe('MostInterestedSection', () => {
  it('renders MostInterestedSection', () => {
    render(<MostInterestedSection options={testOptions} />);
    expect(screen.getByTestId('most-interested')).toBeInTheDocument();
  });

  it('Should render header', () => {
    render(<MostInterestedSection options={testOptions} />);
    expect(screen.getByTestId('most-interested-header')).toBeInTheDocument();
  });

  it('Should render all checkboxes', () => {
    render(<MostInterestedSection options={testOptions} />);
    const checkboxesCount = screen.getAllByRole('checkbox');
    expect(checkboxesCount).toHaveLength(testOptions.length);
  });

  it('Should not render addition questions fields', () => {
    render(<MostInterestedSection options={testOptions} />);
    const checkboxesCount = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxesCount[0]);
    expect(screen.queryByTestId('add-input-answer')).toBeNull();
    expect(screen.queryByTestId('add-select-answer')).toBeNull();
  });

  it('Should render addition questions - input', () => {
    render(<MostInterestedSection options={testOptions} />);
    const checkboxesCount = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxesCount[2]);
    expect(screen.getByTestId('add-input-answer')).toBeInTheDocument();
  });

  it('Should render addition questions - select', () => {
    render(<MostInterestedSection options={testOptions} />);
    const checkboxesCount = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxesCount[1]);
    expect(screen.getByTestId('add-select-answer')).toBeInTheDocument();
  });

  it('Should be checked only one checkbox', () => {
    render(<MostInterestedSection options={testOptions} />);
    const checkboxesCount = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxesCount[0]);
    fireEvent.click(checkboxesCount[1]);
    expect(checkboxesCount[0]).not.toBeChecked();
    expect(checkboxesCount[1]).toBeChecked();
    expect(checkboxesCount[2]).not.toBeChecked();
  });
});
