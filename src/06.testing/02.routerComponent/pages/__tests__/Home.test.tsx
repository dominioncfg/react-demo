import { render, screen } from '@testing-library/react';
import { HomePage } from '../Home';

describe('Home Component', () => {
  it('Should render the home component', () => {
    render(<HomePage />);

    expect(screen.getByText('Home Page')).toBeVisible();
    expect(screen.getByText('Welcome to the routed app page.')).toBeVisible();
  });
});
