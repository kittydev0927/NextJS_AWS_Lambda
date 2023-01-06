import { render, screen } from '#utils/testing-library';

import { PropertyItem } from './PropertyItem';

describe('PropertyItem', () => {
  const data = {
    name: 'test name',
    value: 'test value',
  };

  it('"name" and "value" props are rendered correctly', () => {
    render(<PropertyItem {...data} />);
    expect(screen.getByText(data.name)).toBeInTheDocument();
    expect(screen.getByText(data.value)).toBeInTheDocument();
  });

  it('"valueUnderTitle" props is provided and made 12 column', () => {
    const { container } = render(<PropertyItem {...data} valueUnderTitle />);
    expect(container.getElementsByClassName('MuiGrid-grid-xs-12')).toHaveLength(1);
  });
});
