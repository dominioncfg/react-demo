import { render, screen } from '@testing-library/react';
import { MyTestingPage } from '../MyTestingPage';

describe('App', () => {
  it('renders the App component', () => {
    render(<MyTestingPage />);

    const element = screen.getByText('Hola Mundo');

    expect(element).toBeVisible();
  });
});
