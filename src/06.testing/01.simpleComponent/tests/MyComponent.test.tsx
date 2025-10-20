import { render, screen, waitFor } from '@testing-library/react';
import { MySimpleComponentTestingPage } from '../MySimpleComponentTestingPage';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('renders the counter element', () => {
    render(<MySimpleComponentTestingPage />);

    const element = screen.getByRole('count');
    expect(element).toBeVisible();
    expect(element.innerHTML).toBe('0');
  });

  it('renders the action buttons', () => {
    render(<MySimpleComponentTestingPage />);

    const decrementButton = screen.getByText('Decrement');
    expect(decrementButton).toBeVisible();
    expect(decrementButton.tagName).toBe('BUTTON');

    const increment = screen.getByText('Increment');
    expect(increment).toBeVisible();
    expect(increment.tagName).toBe('BUTTON');

    const reset = screen.getByText('Reset');
    expect(reset).toBeVisible();
    expect(reset.tagName).toBe('BUTTON');
  });

  it('can increase the counter', async () => {
    render(<MySimpleComponentTestingPage />);

    const increment = screen.getByText('Increment');

    userEvent.click(increment);

    await waitFor(() => {
      const element = screen.getByRole('count');
      expect(element).toBeVisible();
      expect(element.innerHTML).toBe('1');
    });
  });

  it('can decrease the counter', async () => {
    render(<MySimpleComponentTestingPage />);

    const decrement = screen.getByText('Decrement');

    userEvent.click(decrement);

    await waitFor(() => {
      const element = screen.getByRole('count');
      expect(element).toBeVisible();
      expect(element.innerHTML).toBe('-1');
    });
  });

  it('can decrease the counter', async () => {
    render(<MySimpleComponentTestingPage />);

    const increment = screen.getByText('Increment');
    const reset = screen.getByText('Reset');

    userEvent.click(increment);
    userEvent.click(reset);

    await waitFor(() => {
      const element = screen.getByRole('count');
      expect(element).toBeVisible();
      expect(element.innerHTML).toBe('0');
    });
  });
});
